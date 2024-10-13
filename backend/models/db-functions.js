const sqlite3 = require('sqlite3');
const { connectToDatabase } = require('../config/db');

// --- INITIALISE DB ---
let db;

( async () => {
    db = await connectToDatabase();
})();


// --- PRIMITIVE TABLE FUNCTIONS ---

async function create_table(table_name, table_columns, data_types) {
    let temp = [];
    for (const [i, el] of table_columns.entries()) {
        let x = `${el} ${data_types[i]}`;
        temp.push(x);
    };

    const table_data = temp.join(', ')
    const query = `CREATE TABLE IF NOT EXISTS ${table_name} (${table_data})`;
    console.log(query);
    db.run(query);  
};

async function read_table(table_name) {
    const query = `SELECT * FROM ${table_name}`;
    const res = await db.all(query);
    return res;
}

async function insert_into_table(table_name, col, data) {
    const query = `INSERT INTO ${table_name} (${col}) VALUES (?)`;
    db.run(query, data);
};

async function update_table(table_name, col, old_val, new_val) {
    const query = `UPDATE ${table_name} SET ${col} = ? WHERE ${col} = ?`;
    db.run(query, new_val, old_val);
};

async function delete_from_table(table_name, col, val) {
    const query = `DELETE FROM ${table_name} WHERE ${col} = ?`;
    db.run(query, val);
};

async function delete_table(table_name) {
    const query = `DROP TABLE ${table_name}`;
};

// --- SETUP ---

async function create_db() {
    create_table("staff", ["staff_id", "email", "name", "password", "gender", "attendance", "role"], ["INTEGER AUTOINCREMENT", "TEXT", "TEXT", "TEXT", "TEXT", "REAL", "TEXT DEFAULT 'User'"]);
    create_table("students", ["student_id", "email", "name", "password", "year", "gender", "age", "attendance", "role"], ["INTEGER AUTOINCREMENT", "TEXT", "TEXT", "TEXT", "TEXT", "TEXT", "INTEGER", "REAL", "TEXT DEFAULT 'User"]);
    create_table("parents", ["parent_id", "email", "name", "password", "gender", "role"], ["INTEGER AUTOINCREMENT", "TEXT", "TEXT", "TEXT", "TEXT", "TEXT DEFAULT 'User"]);
    create_table("courses", ["course_id", "name"], ["INTEGER AUTOINCREMENT", "TEXT"]);
    create_table("events", ["event_id", "name", "description", "datetime", "price"], ["INTEGER AUTOINCREMENT", "TEXT", "TEXT", "TEXT", "FLOAT"]);
};

create_db()