var express = require('express');
var router = express.Router();
var sql = require('../Service/dbConfig');

/* GET users listing. */
router.post('/', (req,res)=>{
  var request = new sql.Request();
  var query =  `SELECT rooms.*
                FROM rooms
                left JOIN bookings
                ON rooms.roomId=bookings.roomId
                where (bookingStartDate not in (\'`+ req.body.startDate +`\', \'`+req.body.endDate +`\') OR bookingStartDate is null) AND 
                (bookingEndDate not in (\'`+ req.body.startDate +`\', \'`+req.body.endDate +`\')  OR bookingEndDate is null) AND
                rooms.price <= `+ req.body.maxPrice +` AND
                rooms.maxGuests <= `+ req.body.maxGuests

  console.log(query);
  request.query(query, function (err, result, fields) {    
    if (err) throw err;
    console.log(err);
    console.log(result.recordsets[0]);
  res.json(result.recordsets[0]);
  });
});



module.exports = router;
