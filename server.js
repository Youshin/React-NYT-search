var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes')

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

if(process.env.NODE_ENV ==='production'){
    app.use(express.static("client/build"));
}else{
    app.use(express.static("./public"));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/nytsearchreact');

app.listen(port, function () {
    console.log('http://localhost:'+port);
})


