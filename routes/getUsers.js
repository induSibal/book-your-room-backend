var express = require('express');
var router = express.Router();
var sql = require('../Service/dbConfig');

/* GET users listing. */
router.get('/', (req,res)=>{
  var request = new sql.Request();
  var query = "SELECT * FROM users";
  request.query(query, function (err, result, fields) {    
    if (err) throw err;
    console.log(result.recordSet);
  res.json(result.recordsets[0]);
  });
});



module.exports = router;
