/**
 * Created by admin on 2017/6/29.
 */

var express = require("express");
var router = express.Router();

router.get('/',function(req,res){
    res.render('home',{});
});
module.exports = router;