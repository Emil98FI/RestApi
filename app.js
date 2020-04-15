const express = require('express');
var mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const Post = require('./models/post');


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

//Yhdistetään MongoDB tietokantaan 

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://dbUser:1cNNer3cX4C0pBQ5@cluster0-3foid.mongodb.net/test?retryWrites=true&w=majority', () =>

    console.log('Connected')

);

