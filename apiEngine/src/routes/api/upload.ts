import express = require('express');

var router = require('express').Router();
const formidable = require('formidable')
var fs = require('fs-extra');



router.post('', async (req: any, res: any) => {
    const form = new formidable.IncomingForm().parse(req)



    form.on('field', (name: any, field: any) => {
      console.log('Field', name, field)
    })
    .on('file', (name: any, file: any) => {
    //   console.log('Uploaded file', name, file)
    console.log('Uploaded file', file.name, file.type)


    var temp_path = file.path;
    /* The file name of the uploaded file */
    var file_name = file.name;
    /* Location where we want to copy the uploaded file */
    var new_location = 'C:/Users/andre/Documents/repos/node-send-email/apiEngine/pdfs/';

    fs.copy(temp_path, `${new_location} ggggg${Date.now()}.${file_name.split('.')[1]}`, function(err: any) {  
        if (err) {
            console.error(err);
        } else {
            console.log("success!")
        }
    });




    // fs.readFile(file.upload.path, function (err:any, data: any) {
    //   res.end(data);
    // });

    // fs.writeFile(`./${file.name}`, file, function(err: any) {
    //     if(err) {
    //         return console.log(err);
    //     }
    
    //     console.log("The file was saved!");
    // });
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
