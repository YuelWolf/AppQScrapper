const express = require('express')
const morgan = require('morgan')
const app = express()
const {mongoose} = require('./database')
const cors = require('cors')
const passport = require('passport')
//import passportMiddleware from './middlewares/passport'
const scrapper = require('./services/scrapperService')

//Options
app.set('port', process.env.PORT || 3000)

//Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors({origin:'*'}))
app.use(express.urlencoded({extended: false}));
app.use(passport.initialize());
app.use(passport.session());
//passport.use(passportMiddleware);

//Routes
//app.use('/api/environmental', require('./routes/environmentalRoutes'))


//Starting the server
var server = app.listen(app.get('port'), () =>{
  console.log('Server on port', app.get('port'));
  scrapper();
})


