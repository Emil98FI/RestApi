const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');


var PORT = process.env.PORT || 8081;


const app = express();


app.use(bodyParser.json());

//Haetaan reitit erillisistä tiedostoista jotta niitä on helmpompi muokata

const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

const getallRoute = require('./routes/getall');

app.use('/getall', getallRoute);

const getIdRoute = require('./routes/getid');

app.use('/getid', getIdRoute);

const DeleteIdRoute = require('./routes/deletedoc');

app.use('/deletedoc', DeleteIdRoute);

const UpdateRoute = require('./routes/update');

app.use('/update', UpdateRoute);

///////////////////////////////////


app.get('/', function (req, res) {
    res.send('Welcome');
});

app.listen(PORT, function () {
    console.log('Example app listening on port 8081!');
});

//Yhdistetään MongoDB tietokantaan käyttäjällä joka on määritelty .env tiedostossa

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>

    console.log('Connected')

); 