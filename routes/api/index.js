var router = require('express').Router();




router.use("/email", require("./email.js"));


module.exports = router;