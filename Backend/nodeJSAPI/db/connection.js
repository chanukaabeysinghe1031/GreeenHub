const mongoose = require('mongoose');

const URI = "mongodb+srv://admin:admin@govimithura.jvhuskn.mongodb.net/?retryWrites=true&w=majority"

const connectDB = async () =>{
    await mongoose.connect(URI,{
        useUnifiedTopology:true,
        useNewUrlParser:true,
    });
    console.log("GOVI MITHURA MOBILE APP DATABASE CONNECTION HAS BEEN SET UP!")
}

module.exports = connectDB;