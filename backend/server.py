from modules import *

app = Flask(__name__, static_folder='../frontend/build', static_url_path='')
CORS(app)

db_path = "./instance/db.db"

# -- ROUTES ---

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if session:
        print("already logged in")
        return jsonify({"error": "already signed in"}, 400)
    if request.method == 'POST':
        data = request.get_json()
        email = data['email']
        name = data['full_name']
        pw = data['pw']

        with db.connect(db_path) as conn:
            db.create_user(conn, [email, pw, name])
            print("user created")

        return jsonify({"message": "user created successfully"}), 200
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if session:
        return jsonify({"error": "already signed in"}), 400
    if request.method == 'POST':
        data = request.get_json()
    
        with db.connect(db_path) as conn:
            check = db.user_exists(conn, data[0])
        
            if check:
                user = db.get_user_by_email(conn, data[0])
                if db.check_pw(conn, user[0], data[1]):
                    print("correct pw")
                    session['user_id'] = user[0]
                    session['email'] = user[1]
                    session['name'] = user[3]
                    session['role'] = user[4]

                return jsonify({"message": "signed in successfully"}), 200
            return jsonify({"error": "user does not exist"}), 400
    return send_from_directory(app.static_folder, 'index.html')


# --- MAIN ---

db.create_db()

with db.connect(db_path) as conn:
    db.default_admin(conn)

if __name__ == "__main__":
    app.run(debug=True)