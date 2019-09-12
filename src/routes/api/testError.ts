import express = require('express');

var router = require('express').Router();

router.get("/", (req: express.Request, res: express.Response, next: any) => {

    setTimeout(function () {
        try {
          throw new Error('BROKEN')
        } catch (err) {
          next(err)
        }
      }, 100)
});

module.exports = router; 