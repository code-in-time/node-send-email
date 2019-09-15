import express = require('express');
import * as core from "express-serve-static-core"

interface IPostPayload {
    name: string,
    email: string,
    mobile: string
}

interface IGetParams {
    id: string
}

interface IPostCustomRequest<T> extends express.Request {
    body: T
}

// interface IGetCustomRequest<T> extends express.Request {
//     params: T
// }

interface IGetCustomRequest<T extends core.ParamsDictionary> extends Request {
    // params: T;
    // [params: string]: T
  }

var router = require('express').Router();

router.post("/", (req: IPostCustomRequest<IPostPayload>, res: express.Response) => {
    // res.json(["form1"]);

    console.log('sent', req.body)

    res.json(`${req.body} sent -----------------------`);
});

// TODO: https://stackoverflow.com/questions/57932422/type-t-is-not-assignable-to-type-dictionarystring
// router.get("/:id", (req: IGetCustomRequest<IGetParams>, res: express.Response) => {
router.get("/:id", (req: express.Request, res: express.Response) => {
    // res.json(["form1"]);

    console.log('sent', req.params)

    res.json(`${req.params.id} get params -----------------------`);
});

module.exports = router; 