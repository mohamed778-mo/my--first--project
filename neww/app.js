const express = require('express');
const cors = require('cors');
const connection = require("./connection/config");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const bodyParser = require("body-parser");
const path = require("path");


const app = express()

app.use(express.json({ limit: '1gb' }));

app.use(cors({
  origin: '*', // Allows all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
}));

app.use(cookieParser());
app.use(bodyParser.json({ limit: "1gb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "1gb", extended: true }));

const teacherRouter = require('./routers/teacher_router');


app.use('/app/admin', teacherRouter);
app.use('/app/employee', teacherRouter);


app.use('/uploads',express.static(path.join(__dirname,'uploads')))


connection();

const port = 3000;
app.listen(port, () => {
    console.log(`Connection on port ${port}`);
});
