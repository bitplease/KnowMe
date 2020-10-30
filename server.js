#!/usr/bin/env node
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/static', { dotfiles: 'allow' } ))

app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({
    extended: false
 }));



app.use(bodyParser.json())
               
app.get('/', function(req, res){
    res.render('/index.html');
               
}); 

app.set('port', 4040);
console.log(__dirname);

app.listen(app.get('port'), function() {
    console.log("Started server at port " + app.get('port'));
  //  dbhandler.mock();
});

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, '../Firstpage', '404.html'));
});
