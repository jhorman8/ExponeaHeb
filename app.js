var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");

    var path = require('path');

    var indexRouter = require('./routes/index');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public'))); //  "public" off of current is root
var router = express.Router();

router.use('/', indexRouter);

app.use(router);


app.set('port', (process.env.PORT || 1337));

app.listen(app.get('port'), function () {
  //console.log('Node app is running on port', app.get('port'));
});


