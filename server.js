const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));

// app.get('/api/hello',(req, res) =>{
// 	res.send({message: 'Hello Express'});
// });

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
	host : conf.host,
	user : conf.user,
	password : conf.password,
	port : conf.port,
	database : conf.database
});

connection.connect();


app.get('/api/customers', (req, res) => {
	connection.query(
		"SELECT * FROM CUSTOMER", (err, rows, fields) =>{
			res.send(rows);
		}
	);
	// res.send(
		// [
		// 	{
		// 		"id" : 1,
		// 		"image" : "https://placeimg.com/64/64/any",
		// 		"name" : "okki",
		// 		"birthday" : "740407",
		// 		"gender" : "남자",
		// 		"job" : "프로그래머"
		// 	},
		// 	{
		// 		"id" : 2,
		// 		"image" : "https://placeimg.com/64/64/2",
		// 		"name" : "이순신",
		// 		"birthday" : "조선시대",
		// 		"gender" : "남자",
		// 		"job" : "수군"
		// 	},
		// 	{
		// 		"id" : 3,
		// 		"image" : "https://placeimg.com/64/64/3",
		// 		"name" : "강감찬",
		// 		"birthday" : "고려시대",
		// 		"gender" : "남자",
		// 		"job" : "육군"
		// 	}
		// ]
	// )
});

app.listen(port, () => console.log(`Listening on port ${port}`));