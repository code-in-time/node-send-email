// create new Router instance for api routes
var router = require('express').Router();

router.use('/api', require('./api/')); 

module.exports = router;