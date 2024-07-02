from flask import Flask,request, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash, check_password_hash
from pymongo import MongoClient


app = Flask(__name__) #inicialización
app.config['MONGO_URI']='your_jwt_secret_key'
CORS(app)
jwt = JWTManager(app)

client = MongoClient('mongodb://localhost:27017/')
db = client.mydatabase

#enlaces
@app.route('inicio/login',methods=['POST'])
def login():
    data = request.json
    user = db.users.find_one({'email': data['email']})

    if not user or not check_password_hash(user['password'], data['password']):
        return jsonify({'message': 'Invalid credentials'}), 401

    access_token = create_access_token(identity=data['email'])
    return jsonify({'access_token': access_token}), 200

@app.route('crear/join',methods=['POST'])
def registro():
    data = request.json
    if db.users.find_one({'email': data['email']}):
        return jsonify({'message': 'User already exists'}), 400

    hashed_password = generate_password_hash(data['password'], method='sha256')
    db.users.insert_one({'email': data['email'], 'password': hashed_password})
    return jsonify({'message': 'User registered successfully'}), 201

@app.route('/reserve', methods=['POST'])
@jwt_required()
def reserve():
    data = request.json
    current_user = get_jwt_identity()
    reservation = {
        'user': current_user,
        'restaurant': data.get('restaurant', False),
        'hotel': data.get('hotel', False),
        'transport': data.get('transport', False),
        'location': data['location']
    }
    db.reservations.insert_one(reservation)
    return jsonify({'message': 'Reservation made successfully'}), 201

@app.route('/list/<id>',methods=['GET'])
def listUsuarioID():
    pass

@app.route('/list/usuarios',methods=['GET'])
def listusuario():
    pass

@app.route('/actualizar/<id>',methods=['PUT'])
def updateUsuario():
    pass

@app.route('/delete/<id>',methods=['DELETE'])
def deleteUsuario():
    pass

if __name__ == "__main__":
    app.run(debug=True,port=5000)