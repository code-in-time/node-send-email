var router = require('express').Router();




router.use("/email", require("./email.js"));
router.use("/url", require("./url"));


module.exports = router;