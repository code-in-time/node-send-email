var router = require('express').Router();

router.get("/", (req: any, res: any) => {
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

module.exports = router; 