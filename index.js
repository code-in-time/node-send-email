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

// setup routes


// mount the router on the app
app.use('/base', require('./routes'));


app.get("/url", (req, res, next) => {
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

/**
 * send email
 */
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
    from: req.body.email,
    subject: 'Sending with Twilio SendGrid is Fun-'+ req.body.name + ' ' + req.body.email,
    text: 'and easy to do anywhere, even with Node.js',
    html: `
    
    <strong>and easy to do anywhere, even with Node.js</strong>
    <p>${req.body.message}</p>
    `};
    sgMail.send(msg);

    console.log('sent', req.body.name)

    res.json(`${req.body} sent -----------------------`);
})

/**
 * Save info to mongo DB
 *     {
      "name": "fred",
      "email": "fred@hotmail5555552.com",
      "message": "hhhhhhhhhytou whats uphhhhh"
    }
 */
// https://app.sendgrid.com/guide/integrate/langs/nodejs
// https://stackoverflow.com/questions/14226410/node-js-cannot-find-module-mongodb
app.post('/save', function (req, res) {

    // const mongo = require('mongodb').MongoClient;
    // const url = 'mongodb://localhost:27017/emailDB'
    // req.body.name + ' ' + req.body.email
    // db.emailMessages.insert({
    //     name: 'fred1',
    //     email: "1@2.com",
    //     message: 'test1'

    // })

    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("emailDB");
      var myobj = 
        {
            name: req.body.name,//'fred1',
            email: req.body.email,//"1@2.com",
            message: req.body.message, //'test1'
        }


      dbo.collection("emailMessages").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
    });


    console.log('saved to mongo', req.body.name + ' ' + req.body.email)

    res.json(`saved to mongo, ${req.body.name} + ' ' + ${req.body.email} ${req.body.message}`);
})