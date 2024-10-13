const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

let db;

async function connectToDatabase() {
    if (!db) {
    db = await open({
        filename: '../db/db.db',
        driver: sqlite3.Database
    });
    console.log("Successfully Connected to Database");
    }
    return db;
};

module.exports = connectToDatabase;