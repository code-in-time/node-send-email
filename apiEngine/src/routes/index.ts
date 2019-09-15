// create new Router instance for api routes
var router = require('express').Router();
import express = require('express');
const path = require('path');

// API rest calls
router.use('/base/api', require('./api')); 

router.get('/', function(req: express.Request, res: express.Response) {
    res.sendFile(path.join(__dirname, '/../../app-react/build', 'index.html'));
  });


module.exports = router;