
var express=require('express');
var router =express.Router();
var db=require('./db');

router.get('/',function (req,res)
{
    db.query('SELECT * FROM notes',function(err,rows,fields){
        res.render('notes',{data: rows});

    });

});


router.get('/delete/(:name)',function(req,res){

    sql="DELETE FROM notes WHERE title= ?";
    db.query(sql,req.params.name, function(err,rows,fields){
        if(err)
        {
            console.log(err.message);
        }
});
 res.redirect('/notes');
});


router.post('/',function (req,res)
{   sql="INSERT INTO notes VALUES( ?,?)";
    db.query(sql,[req.body.title,req.body.note], function(err,rows,fields){
      

    });
   
    db.query('SELECT * FROM notes',function(err,rows,fields){
        res.render('notes',{data: rows});

    });

    
  

});

module.exports=router;