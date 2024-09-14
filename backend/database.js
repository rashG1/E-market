const mysql = require('mysql2');

// Create the connection to MySQL database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ry@03191sql',
    database: 'onlinestore'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

module.exports = db;
