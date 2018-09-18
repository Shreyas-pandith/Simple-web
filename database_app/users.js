var express=require('express');
var router=express.Router();
var db=require('./db');
router.get('/',function(req,res){
 //res.send('this is users app');
db.query('SELECT * FROM users',function(err,rows,fields){

 //console.log(rows);
 if (err) throw err;
 res.render('users',{data : rows});

});

 
});

module.exports=router;
