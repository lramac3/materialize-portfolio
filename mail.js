const nodemailer = require('nodemailer');
const mailGun=require('nodemailer-mailgun-transport');

const auth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY||"21e88ed267bd643f766809f2f31798b9-52b0ea77-3dd6f133",
    domain: process.env.MAILGUN_DOMAIN||"sandbox693755ca129749139807d0b89701b471.mailgun.org"
  }
};

const transporter=nodemailer.createTransport(mailGun(auth));

const sendMail= (email, subject, text, cb) => {
     const mailOptions = {
       from: email,
       to: "linuram@gmail.com",
       subject,
       text
     };

     transporter.sendMail(mailOptions, function(err, data) {
       if (err) {
        cb(err, null);
       } else {
         cb(null, data);
       }
     });
    
};

  module.exports = sendMail;
