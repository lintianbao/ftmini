 /**
 * Created by admin on 2017/6/29.
 */

var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.set('views',path.join(__dirname,"src/server/views"));
app.set('view engine','jade');
app.use(express.static(path.join(__dirname,'assets')));
app.use(bodyParser.json());
var home = require('./src/server/routers/home');
app.use('/',home);
app.listen(8087,function (err) {
    if(err){
        console,log(err);
    }else{
        console.info("==>listen on port 8087")
    }
});