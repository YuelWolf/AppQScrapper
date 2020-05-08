import EnvironmentalData from "../models/environmentalData";

const environmentalCtrl = {}
   
environmentalCtrl.create = async (req, res) => {
    const duplicate = await EnvironmentalData.findOne({station_name: req.body.station_name, date: req.body.date})
    if(duplicate) res.json({msg: 'El registro ya existe'})
    const newEntry = new EnvironmentalData({
        station_name: req.body.station_name,
        date : req.body.date,
        pm10: req.body.pm10,
        pm25: req.body.pm25,
        co: req.body.co,
        dir_viento: req.body.dir_viento,
        hr: req.body.hr,
        no: req.body.no,
        no2: req.body.no2,
        nox: req.body.nox,
        ozono: req.body.ozono,
        precipitacion: req.body.precipitacion,
        rs_global: req.body.rs_global,
        so2: req.body.so2,
        temperatura: req.body.temperatura,
        vel_viento: req.body.vel_viento,
        dir_viento_10m: req.body.dir_viento_10m,
        presion_baro: req.body.presion_baro,
        rad_solar: req.body.rad_solar,
        temperatura_2m: req.body.temperatura_2m,
        temperatura_8m: req.body.temperatura_8m,
        temperatura_20m: req.body.temperatura_20m,
        vel_viento_10m: req.body.vel_viento_10m,    
        bc: req.body.bc,
        temperatura_4m: req.body.temperatura_4m,
        uv_bc: req.body.uv_bc
    })
    await newEntry.save((err) => {
        if (err) res.json({msg: 'Información faltante o erronea'})
        else res.json ({msg: 'registro guardado de manera exitosa'})
    })   
}