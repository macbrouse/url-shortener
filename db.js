require('dotenv').config()
const mongoose=require('mongoose');

const dbConnect=async ()=>{
    await mongoose.connect(`mongodb+srv://macbrouse:${process.env.db_password}@cluster0.ut5c9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0)`)
    // URI for DB with user and passwor: 'mongodb://user:password@127.0.0.1:27017/blhTest'
    console.log('DB connection established');
}

module.exports = dbConnect;