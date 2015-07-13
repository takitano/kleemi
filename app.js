var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var verification = require('./routes/api/verification');
var apiGET = require('./routes/api/get');
var apiPOST = require('./routes/api/post');
var apiDEL = require('./routes/api/delete');
var apiPUT = require('./routes/api/put');
//var apiOPT = require('./routes/api/options');
var apiPATCH = require('./routes/api/patch');
 
var response = require('./routes/api/response');
var apiHEAD = require('./routes/api/head');
var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
        extended : false
}));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/:model/:id', verification, apiHEAD, apiGET.getItem, apiPOST.updateItem,apiDEL,apiPATCH.updateItem,apiPUT.updateItem, response); //,apiOPT);
app.use('/api/:model',verification,apiHEAD,apiGET.getCollection,apiPOST.createItem,response);//,apiOPT,
//app.use('/users', users);
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	'use strict';
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
		'use strict';
        res.status(err.status || 500);
        res.render('error', {
            message : err.message,
            error : err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
	'use strict';
    res.status(err.status || 500);
    res.render('error', {
        message : err.message,
        error : {}
    });
});

module.exports = app;