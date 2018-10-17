
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'db4free.net',
    port     :  '3306',
    user     : '',
    password : '',
    database : 'demo_database'
  });
  
  connection.connect(function(err) {
      if (err) throw err
     
      console.log('You are now connected...');
    });
  
    module.exports = connection;  
