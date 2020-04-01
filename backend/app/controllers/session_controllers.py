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

    return jsonify({'result': True})
