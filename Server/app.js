const express = require('express');
const app = express();

// __________________ENV_______________________________________
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});

// __________________connection________________________________
require('./Connection/Connection');


// ___________________COOKIE-PARSER____________________________
const cookieParser = require('cookie-parser');
app.use(cookieParser());


// _______________________ROUTES_______________________________
app.use(express.json());
app.use(require("./Routes/Routes.js"));


// __________________________________________________________________
app.listen(process.env.PORT || 5000)