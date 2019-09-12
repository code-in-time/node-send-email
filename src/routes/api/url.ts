import express = require('express');

var router = require('express').Router();

router.get("/", (req: express.Request, res: express.Response) => {
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});


module.exports = router; 