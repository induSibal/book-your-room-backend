const sql = require('mssql/msnodesqlv8');

var config = {
  server: "INDU\\SQLEXPRESS",
  driver:"msnodesqlv8",
  port:'1433',
  database: "bookYourRoomDB",
  userName: 'root',
  password: 'root',
      options: {
        trustedConnection: "true"
    }
};

sql.connect(config, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log("DB connected")
  }
});

module.exports = sql;