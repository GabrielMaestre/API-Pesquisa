const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const ejs = require('ejs');
const axios = require('axios').default;
const getApi = require('./getApi.js');

// Arquivo Local
// const api = require('./api/api.json');

const sitePort = 2000;

const app = express();

//Uses
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));  
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/fonts', express.static(__dirname + 'public/fonts'));
app.use('/scss', express.static(__dirname + 'public/scss'));
app.use('/html', express.static(__dirname + 'public/html'));

//Views
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, "public/html"));


app.get('/', async (req, res) => {
    let apiDados = await getApi.getData();
    res.render('index', { api: apiDados });
});

app.listen(sitePort, () => console.info(`Rodando: http://127.0.0.1:${sitePort}/`));