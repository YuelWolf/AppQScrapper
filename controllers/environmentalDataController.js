const moment = require('moment');

const EnvironmentalData = require('../models/environmentalData');

const environmentalCtrl = {}

//Create an environmental pollution entry
environmentalCtrl.create = async (req) => {    
    const duplicate = await EnvironmentalData.findOne({station_name: req.station_name, date: req.date})
    if(duplicate) {
        environmentalCtrl.update(req)
    }
    else{
        const newEntry = new EnvironmentalData({
            station_name: req.station_name,
            date : req.date,
            pm10: req.pm10,
            pm25: req.pm25,
            co: req.co,
            dir_viento: req.dir_viento,
            hr: req.hr,
            no: req.no,
            no2: req.no2,
            nox: req.nox,
            ozono: req.ozono,
            precipitacion: req.precipitacion,
            rs_global: req.rs_global,
            so2: req.so2,
            temperatura: req.temperatura,
            vel_viento: req.vel_viento,
            dir_viento_10m: req.dir_viento_10m,
            presion_baro: req.presion_baro,
            rad_solar: req.rad_solar,
            temperatura_2m: req.temperatura_2m,
            temperatura_8m: req.temperatura_8m,
            temperatura_20m: req.temperatura_20m,
            vel_viento_10m: req.vel_viento_10m,    
            bc: req.bc,
            temperatura_4m: req.temperatura_4m,
            uv_bc: req.uv_bc
        })
        await newEntry.save((err) => {
            if (err) console.log({msg: 'Información faltante o erronea'})
            else console.log({msg: 'registro guardado de manera exitosa'})
        })   

    }
}

//Update an enviromental pollution entry
environmentalCtrl.update = async (req) => {
    const currentEntry = await EnvironmentalData.find({station_name: req.station_name, date: req.date})
    let newEntry  = {}
    newEntry.station_name = currentEntry.station_name
    newEntry.date = currentEntry.date
    if(req.pm10) newEntry.pm10 = req.pm10
    if(req.pm25) newEntry.pm25 = req.pm25
    if(req.co) newEntry.co = req.co
    if(req.dir_viento) newEntry.dir_viento = req.dir_viento
    if(req.hr) newEntry.hr = req.hr
    if(req.no) newEntry.no = req.no
    if(req.no2) newEntry.no2 = req.no2
    if(req.nox) newEntry.nox = req.nox
    if(req.ozono) newEntry.ozono = req.ozono
    if(req.precipitacion) newEntry.precipitacion = req.precipitacion
    if(req.rs_global) newEntry.rs_global = req.rs_global
    if(req.so2) newEntry.so2 = req.so2
    if(req.temperatura) newEntry.temperatura = req.temperatura
    if(req.vel_viento) newEntry.vel_viento = req.vel_viento
    if(req.dir_viento_10m) newEntry.dir_viento_10m = req.dir_viento_10m
    if(req.presion_baro) newEntry.presion_baro = req.presion_baro
    if(req.rad_solar) newEntry.rad_solar = req.rad_solar
    if(req.temperatura_2m) newEntry.temperatura_2m = req.temperatura_2m
    if(req.temperatura_8m) newEntry.temperatura_8m = req.temperatura_8m
    if(req.temperatura_20m) newEntry.temperatura_20m = req.temperatura_20m
    if(req.vel_viento_10m) newEntry.vel_viento_10m = req.vel_viento_10m
    if(req.bc) newEntry.bc = req.bc
    if(req.temperatura_4m) newEntry.temperatura_4m = req.temperatura_4m
    if(req.uv_bc) newEntry.uv_bc = req.uv_bc

    await EnvironmentalData.findByIdAndUpdate(currentEntry.id, { $set: newEntry }, (err) => {
        if (err) console.log({ 'status': 'Error al actualizar' })
      })
      console.log({
        'status': 'Entrada actualizado'
      })
    
}

//Get environmental pollution data
environmentalCtrl.getCurrentData = async (req, res) => {
    const currentDate = moment(new Date()).format('YYYY-MM-DD')
    const Data = await EnvironmentalData.find({date: currentDate}, 'station_name pm10 pm25');    
    if (Data){
        const todayData = []
        Data.forEach(element => {
            let currentData = {
                station_name : element.station_name,
                pm10 : element.pm10.pop(),
                pm25 : element.pm25.pop()
            }
            
            let maxPollution = (parseFloat(currentData.pm10.value) >= (parseFloat(currentData.pm25.value)*2)) ? parseFloat(currentData.pm10.value) : parseFloat(currentData.pm25.value)*2;           
            
            /*
            console.log(currentData.station_name );
            console.log("pm10: " + currentData.pm10.value);
            console.log("pm25: " + parseFloat(currentData.pm25.value)*2);
            console.log("maxPollution: "+maxPollution);
            console.log("_______________________________");     */       
            
            
            if (maxPollution <= 50 )
                currentData.pollution_level = 'Normal';
            else if (maxPollution>= 50 && maxPollution < 75)
                currentData.pollution_level = 'Medium';
            else if (maxPollution>= 75 && maxPollution < 100)
                currentData.pollution_level = 'Dangerous';
            else
                currentData.pollution_level = 'Risky';
            
            todayData.push(currentData);
        })
        //Sort array to get min and max Pollution station
        const sortData = await todayData.sort( (a,b) =>{
            return ((parseFloat(a['pm10'].value)+parseFloat(a['pm25'].value)) > (parseFloat(b['pm10'].value)+parseFloat(b['pm25'].value)))? 1 : ((parseFloat(a['pm10'].value)+parseFloat(a['pm25'].value)) < (parseFloat(b['pm10'].value)+parseFloat(b['pm25'].value)) ? -1:0)
        })

        let aditionalInfo = {
            minPollution : sortData[0].station_name,
            maxPollution : sortData[sortData.length - 1].station_name
        }

        todayData.push(aditionalInfo);
        
        res.json({status: 200, body:todayData});
    } else 
        res.json({status: 404, body: {msg:'Environmental data not found'}})
    
}

module.exports = environmentalCtrl