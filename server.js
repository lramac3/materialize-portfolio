const express = require('express');
const app =express();
const sendMail = require('./mail');
const log = console.log;
const path = require('path');
const PORT = process.env.PORT ||8080;

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.post('/',(req, res) => {
    const {subject,email,text} =req.body;
    log('Data :', req.body);
    sendMail(email, subject, text, function(err, data){
        if(err) {
            res.status(500).json({message: 'Internal Error'});
        } else {
            res.json({message: 'Email sent!!!'});
        }
    });
 });

app.use(express.static('views'))

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname,'views','index.html'));
  });

app.get('*', (req, res) => {
    res.json("Page Not Found!")
  });

app.listen(PORT,() => log("App running on port " + PORT + "!"));
