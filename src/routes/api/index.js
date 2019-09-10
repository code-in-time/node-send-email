var router = require('express').Router();

router.use("/email", require("./email"));
router.use("/url", require("./url"));
router.use("/save", require("./save"));

module.exports = router;