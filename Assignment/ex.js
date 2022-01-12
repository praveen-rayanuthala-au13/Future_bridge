var express = require('express');
var app = express();

app.get('/', function(req,res){
    console.log("Get Request")
    res.send('Future Bridge Assignment(GET)');
})
app.post('/', function(req,res){
    console.log("Post Request")
    res.send('Future Bridge Assignment(POST)');
})

var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port

    console.log(" Listening at ", port)
})
