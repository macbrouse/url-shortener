const mongoose=require('mongoose');

const dbConnect=async ()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/url-shortener')
    // URI for DB with user and passwor: 'mongodb://user:password@127.0.0.1:27017/blhTest'
    console.log('DB connection established');
}

module.exports = dbConnect;