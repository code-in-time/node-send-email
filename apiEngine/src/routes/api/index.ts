var router = require('express').Router();

router.use("/email", require("./email"));
router.use("/names", require("./names"));
router.use("/save", require("./save"));
router.use("/err", require("./testError"));
router.use("/form", require("./form"));

module.exports = router;