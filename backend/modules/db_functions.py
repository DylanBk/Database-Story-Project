import bcrypt
import os
import sqlite3

db_path = './instance/db.db'


# --- INITIALISATION ---

def create_db():
    db = db_exists(db_path)
    if db:
        print("Database already exists")
    else:
        print("Creating Database...")
        print(db_path)

        conn = connect(db_path)
        print("connection established")
        conn.execute("PRAGMA foreign_keys = ON;") # allows foreign keys to be used
        print("f keys enabled")

        create_table(conn, "courses", ["id", "name", "teacher"], ["INTEGER PRIMARY KEY AUTOINCREMENT", "TEXT", "INTEGER REFERENCES staff(id)"])
        create_table(conn, "staff", ["id", "email", "password", "name", "gender", "attendance", "role", "course"], ["INTEGER PRIMARY KEY AUTOINCREMENT", "TEXT UNIQUE", "TEXT", "TEXT", "TEXT", "REAL", "TEXT DEFAULT 'User'", "INTEGER REFERENCES courses(id)"])
        create_table(conn, "students", ["id, email, name, password, year, gender, age, attendance, role", "course", "primary_parent"], ["INTEGER PRIMARY KEY AUTOINCREMENT", "TEXT UNIQUE", "TEXT", "INTEGER", "TEXT", "INTEGER", "REAL", "TEXT DEFAULT 'User'", "INTEGER REFERENCES courses(id)", "INTEGER REFERENCES parents(id)"])
        create_table(conn, "parents", ["id", "email", "password", "name", "role", "student"], ["INTEGER PRIMARY KEY AUTOINCREMENT", "TEXT UNIQUE", "TEXT", "TEXT", "TEXT DEFAULT 'User'", "INTEGER REFERENCES students(id)"])
        create_table(conn, "events", ["id", "name", "description", "datetime", "price"], ["INTEGER PRIMARY KEY AUTOINCREMENT", "TEXT", "TEXT", "TEXT", "REAL"])
        create_table(conn, "exam_results", ["id", "name", "score", "num_questions_correct", "num_questions_incorrect", "student"], ["INTEGER PRIMARY KEY AUTOINCREMENT", "TEXT", "REAL", "INTEGER", "INTEGER", "INTEGER REFERENCES students(id)"])

        print("Tables Created Successfully")

        conn.close()

def connect(db_path):
    return sqlite3.connect(db_path)

def db_exists(db_path):
    if not os.path.exists(db_path):
        return False
    else:
        return True



# --- CRUD TABLE FUNCTIONS ---

def create_table(conn, table_name, col_vals, col_types):
    c = conn.cursor()

    cols_and_types = []
    for i, e in enumerate(col_vals):
        temp = f"{e} {col_types[i]}"
        cols_and_types.append(temp)

    query = f"CREATE TABLE IF NOT EXISTS {table_name} ({(', '.join(cols_and_types))})"
    print(query)
    c.execute(query)
    conn.commit()

def read_table(conn, table_name):
    c = conn.cursor()

    query = f"SELECT * FROM {table_name}"
    c.execute(query)
    return c.fetchall()

def update_table_add_col(conn, table_name, col_val, col_type):
    c = conn.cursor()

    query = f"ALTER TABLE {table_name} ADD COLUMN ({col_val} {col_type})"
    c.execute(query)
    conn.commit()

def update_table_remove_col(conn, table_name, col_val):
    c = conn.cursor()

    query = f"ALTER TABLE {table_name} DROP COLUMN {col_val}"
    c.execute(query)
    conn.commit()

def delete_table(conn, table_name):
    c = conn.cursor()

    query = f"DROP TABLE {table_name}"
    c.execute(query)
    conn.commit()


# --- CRUD TABLE DATA FUNCTIONS ---

def add_to_table(conn, table_name, data_vals):
    c = conn.cursor()

    data = (', ').join(data_vals)
    print(data)
    query = f"INSERT INTO {table_name} (?)"
    c.execute(query, data)
    conn.commit()

def edit_table_data(conn, table_name, col, data, id):
    c = conn.cursor()

    query = f"UPDATE {table_name} SET {col} = {data} WHERE id = {id}"
    c.execute(query)
    conn.commit()

def remove_from_table(conn, table_name, id):
    c = conn.cursor()

    query = f"DELETE FROM {table_name} WHERE id = {id}"
    c.execute(query)
    conn.commit()


# --- USER FUNCTIONS ---

def create_user(conn, table_name, data):
    pw = data[2]

    bytes = pw.encode('utf-8')
    salt = bcrypt.gensalt(10)
    hash_pw = bcrypt.hashpw(bytes, salt)

    data[2] = hash_pw

    add_to_table(conn, table_name, data)



#! --- TESTING --- (remove before deployment)

def default_admin(conn):
    c = conn.cursor()

    c.execute("UPDATE staff SET role = 'Admin' WHERE email = 'admin@domain.com'")
    conn.commit()