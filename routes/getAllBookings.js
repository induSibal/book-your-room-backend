var express = require('express');
var router = express.Router();
var sql = require('../Service/dbConfig');

/* GET users listing. */
router.get('/', (req,res)=>{
  var request = new sql.Request();
  var query = `select * from bookings`;
  request.query(query, function (err, result, fields) {    
    if (err) throw err;
    console.log(err);
    
    console.log(result);
  res.json(result.recordsets[0]);
  });
});



module.exports = router;
