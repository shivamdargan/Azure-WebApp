var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');


var app = express();

app.set('port', process.env.PORT || 5000);
console.log("Server Running On " + app.get('port'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static('./client/build'));


app.use('/api', require('./routes/index.js'))

app.get("*", (req, res) => { //our GET route needs to point to the index.html in our build
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});


module.exports = app;

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});