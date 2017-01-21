var express = require('express');
var app = express();
var PORT = process.env.port || 3000;
//requires user to be logged in, route-level middleware
//runs for the one route you specify
var middleware = require('./middleware.js');
//app.use(middleware.requireAuthentication);
//individual routes
app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication , function(req, res){
    res.send('hello express!');
});

app.use(express.static(__dirname + '/public'));
//reserve port for app, 3000 is not used , so its safe
app.listen(PORT, function(){
    console.log('Express server started on port ' + PORT + '!');
});