require('dotenv').config();
import  express = require("express");
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const path = require('path');
app.use(express.static(path.join(__dirname, '/../../app-react/build')));

// console.log('--------------------------------', __dirname);
// console.log('------------------c--------------', path.join(__dirname, '/../../app-react/build'));

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log("Server running on port", app.get('port'));
});

// mount the router on the app
app.use('/', require('./routes'));

console.log('load')
