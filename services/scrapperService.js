const cheerio = require('cheerio')
const request = require('request-promise')
var date = new Date().toISOString()

const scrapper = async function init(){
   const $ = await request({
       uri: 'http://201.245.192.252:81/Report/HourlyReports',
       transform: body => cheerio.load(body)
    })
   await $('.TableStation').each((i,el)=>{
      let newEntry = {}
      newEntry.station_name = $(el).find('h2').html().trim()
      newEntry.date= date
      console.log($(el).find('h2').html().trim())
      $(el).find('td').each((i, el) =>{
         //if($(el).text()!="")
         //console.log($(el).text().trim());         
      })
      console.log(newEntry);
            
    })    
}

module.exports = scrapper;