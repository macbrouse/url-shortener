const mongoose = require('mongoose')
const urlSchema= new mongoose.Schema({
    longUrl:{
        type: 'string'
    },
    shortUrl:{
        type: 'string'
    }
},
{
    timeStamps:true
})

module.exports = mongoose.model('urls', urlSchema)