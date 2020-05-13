const mongoose = require('mongoose')
const {Schema} = mongoose

const EnvironmentalDataSchema = new Schema({
    station_name: {type: String, required: true},
    date : {type: Date, required: true},
    pm10: {type: Array},
    pm25: {type: Array},
    co: {type: Array},
    dir_viento: {type: Array},
    hr: {type: Array},
    no: {type: Array},
    no2: {type: Array},
    nox: {type: Array},
    ozono: {type: Array},
    precipitacion: {type: Array},
    rs_global: {type: Array},
    so2: {type: Array},
    temperatura: {type: Array},
    vel_viento: {type: Array},
    dir_viento_10m: {type: Array},
    presion_baro: {type: Array},
    rad_solar: {type: Array},
    temperatura_2m: {type: Array},
    temperatura_8m: {type: Array},
    temperatura_20m: {type: Array},
    vel_viento_10m: {type: Array},    
    bc: {type: Array},
    temperatura_4m: {type: Array},
    uv_bc: {type: Array}
})

module.exports = mongoose.model('EnvironmentalDataSchema', EnvironmentalDataSchema, 'environmentalData')