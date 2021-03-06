var mysql = require('mysql');
var connection;
// if (process.env.NODE_ENV === "production") {
    connection = mysql.createConnection(process.env.CLEARDB_URL);
// } else {
//     connection = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: '',
//         database: 'burger2_db'
//     });
// }
// /////////////////////old
// var connection = mysql.createConnection({
// 		host: "localhost",
// 		port: 3306,
// 		user: "root",
// 		password: "",
// 		database: "burger_db"
// 	});

connection.connect(function(err) {
    if (err) {
    	console.error('error connecting: ' + err.stack);
    	return;
    } 
    console.log("connected as id: " + connection.threadId);
});

module.exports= connection;
