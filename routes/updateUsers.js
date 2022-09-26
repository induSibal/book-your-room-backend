var express = require('express');
var router = express.Router();
var sql = require('../Service/dbConfig');

/* GET users listing. */
router.post('/', (req,res)=>{
  var request = new sql.Request();
  var query = `INSERT INTO users(firstName,lastName,phone,emailAddress,userPassword)VALUES(
              \'`+req.body.firstName+`\',
              \'`+req.body.lastName+`\',
              \'`+req.body.phone+`\',
              \'`+req.body.email+`\',
              \'`+req.body.pass+`\');`;
  console.log(query);
  request.query(query, function (err, result, fields) {    
    if (err) throw err;
    console.log(err);
    
    console.log(result);
  res.json(result.recordsets[0]);
  });
});


module.exports = router;
