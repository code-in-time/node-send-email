import express = require('express');
const path = require('path');

var router = require('express').Router();

router.get("/", (req: express.Request, res: express.Response) => {
    // res.json(["react"]);
    console.log(__dirname)
    res.sendFile(path.join(__dirname+'/index.html'));
});


module.exports = router; 