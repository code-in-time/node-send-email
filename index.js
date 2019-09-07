require('dotenv').config();
var express = require("express");
var bodyParser = require('body-parser')
// var multer = require('multer') // v1.0.5
var app = express();
// var upload = multer() // for parsing multipart/form-data

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log("Server running on port", app.get('port'));
});


app.get("/url", (req, res, next) => {
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});


// https://app.sendgrid.com/guide/integrate/langs/nodejs
app.post('/sendMail', function (req, res) {
    // using Twilio SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    // console.log('env', process.env.SENDGRID_API_KEY)

    var s = process.env.SENDGRID_API_KEY

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
    to: 'andrew.crawford.za@gmail.com',
    from: 'test@example.com',
    subject: 'Sending with Twilio SendGrid is Fun-'+ req.body.name + ' ' + req.body.email,
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sgMail.send(msg);

    console.log('sent', req.body.name)

    res.json(`${req.body} sent -----------------------`);
})