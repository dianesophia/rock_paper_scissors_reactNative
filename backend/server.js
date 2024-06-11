const dotenv = require('dotenv');
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 4324;

const db = mysql.createConnection({
    user: process.env.DB_USER || 'root',
    host: process.env.DB_HOST || 'localhost',
    password: process.env.DB_PASSWORD || '', // Add password from environment variables or modify as needed
    database: process.env.DB_NAME || 'rps'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err); // Update error message
        process.exit(1);
    }
    console.log('Connected to the MySQL database');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get("/players", (req, res) => {
    const q = "SELECT * FROM players";
    db.query(q, (err, data) => {
        if (err) {
            console.error('Error querying database:', err); // Update error message
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        return res.json(data);
    });
});

app.post("/save", (req, res) => {
    const { player, score } = req.body;
    const sql = "INSERT INTO players (player, score) VALUES (?, ?)";
    db.query(sql, [player, score], (err, results) => {
        if (err) {
            console.error("Query Error: ", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        console.log("Insertion successful: ", results);
        return res.status(201).json({ success: true });
    });
});




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
}).on('error', (err) => {
    console.error('Server error:', err); // Update error message
});
