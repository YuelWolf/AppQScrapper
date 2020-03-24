const cheerio = require('cheerio')
const request = require('request-promise')

async function init(){
   const $ = await request({
       uri: 'http://201.245.192.252:81/Report/HourlyReports',
       transform: body => cheerio.load(body)
    })
   const stationName = $('.TableStation').each((i,el)=>{
      console.log($(el).find('h2').html().trim());   
   })
   //const dataStation = $('.TableStation').find('td')
   //console.log(dataStation.text().trim());
}

init()
