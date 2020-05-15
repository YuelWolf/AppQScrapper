const cheerio = require('cheerio')
const request = require('request-promise')
const moment = require('moment')
const environmentalCtrl = require('../controllers/environmentalDataController')
var hour = (new Date()).getHours() - 5
var date = moment(new Date()).format('YYYY-MM-DD')

const scrapper = async function init(){
   const $ = await request({
       uri: 'http://201.245.192.252:81/Report/HourlyReports',
       transform: body => cheerio.load(body)
    })
   await $('.TableStation').each((i,el)=>{
      let newEntry = {};
      let aux;
      let index;
      let index2;
      newEntry.station_name = $(el).find('h2').html().trim()
      newEntry.date= date
      $(el).find('td').each((i, el) =>{ 
         //PM10    
         if($(el).text().trim() == "PM10"||aux == "PM10"){
            if($(el).text().trim() == "PM10"){
            aux = "PM10"
            newEntry.pm10 = []
            index = 1
            index2 = 0  
            }else{
               if(index <= hour && index2 > 2 ){
                  newEntry.pm10.push({
                     hour: index,
                     value: $(el).text()
                  })
                  index++;
               }                   
               index2++;
            }      
         }
         //PM2.5
         if($(el).text().trim() == "PM2.5"||aux == "PM2.5"){
            if($(el).text().trim() == "PM2.5"){
            aux = "PM2.5"
            newEntry.pm25 = []
            index = 1
            index2 = 0  
            }else{
               if(index <= hour && index2 > 2 ){
                  newEntry.pm25.push({
                     hour: index,
                     value: $(el).text()
                  })
                  index++;
               }                   
               index2++;
            }      
         }
         //CO
         if($(el).text().trim() == "CO"||aux == "CO"){
            if($(el).text().trim() == "CO"){
            aux = "CO"
            newEntry.co = []
            index = 1
            index2 = 0  
            }else{
               if(index <= hour && index2 > 2 ){
                  newEntry.co.push({
                     hour: index,
                     value: $(el).text()
                  })
                  index++;
               }                   
               index2++;
            }      
         }
         //Dir Viento
         if($(el).text().trim() == "Dir Viento"||aux == "Dir Viento"){
            if($(el).text().trim() == "Dir Viento"){
            aux = "Dir Viento"
            newEntry.dir_viento = []
            index = 1
            index2 = 0  
            }else{
               if(index <= hour && index2 > 2 ){
                  newEntry.dir_viento.push({
                     hour: index,
                     value: $(el).text()
                  })
                  index++;
               }                   
               index2++;
            }      
         }
         //HR
         if($(el).text().trim() == "HR"||aux == "HR"){
            if($(el).text().trim() == "HR"){
            aux = "HR"
            newEntry.hr = []
            index = 1
            index2 = 0  
            }else{
               if(index <= hour && index2 > 2 ){
                  newEntry.hr.push({
                     hour: index,
                     value: $(el).text()
                  })
                  index++;
               }                   
               index2++;
            }      
         }
         //NO
         if($(el).text().trim() == "NO"||aux == "NO"){
            if($(el).text().trim() == "NO"){
            aux = "NO"
            newEntry.no = []
            index = 1
            index2 = 0  
            }else{
               if(index <= hour && index2 > 2 ){
                  newEntry.no.push({
                     hour: index,
                     value: $(el).text()
                  })
                  index++;
               }                   
               index2++;
            }      
         }
         //NO2
         if($(el).text().trim() == "NO2"||aux == "NO2"){
            if($(el).text().trim() == "NO2"){
            aux = "NO2"
            newEntry.no2 = []
            index = 1
            index2 = 0  
            }else{
               if(index <= hour && index2 > 2 ){
                  newEntry.no2.push({
                     hour: index,
                     value: $(el).text()
                  })
                  index++;
               }                   
               index2++;
            }      
         }
         //NOX
         if($(el).text().trim() == "NOX"||aux == "NOX"){
            if($(el).text().trim() == "NOX"){
            aux = "NOX"
            newEntry.nox = []
            index = 1
            index2 = 0  
            }else{
               if(index <= hour && index2 > 2 ){
                  newEntry.nox.push({
                     hour: index,
                     value: $(el).text()
                  })
                  index++;
               }                   
               index2++;
            }      
         }
         //OZONO
         if($(el).text().trim() == "OZONO"||aux == "OZONO"){
            if($(el).text().trim() == "OZONO"){
            aux = "OZONO"
            newEntry.ozono = []
            index = 1
            index2 = 0  
            }else{
               if(index <= hour && index2 > 2 ){
                  newEntry.ozono.push({
                     hour: index,
                     value: $(el).text()
                  })
                  index++;
               }                   
               index2++;
            }      
         }
         //PRECIPITACION
         if($(el).text().trim() == "Precipitacion"||aux == "Precipitacion"){
            if($(el).text().trim() == "Precipitacion"){
            aux = "Precipitacion"
            newEntry.precipitacion = []
            index = 1
            index2 = 0  
            }else{
               if(index <= hour && index2 > 2 ){
                  newEntry.precipitacion.push({
                     hour: index,
                     value: $(el).text()
                  })
                  index++;
               }                   
               index2++;
            }      
         }
         //R_S Global
         if($(el).text().trim() == "R_S Global"||aux == "R_S Global"){
            if($(el).text().trim() == "R_S Global"){
            aux = "R_S Global"
            newEntry.rs_global = []
            index = 1
            index2 = 0  
            }else{
               if(index <= hour && index2 > 2 ){
                  newEntry.rs_global.push({
                     hour: index,
                     value: $(el).text()
                  })
                  index++;
               }                   
               index2++;
            }      
         }
         //SO2
         if($(el).text().trim() == "SO2"||aux == "SO2"){
            if($(el).text().trim() == "SO2"){
            aux = "SO2"
            newEntry.so2 = []
            index = 1
            index2 = 0  
            }else{
               if(index <= hour && index2 > 2 ){
                  newEntry.so2.push({
                     hour: index,
                     value: $(el).text()
                  })
                  index++;
               }                   
               index2++;
            }      
         }
         //Temperatura
         if($(el).text().trim() == "Temperatura"||aux == "Temperatura"){
            if($(el).text().trim() == "Temperatura"){
            aux = "Temperatura"
            newEntry.temperatura = []
            index = 1
            index2 = 0  
            }else{
               if(index <= hour && index2 > 2 ){
                  newEntry.temperatura.push({
                     hour: index,
                     value: $(el).text()
                  })
                  index++;
               }                   
               index2++;
            }      
         }
         //Vel Viento
         if($(el).text().trim() == "Vel Viento"||aux == "Vel Viento"){
            if($(el).text().trim() == "Vel Viento"){
            aux = "Vel Viento"
            newEntry.vel_viento = []
            index = 1
            index2 = 0  
            }else{
               if(index <= hour && index2 > 2 ){
                  newEntry.vel_viento.push({
                     hour: index,
                     value: $(el).text()
                  })
                  index++;
               }                   
               index2++;
            }      
         }
         //Dir Viento 10M
         if($(el).text().trim() == "Dir Viento 10M"||aux == "Dir Viento 10M"){
            if($(el).text().trim() == "Dir Viento 10M"){
            aux = "Dir Viento 10M"
            newEntry.dir_viento_10m = []
            index = 1
            index2 = 0  
            }else{
               if(index <= hour && index2 > 2 ){
                  newEntry.dir_viento_10m.push({
                     hour: index,
                     value: $(el).text()
                  })
                  index++;
               }                   
               index2++;
            }      
         }
         //Presion Baro
         if($(el).text().trim() == "Presion Baro"||aux == "Presion Baro"){
            if($(el).text().trim() == "Presion Baro"){
            aux = "Presion Baro"
            newEntry.presion_baro = []
            index = 1
            index2 = 0  
            }else{
               if(index <= hour && index2 > 2 ){
                  newEntry.presion_baro.push({
                     hour: index,
                     value: $(el).text()
                  })
                  index++;
               }                   
               index2++;
            }      
         }
          //Rad Solar
          if($(el).text().trim() == "Rad Solar"||aux == "Rad Solar"){
            if($(el).text().trim() == "Rad Solar"){
            aux = "Rad Solar"
            newEntry.rad_solar = []
            index = 1
            index2 = 0  
            }else{
               if(index <= hour && index2 > 2 ){
                  newEntry.rad_solar.push({
                     hour: index,
                     value: $(el).text()
                  })
                  index++;
               }                   
               index2++;
            }      
         }
         //Temperatura 2m
         if($(el).text().trim() == "Temperatura 2m"||aux == "Temperatura 2m"){
            if($(el).text().trim() == "Temperatura 2m"){
            aux = "Temperatura 2m"
            newEntry.temperatura_2m = []
            index = 1
            index2 = 0  
            }else{
               if(index <= hour && index2 > 2 ){
                  newEntry.temperatura_2m.push({
                     hour: index,
                     value: $(el).text()
                  })
                  index++;
               }                   
               index2++;
            }      
         }
         //Temperatura 8m
         if($(el).text().trim() == "Temperatura 8M"||aux == "Temperatura 8M"){
            if($(el).text().trim() == "Temperatura 8M"){
            aux = "Temperatura 8M"
            newEntry.temperatura_8m = []
            index = 1
            index2 = 0  
            }else{
               if(index <= hour && index2 > 2 ){
                  newEntry.temperatura_8m.push({
                     hour: index,
                     value: $(el).text()
                  })
                  index++;
               }                   
               index2++;
            }      
         }
         //Temperatura 20m
         if($(el).text().trim() == "Temperatura 20M"||aux == "Temperatura 20M"){
            if($(el).text().trim() == "Temperatura 20M"){
            aux = "Temperatura 20M"
            newEntry.temperatura_20m = []
            index = 1
            index2 = 0  
            }else{
               if(index <= hour && index2 > 2 ){
                  newEntry.temperatura_20m.push({
                     hour: index,
                     value: $(el).text()
                  })
                  index++;
               }                   
               index2++;
            }      
         }
         //Temperatura 4m
         if($(el).text().trim() == "Temp_4m"||aux == "Temp_4m"){
            if($(el).text().trim() == "Temp_4m"){
            aux = "Temp_4m"
            newEntry.temperatura_4m = []
            index = 1
            index2 = 0  
            }else{
               if(index <= hour && index2 > 2 ){
                  newEntry.temperatura_4m.push({
                     hour: index,
                     value: $(el).text()
                  })
                  index++;
               }                   
               index2++;
            }      
         }
         //Vel Viento 10M
         if($(el).text().trim() == "Vel Viento 10M"||aux == "Vel Viento 10M"){
            if($(el).text().trim() == "Vel Viento 10M"){
            aux = "Vel Viento 10M"
            newEntry.vel_viento_10m = []
            index = 1
            index2 = 0  
            }else{
               if(index <= hour && index2 > 2 ){
                  newEntry.vel_viento_10m.push({
                     hour: index,
                     value: $(el).text()
                  })
                  index++;
               }                   
               index2++;
            }      
         }
         //BC
         if($(el).text().trim() == "BC"||aux == "BC"){
            if($(el).text().trim() == "BC"){
            aux = "BC"
            newEntry.bc = []
            index = 1
            index2 = 0  
            }else{
               if(index <= hour && index2 > 2 ){
                  newEntry.bc.push({
                     hour: index,
                     value: $(el).text()
                  })
                  index++;
               }                   
               index2++;
            }      
         }
         //UV-BC
         if($(el).text().trim() == "BCUV-BC"||aux == "UV-BC"){
            if($(el).text().trim() == "UV-BC"){
            aux = "UV-BC"
            newEntry.uv_bc = []
            index = 1
            index2 = 0  
            }else{
               if(index <= hour && index2 > 2 ){
                  newEntry.uv_bc.push({
                     hour: index,
                     value: $(el).text()
                  })
                  index++;
               }                   
               index2++;
            }      
         }          
      })
      console.log(`Datos de las ${hour}`);      
      environmentalCtrl.create(newEntry)              
      })           
}

module.exports = scrapper;