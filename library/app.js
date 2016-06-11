var express = require('express'),
    app = express(),
    path = require('path'),
    favicon = require('serve-favicon'),
    morgan = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser')
    methodOverride = require('method-override');

require('locus');


var routes = require('./routes/index');
var authorsRoutes = require('./routes/authors');

var app = express();

// view engine setup
app.set('views', (__dirname + '/views'));
app.set('view engine', 'ejs');

//*************MIDDLEWARES*********************

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//if the user asks for it, they get it 'as is'
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));


app.use('/', routes);
app.use('/authors', authorsRoutes);

app.use('/authors/:author_id', authorsRoutes);

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
