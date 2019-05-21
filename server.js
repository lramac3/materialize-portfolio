const express = require('express');
const app =express();
const log = console.log;
const path = require('path');
const PORT = 8080;

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.post('/email',(req, res) => {
    log('Data :', req.body);
    res.json({message: 'Message received!'})
  });

app.use(express.static('views'))

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname,'views','index.html'));
  });

app.get('*', (req, res) => {
    res.json("Page Not Found!")
  });

app.listen(PORT,() => log('Server is starting on PORT, ', 8080));
