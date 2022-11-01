const sql = require('mysql');
const dotenv = require('dotenv').config();
const conn = sql.createConnection({
    host: process.env.DATABASE_HOST, 
    user: process.env.DATABASE_USER, 
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
}); 

conn.connect((err) => {
    if (err) {
      console.log("Az adatbázishoz való csatlakozás sikertelen!", err);
    } else {
      console.log("Sikeres csatlakozás az adatbázishoz!");
    }
});

module.exports = conn;