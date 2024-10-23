from modules import *

app = Flask(__name__, static_folder='../frontend/build', static_url_path='')
CORS(app)

db_path = "./instance/db.db"

# -- ROUTES ---

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if session:
        print("already logged in")
        return
    if request.method == 'POST':
        data = request.get_json()
        email = data['email']
        name = data['full-name']
        enc_pw = data['hidden-pw']

        enc_pw_bytes = base64.b64decode(enc_pw)
        iv = enc_pw_bytes[:16]
        real_enc_pw = enc_pw_bytes[16:]
        print(f"iv: {iv}")
        print(f"enc pw: {real_enc_pw}")

        with db.connect(db_path) as conn:
            db.create_user(conn, [email, real_enc_pw, name])


# ! TESTING
@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({"message": "some data"})




# --- MAIN ---

if __name__ == "__main__":
    app.run(debug=True)