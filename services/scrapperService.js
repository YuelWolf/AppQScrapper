const cheerio = require('cheerio')
const request = require('request-promise')
var date = new Date()
var hour = date.getHours()

async function init(){
   const $ = await request({
       uri: 'http://201.245.192.252:81/Report/HourlyReports',
       transform: body => cheerio.load(body)
    })
   const stationName = await $('.TableStation').each((i,el)=>{
      console.log($(el).find('h2').html().trim())
      $(el).find('td').each((i, el) =>{
         if($(el).text()!="")
         console.log($(el).text().trim());         
      })      
    })
    console.log(hour);
    
}

init()