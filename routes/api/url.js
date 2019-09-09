var router = require('express').Router();

router.get("/", (req, res, next) => {
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

module.exports = router; 