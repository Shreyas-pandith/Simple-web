
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'db4free.net',
    port     :  '3306',
    user     : 'shreyas1210',
    password : 'dpsp@1191',
    database : 'demo_database'
  });
  
  connection.connect(function(err) {
      if (err) throw err
     
      console.log('You are now connected...');
    });
  
    module.exports = connection;  