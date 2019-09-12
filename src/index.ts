require('dotenv').config();
var express = require("express");
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log("Server running on port", app.get('port'));
});

// mount the router on the app
app.use('/base', require('./routes'));

// app.use(function (err: any, req: any, res: any, next: any) {
//     console.error(err.stack)
//     res.status(500).send('Something broke!')
//   })


console.log('load')
console.log('load test 3')

