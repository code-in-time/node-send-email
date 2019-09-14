import express = require('express');

interface IPayload {
    name: string,
    email: string,
    mobile: string
}

interface ICustomRequest<T> extends express.Request {
    body: T
}

var router = require('express').Router();

router.post("/", (req: ICustomRequest<IPayload>, res: express.Response) => {
    // res.json(["form1"]);

    console.log('sent', req.body)

    res.json(`${req.body} sent -----------------------`);
});

module.exports = router; 