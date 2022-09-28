var express = require('express');
var router = express.Router();
var sql = require('../Service/dbConfig');

/* GET users listing. */
router.get('/:bookingId', (req,res)=>{
  var request = new sql.Request();
  var query = `delete from bookings where bookingId=`+`'`+req.params.bookingId+`'`;
  console.log(query);
  request.query(query, function (err, result, fields) {    
    if (err) throw err;
    console.log(err);
    
    console.log(result);
  res.json(result.recordsets[0]);
  });
});




module.exports = router;
