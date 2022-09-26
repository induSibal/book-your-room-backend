var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors') ;

var indexRouter = require('./routes/index');
var getUsersRouter = require('./routes/getUsers');
var getRoomsRouter = require('./routes/getRooms');
var updateRoomsRouter = require('./routes/updateRooms');
var updateUsersRouter = require('./routes/updateUsers');



var corsOptions = {
  origin: 'http://localhost:3006',
  optionsSuccessStatus: 200, // For legacy browser support
  methods: "GET, POST"
}


var bodyParser = require('body-parser');   
var urlencodedParser = bodyParser.urlencoded({ extended: false })  

//const sql = require('mssql/msnodesqlv8');

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors(corsOptions));

app.use('/', indexRouter)
app.use('/getUsers', getUsersRouter);
app.use('/getRooms', getRoomsRouter);
app.use('/updateRooms', updateRoomsRouter);
app.use('/updateUsers', updateUsersRouter);


app.use(cors(corsOptions));

// catch 404 and forward to error handler
app.use(function(req, res, next) {  
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
