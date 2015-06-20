var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var s = require('sequelize-cli');

var apiGET = require('./routes/api/get');
var apiPOST = require('./routes/api/post');
var apiPUT = require('./routes/api/put');
var apiDEL = require('./routes/api/delete');
var apiOPT = require('./routes/api/options');
var apiHEAD = require('./routes/api/head');
var apiPATCH = require('./routes/api/patch');
var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//	Database connexion
/*var Sequelize = require('sequelize');
var dbConfig = require('./database-config.json');
var sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password,{
	dialect:dbConfig.dialect,
	host:dbConfig.host
});
sequelize.authenticate()
    .then(function () {
        console.log("CONNECTED! ");
    })
    .catch(function (err) {
        console.log("SOMETHING DONE GOOFED");
    })
    .done();
*/

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/:model/:id', apiGET,apiPOST,apiOPT,apiDEL,apiHEAD,apiPUT,apiPATCH);
app.use('/users', users);
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
