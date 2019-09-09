var router = require('express').Router();

router.use("/email", require("./email.js"));
router.use("/url", require("./url"));
router.use("/save", require("./save.js"));

module.exports = router;