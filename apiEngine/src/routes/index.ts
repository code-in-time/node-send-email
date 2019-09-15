// create new Router instance for api routes
var router = require('express').Router();

// API rest calls
router.use('/api', require('./api')); 


router.use('/', require('./pages')); 
module.exports = router;