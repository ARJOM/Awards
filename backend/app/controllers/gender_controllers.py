from app.database.connection import get_db
from flask import jsonify, abort


def index():
    cur = get_db().cursor()
    cur.execute("SELECT * FROM genders")
    genders = cur.fetchall()
    cur.close()

    return jsonify(genders)


def create(data):
    gender = data['gender']

    cur = get_db().cursor()
    try:
        cur.execute(f"INSERT INTO genders(gender) VALUES('{gender}')")
        get_db().commit()
        cur.close()
    except:
        cur.close()
        abort(400)

    return jsonify({'result': True}), 201
