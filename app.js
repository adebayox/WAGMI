const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const port = 5000

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public'))); 


app.get('/', (req, res) => {
    res.redirect('/login');
});


app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'signup.html'));
});

app.get('/board', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'dash.html'));
});

app.listen(port, 
console.log(`server is listening on ${port}`)
); 