import hashlib

from app.database.connection import get_db
from flask import jsonify, abort


def index():
    cur = get_db().cursor()
    cur.execute("SELECT * FROM users")
    users = cur.fetchall()
    cur.close()

    return jsonify(users)


def create(data):
    # Getting request information
    username = data['username']
    email = data['email']
    password = data['password']
    gender = data['gender']

    # Encrypting password
    hash_object = hashlib.md5(password.encode())
    password = hash_object.hexdigest()

    try:
        cur = get_db().cursor()
        cur.execute(f"INSERT INTO users(username, email, password, gender)"
                    f"VALUES ('{username}','{email}','{password}',{gender})")
        get_db().commit()
        cur.close()
    except:
        cur.close()
        abort(400)

    return jsonify({'result': True}), 201
