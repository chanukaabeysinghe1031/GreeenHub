const express = require("express");
const app = express();
const connectDB = require('./db/connection')
const cors = require('cors')

const farmerRouter = require('./api/routes/farmer_routes')
const diseaseDetectionRouter = require('./api/routes/diseaseDetectionRecords_routes')
const postsRouter = require('./api/routes/posts_routes')
const commentsRouter = require('./api/routes/comments_routes')
const reportsRouter = require('./api/routes/reports_routes')
const adminRouter = require('./api/routes/admin_routes')

// ROUTES
app.get('/',(req,res)=>{
    res.send("This is Govi Mithura Mobile Applications API")
})


connectDB();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/uploads',express.static('uploads'));

app.use('/api/farmers',farmerRouter );
app.use('/api/diseases',diseaseDetectionRouter);
app.use('/api/posts',postsRouter);
app.use('/api/comments',commentsRouter);
app.use('/api/reports',reportsRouter);
app.use('/api/admin',adminRouter);

app.listen(3003);