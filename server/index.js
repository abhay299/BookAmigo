const express = require('express');

const cors = require('cors');

const app = express();
const  PORT = 3001;

app.use(cors());
app.use(express.json());


const mysql = require('mysql');

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Abhay@78",
	database:"credentialsdb"
});

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Abhay@78",
	database:"bookamigodb"
})

connection.connect(function(err) {
	if(err) {throw err};
	console.log("Connected!");
});

// db.getConnection( (err, connection) => {
// 	if (err) throw err;

// 	const name = 'abc';
// 	const email = 'xyz@email.com';
// 	const password = '123';

// 	const qry = "INSERT INTO users (name, email, password,created_at) VALUES (?, ?, ?,NOW())";

// 	connection.query(qry, [name, email, password], (err, result) => {
// 		connection.release();
// 		if(err) throw err;
// 		console.log(result);
// 	});
// });

app.post('/register', (req, res) => {
	const name = req.body.name;
	const email = req.body.email;
	const password = req.body.password;

	db.query("INSERT INTO users (name, email, password,created_at) VALUES (?, ?, ?,NOW())", [name, email, password],
		(err, result) => {
			if(result){
				res.send(result);
				
			}else{
				res.send(err);
			}
		})
});

app.post('/login', (req, res) => {
	// const name = req.body.name;
	const email = req.body.email;
	const password = req.body.password;
	console.log(email);
	db.query(" SELECT * FROM users WHERE email = ? AND password = ?", [email, password],
		(err, result) => {
			if(err){
				req.setEncoding({err: err});
			}else{
				if(result.length > 0){
					res.send(result);
				}else{
					res.send({message:"Incorrect Email or Password!"})
				}
			}
		})
});

app.get('/myBooking', (req, res) => {
	connection.query("SELECT * FROM hotels;", (err, result) => {
		if(err) throw err;
		res.send(result);
		// console.log(result)
	});
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});	