from modules import *

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

db_path = './instance/db.db'


# -- ROUTES ---

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_react_app(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({"message": "some data"})


@app.route('/signup', methods=['GET', 'POST'])
@app.route('/signup', methods=['GET', 'POST'])
def signup():
    pass


# --- MAIN ---

db.create_db()
with db.connect(db_path) as conn:
    db.default_admin(conn)


if __name__ == "__main__":
    app.run(debug=True)