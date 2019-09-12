var router = require('express').Router();

/**
 * send email
 */
// https://app.sendgrid.com/guide/integrate/langs/nodejs
router.post('', function (req: any, res: any) {
    // using Twilio SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    // console.log('env', process.env.SENDGRID_API_KEY)

    var s = process.env.SENDGRID_API_KEY

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
    to: 'andrew.crawford.za@gmail.com',
    from: req.body.email,
    subject: 'Sending with Twilio SendGrid is Fun-'+ req.body.name + ' ' + req.body.email,
    text: 'and easy to do anywhere, even with Node.js',
    html: `
    
    <strong>and easy to do anywhere, even with Node.js</strong>
    <p>${req.body.message}</p>
    `};
    sgMail.send(msg);

    console.log('sent', req.body.name)

    res.json(`${req.body} sent -----------------------`);
})


module.exports = router; 