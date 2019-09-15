import express = require('express');

var router = require('express').Router();

router.get("/", (req: express.Request, res: express.Response) => {
    res.json(["react"]);
});


module.exports = router; 