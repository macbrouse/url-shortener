const express=require('express');
const app = express();
const cors = require('cors')
const dbConnect =require('./db')
const urlRoute = require ('./routes/url')

dbConnect()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/', express.static(__dirname + '/public'))

app.use(cors())

app.use('/',urlRoute)

app.listen(process.env.PORT|| 8888,()=>{
    console.log('Server Started')
})