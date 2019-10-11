const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
const app = express();

mongoose.set('useCreateIndex', true); 
mongoose.connect(
   //'mongodb+srv://admin:CantinaPDV@cantinacluster-9mrp6.mongodb.net/test?retryWrites=true&w=majority', 
    'mongodb://localhost:27017/cantinapi',
    {   useUnifiedTopology: true ,
        useNewUrlParser: true,
    }
);

app.use(express.json());

app.use(cors());

requireDir('./src/models/');

app.use('/api', require('./src/routes')); 

app.listen(3001);


