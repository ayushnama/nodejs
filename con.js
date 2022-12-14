const mysql = require ("mysql")
const con = mysql.createConnection({


server = "localhost";
user = "root";
password ="";
db ="ayush";
port: 3308

});

con.connect((err) => {
    if (err)throw err;
    console.log("connectioncreated..!"); 
})

module.exports.con =con;