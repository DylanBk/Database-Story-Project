import bcrypt
import os
import sqlite3

db_path = '../instance/db.db'


# --- INITIALISATION ---

def create_db(db_path):
    create_table("students", ["id, email, name, password, year, gender, age, attendance, role"], ["INTEGER AUTOINCREMENT", "TEXT", "TEXT", "INTEGER", "TEXT", "INTEGER", "REAL", "TEXT DEFAULT 'User"])

def connect(db_path):
    return sqlite3.connect(db_path)

def db_exists(db_path):
    if not os.path(db_path):
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

    query = f"INSERT INTO {table_name} ({(', ').join(data_vals)})"
    c.execute(query)
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