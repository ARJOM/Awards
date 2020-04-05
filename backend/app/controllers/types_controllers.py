from app.database.connection import get_db
from flask import jsonify, abort


def index():
    cur = get_db().cursor()
    cur.execute("SELECT * FROM types")
    types = cur.fetchall()
    cur.close()

    return jsonify(types)


def create(data):
    type_name = data['name']

    cur = get_db().cursor()
    try:
        cur.execute(f"INSERT INTO types(name) VALUES('{type_name}')")
        get_db().commit()
        cur.close()
    except:
        cur.close()
        abort(400)

    return jsonify({'result': True}), 201


def delete(type_id):
    cur = get_db().cursor()

    cur.execute(f"SELECT * FROM types WHERE id={type_id}")
    type_obj = cur.fetchone()
    if type_obj is None:
        abort(400)

    cur.execute(f"DELETE FROM types WHERE id={type_id}")
    get_db().commit()
    cur.close()

    return jsonify({'result': True})


def list_photo():
    cur = get_db().cursor()
    cur.execute("SELECT * FROM types")
    types = cur.fetchall()

    data = []
    for identifier in types:
        ty = identifier['id']
        cur.execute(f"SELECT photo FROM photo_info pi NATURAL JOIN photo_most pm WHERE type={ty}")
        identifier['photo'] = cur.fetchone()['photo']
        data.append(identifier)

    cur.close()

    return jsonify(data)
