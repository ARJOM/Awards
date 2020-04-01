import jwt
import datetime

from app import app
from app.database.connection import get_db
from flask import jsonify, abort
from app.utils.passwordEncrypt import password_encrypt


def session(data):
    username = data['username']
    password = password_encrypt(data['password'])

    cur = get_db().cursor()
    cur.execute(f"SELECT * FROM users WHERE username='{username}' AND password='{password}'")
    user = cur.fetchone()
    cur.close()

    if user is None:
        abort(400)

    token = jwt.encode({'user': username, 'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=24)}, app.config['SECRET_KEY'])

    return jsonify({'token': token.decode('UTF-8')})
