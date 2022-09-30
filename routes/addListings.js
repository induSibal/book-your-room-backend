var express = require('express');
var router = express.Router();
var sql = require('../Service/dbConfig');


router.post('/', (req,res)=>{
  var request = new sql.Request();
  var query = `INSERT INTO listings(listingName,price,maxGuests,imagePath)VALUES(
    \'`+req.body.listingName+`\',
    \'`+req.body.price+`\',
    \'`+req.body.maxGuests+`\',
    \'`+req.body.imagePath+`\');`;
    console.log(query);
  request.query(query, function (err, result, fields) {    
    if (err) throw err;
    console.log(err);
    
    console.log(result);
  res.json(result.recordsets[0]);
  });
});



module.exports = router;
