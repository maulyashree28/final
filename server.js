const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const dotenv = require('dotenv');
dotenv.config();
const connectDb = require('./config/config');


require("colors");
//dotenv config 
connectDb();
//rest object 
const app =express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

//routes
app.get('/',(req,res) =>{
    res.send('<h1>POS backend</h1>')
});


//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`.bgCyan.white);
  });