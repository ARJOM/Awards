from app.database.connection import get_db
from flask import jsonify, abort
from app.utils import tokenValidation
from app.utils.passwordEncrypt import password_encrypt


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
    password = password_encrypt(password)

    cur = get_db().cursor()
    try:
        cur.execute(f"INSERT INTO users(username, email, password, gender)"
                    f"VALUES ('{username}','{email}','{password}',{gender})")
        get_db().commit()
        cur.close()
    except:
        cur.close()
        abort(400)

    return jsonify({'result': True}), 201


def delete(token, data):
    token_info = tokenValidation.token_data(token)

    if token_info is None:
        abort(400)

    user_id = token_info.get('username')

    password = password_encrypt(data['password'])

    cur = get_db().cursor()

    cur.execute(f"SELECT * FROM users WHERE username='{user_id}' AND password='{password}'")
    user = cur.fetchone()
    if user is None:
        abort(400)

    cur.execute(f"DELETE FROM users WHERE username='{user_id}'")
    get_db().commit()
    cur.close()

    return jsonify({'result': True})
