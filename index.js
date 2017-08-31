
var express = require("express");
var keys = require('./server/config/key');
var authRoute = require('./server/route/auth'); 
var cookieSession = require('cookie-session');
var mongoose = require("mongoose");
mongoose.connect(keys.mongoDbURI);
var passport = require("passport");
var app = express();
require('./server/services/passport');

app.use(cookieSession({
    keys: ['23222233224444454565yththrhethrhr','efqttw4t4wsefejegrigrwiwgrwgr'],
    maxAge:30*24*60*60*10000
}));

app.use(passport.initialize());
app.use(passport.session());


//setting route for google auth
authRoute(app);

app.listen(3000, function(){
    console.log('----------running------');
});