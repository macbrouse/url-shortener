const express=require('express');
const app = express();
const dbConnect =require('./db')
const urlRoute = require ('./routes/url')

dbConnect()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/', express.static(__dirname + '/public'))

app.use('/',urlRoute)

app.listen(3000,()=>{
    console.log('Server Started')
})