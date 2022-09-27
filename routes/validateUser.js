var express = require('express');
var router = express.Router();
var sql = require('../Service/dbConfig');

router.post('/', (req,res)=>{
  var request = new sql.Request();
  var query = `select * from users 
  where emailAddress='`+req.body.emailAddress+`' and userPassword='`+req.body.password+`'`;
  console.log(query);
  request.query(query, function (err, result, fields) {    
    if (err) throw err;
    console.log(err);
   
    console.log(result);
  res.json(result.recordsets[0]);
  });
});



module.exports = router;
