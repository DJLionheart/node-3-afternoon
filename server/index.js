require('dotenv').config();

const express = require('express'),
      bodyParser = require('body-parser'),
      session = require('express-session');

const checkForSession = require('./middlewares/checkForSession');

const app = express();

app.use(bodyParser.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));






const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`Ye olde server doth lend an ear at port ${port}`)});