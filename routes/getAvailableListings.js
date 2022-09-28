var express = require('express');
var router = express.Router();
var sql = require('../Service/dbConfig');

/* GET users listing. */
router.post('/', (req,res)=>{
  var request = new sql.Request();
  var query =  `Select * from listings 
                where listingId not in (SELECT listingId
                                        FROM bookings
                                        where (bookingStartDate between '`+req.body.startDate+`' and '`+req.body.endDate+`') OR 
                                        (bookingEndDate between '`+req.body.startDate+`' and '`+req.body.endDate+`'))`

query = req.body.maxPrice != '' ? query + `AND price <= `+ req.body.maxPrice : query
query = req.body.maxGuests != '' ? query + `AND maxGuests <= `+ req.body.maxGuests : query

  console.log(query);
  request.query(query, function (err, result, fields) {    
    if (err) throw err;
    console.log(err);
    console.log(result.recordsets[0]);
  res.json(result.recordsets[0]);
  });
});



module.exports = router;
