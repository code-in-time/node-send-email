var router = require('express').Router();


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
router.post('/', function (req: any, res: any) {

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
    
    MongoClient.connect(url, function(err: any, db: any) {
      if (err) throw err;
      var dbo = db.db("emailDB");
      var myobj = 
        {
            name: req.body.name,//'fred1',
            email: req.body.email,//"1@2.com",
            message: req.body.message, //'test1'
        }


      dbo.collection("emailMessages").insertOne(myobj, function(err: any, res: any) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
    });


    console.log('saved to mongo', req.body.name + ' ' + req.body.email)

    res.json(`saved to mongo, ${req.body.name} + ' ' + ${req.body.email} ${req.body.message}`);
})

module.exports = router;