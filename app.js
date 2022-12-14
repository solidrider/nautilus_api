var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var mapsRouter = require('./routes/maps');
var healthRouter = require('./routes/health');

var app = express();
app.set('trust proxy', true);
app.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, CSRF-Token, X-Requested-With, X-HTTP-Method-Override, Content-Type, Content-Disposition, Accept'
  );
  res.header('Access-Control-Expose-Headers', 'Content-Disposition,X-Suggested-Filename');
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Max-Age', '86400');
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/maps', mapsRouter);
app.use('/health', healthRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
