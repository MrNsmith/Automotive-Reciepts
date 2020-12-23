require('dotenv').config()
const express = require ('express');
const apiCtrl = require('./apiCtrl.js');
const app = express();
const session = require('express-session');


const {SERVER_PORT, SESSION_SECRET} = process.env;




app.use(express.json());

app.use(session({    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 26
    }
}))

app.get('/api/vendors', apiCtrl.getVendors)
app.get('/api/cnVehicles',apiCtrl.getCnVehicles)
app.get('/api/hsVehicles',apiCtrl.getHsVehicles)
app.get('/api/moVehicles',apiCtrl.getMoVehicles)
app.get('/api/shVehicles',apiCtrl.getShVehicles)
app.get('/api/whVehicles',apiCtrl.getWhVehicles)

app.post('/api/add', apiCtrl.appendRow)



app.listen(SERVER_PORT, ()=> console.log('Server is running on 2020'));