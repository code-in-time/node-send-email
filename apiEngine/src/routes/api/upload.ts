import express = require('express');

var router = require('express').Router();
const formidable = require('formidable')
var fs = require('fs');



router.post('', async (req: any, res: any) => {
    new formidable.IncomingForm().parse(req)
    .on('field', (name: any, field: any) => {
      console.log('Field', name, field)
    })
    .on('file', (name: any, file: any) => {
    //   console.log('Uploaded file', name, file)
    console.log('Uploaded file', file.name, file.type)
    // TODO read and save file to disk
    })
    .on('aborted', () => {
      console.error('Request aborted by the user')
    })
    .on('error', (err: any) => {
      console.error('Error', err)
      throw err
    })
    .on('end', () => {
      res.end()
    })
});

module.exports = router; 
