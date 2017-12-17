const express = require('express');
const request = require('request');
const app = express();
const path = require('path');
var bodyParser = require('body-parser');
// Run the app by serving the static files
// in the dist directory
app.use(bodyParser.raw());
app.get('/api/taplist/:id', function (req, res) {
  request.get(`${process.env.TAPLISTURL}/${req.params.id}`, {json: true}).pipe(res);
});
app.use(express.static(__dirname + '/dist'));
app.get('/api/settings/:id', function (req, res) {
  res.json({
    template: "single-column",
    colors: {belgian:"yellow", stout:"lightblue", other:"white", hoppy:"lightgreen", wheat:"lightyellow", imported: "orangered"},
    prices: {"0,2":"0.2l","0,5":"0.5l","0,4":"0.4l","0.4":"0.4l","1,0":"1l"}
  });
});
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);
