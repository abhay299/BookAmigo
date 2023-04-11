const express = require('express');

const cors = require('cors');

const app = express();
const  PORT = 3001;

app.use(cors());
app.use(express.json());


const mysql = require('mysql')

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Abhay@78",
	database:"users" 
})

app.post('/register', (request, response) => {
	const name = request.body.name;
	const email = request.body.email;
	const password = request.body.password;

	db.query("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, password],
		(err, result) => {
			if(result){
				response.send(result);
			}else{
				response.send({message:"Enter Valid Details"})
			}
		})
});

app.post('/login', (request, response) => {
	// const name = request.body.name;
	const email = request.body.email;
	const password = request.body.password;

	db.query(" SELECT * FROM users WHERE email = ? AND password = ?", [email, password],
		(err, result) => {
			if(err){
				request.setEncoding({err: err});
			}else{
				if(result.length > 0){
					response.send(result);
				}else{
					response.send({message:"Incorrect Email or Password!"})
				}
			}
		})
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});