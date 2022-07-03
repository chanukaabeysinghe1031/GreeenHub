const express = require("express");
const app = express();
const connectDB = require('./db/connection')
const cors = require('cors')

const farmerRouter = require('./api/routes/farmer_routes')
const diseaseDetectionRouter = require('./api/routes/diseaseDetectionRecords_routes')

// ROUTES
app.get('/',(req,res)=>{
    res.send("This is depression App's API")
})


connectDB();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/uploads',express.static('uploads'));

app.use('/api/farmers',farmerRouter );
app.use('/api/diseases',diseaseDetectionRouter);

app.listen(3003);