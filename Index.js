const bodyParser = require("body-parser");
const express = require("express");
const app  = express();
const cors = require('cors');
const mysql  = require('mysql');
const { response } = require("express");
const db = mysql.createPool({
    host: 'localhost',
    user:  'root',
    password: '',
    database: 'food_db',
});
// middle ware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
// middle ware


app.get("/api/get",(req,res)=> {
    const sqlSelect  = 
    "SELECT * FROM food_table";
    db.query(sqlSelect, (err, result) => {
        
        res.send({
            data: result
        })
        
    });
});

app.get('/', (req, res) => {
    res.send('hello world')
  })
  // listening on port 3001 
app.listen(3001, () =>{
    console.log("running on port 3001");
});
