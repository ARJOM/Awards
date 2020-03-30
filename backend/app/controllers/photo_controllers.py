from app.database.connection import get_db
from flask import jsonify, abort


def index():
    cur = get_db().cursor()
    cur.execute("SELECT * FROM photos")
    photos = cur.fetchall()
    cur.close()

    return jsonify(photos)


def list_by_type(type_id):
    cur = get_db().cursor()
    cur.execute(f"SELECT * FROM photos WHERE type={type_id}")
    photos = cur.fetchall()
    cur.close()

    return jsonify(photos)


def list_by_type_and_gender(type_id, gender_id):
    cur = get_db().cursor()
    cur.execute(f"SELECT p.* "
                f"FROM photos p, users u "
                f"WHERE p.username=u.username AND p.type={type_id} AND u.gender={gender_id}")
    photos = cur.fetchall()
    cur.close()

    return jsonify(photos)


def create(user_id, data):
    photo = data['photo']
    photo_type = data['type'],

    cur = get_db().cursor()
    try:
        cur.execute(f"INSERT INTO photos(username, photo, type) VALUES('{user_id}','{photo}',{photo_type})")
        cur.close()
    except:
        cur.close()
        abort(400)

    return jsonify({'result': True}), 201


def delete(user_id, photo_id):
    cur = get_db().cursor()

    cur.execute(f"SELECT * FROM photos WHERE id={photo_id}")
    photo = cur.fetchone()

    if photo is None:
        abort(400)

    if photo['username'] != user_id:
        abort(401)

    cur.execute(f"DELETE FROM photos WHERE id={photo_id}")
    get_db().commit()
    cur.close()

    return jsonify({'result': True})


def profile(user_id):
    cur = get_db().cursor()
    cur.execute("SELECT * FROM photos WHERE username='{user_id}'")
    photos = cur.fetchall()
    cur.close()

    return jsonify(photos)