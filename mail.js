const nodemailer = require('nodemailer');
const mailGun=require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: process.env.API_KEY,
        domain:process.env.DOMAIN,

    }
};

const transporter =nodemailer.createTransport(mailGun(auth));

const mailOptions ={
    from: 'ramramji2001@yahoo.com',
    to: 'linuram@gmail.com',
    subject: 'Testing',
    text:'I would like to get in touch with you'
};

transporter.sendMail(mailOptions, function (err, data) {
    if (err){
        console.log('Error occurs');
    } else {
        console.log('Message Sent!!!')
    }
  });