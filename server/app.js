require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const router = require('./routes/index');
const port = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(router);
app.listen(port, ()=>{
    console.log('Listening on port ', port);
})
module.exports = app;