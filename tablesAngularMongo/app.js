// get the things we need
 var express = require('express');
 var app = express();
 var path = require('path');

 // set the public folder to serve public assets
 app.use(express.static(__dirname + '/public'));

 // set up our one route to the index.html file
 app.get('*', function(req, res) {
 res.sendFile(path.join(__dirname + '/public/views/index.html'));
 });

     // start the server on port 3000 (http://localhost:3000)
 app.listen(3000);
 console.log('Magic happens on port 3000.');