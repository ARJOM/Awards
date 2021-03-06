from app.database.connection import get_db
from flask import jsonify, abort, make_response
from app.utils import tokenValidation


def index():
    cur = get_db().cursor()
    cur.execute("SELECT * FROM photos")
    photos = cur.fetchall()

    cur.execute("SELECT count(*) as total FROM photos")
    headers = cur.fetchone()['total']
    cur.close()

    data = {
        'photos': photos,
        'total-count': headers
    }
    response = make_response(jsonify(data))

    return response


def list_by_type(token, type_id):
    token_info = tokenValidation.token_data(token)

    if token_info is None:
        abort(404)

    user_id = token_info.get('user')

    cur = get_db().cursor()
    cur.execute(f"SELECT * FROM photos WHERE type={type_id} "
                f"AND id NOT IN (SELECT photo FROM ratings WHERE appraiser='{user_id}')")
    photos = cur.fetchall()

    cur.execute(f"SELECT name FROM types WHERE id={type_id} "
                f"AND id NOT IN (SELECT photo FROM ratings WHERE appraiser='{user_id}')")
    category = cur.fetchone()['name']

    cur.execute(f"SELECT count(*) as total FROM photos WHERE type={type_id} "
                f"AND id NOT IN (SELECT photo FROM ratings WHERE appraiser='{user_id}')")
    headers = cur.fetchone()['total']
    cur.close()

    data = {
        'photos': photos,
        'total-count': headers,
        'category': category
    }
    response = make_response(jsonify(data))

    return response


def list_by_type_and_gender(type_id, gender_id):
    cur = get_db().cursor()
    cur.execute(f"SELECT p.* "
                f"FROM photos p, users u "
                f"WHERE p.username=u.username AND p.type={type_id} AND u.gender={gender_id}")
    photos = cur.fetchall()

    cur.execute(f"SELECT count(*) as total FROM photos p, users u "
                f"WHERE p.username=u.username AND p.type={type_id} AND u.gender={gender_id}")
    headers = cur.fetchone()['total']
    cur.close()

    data = {
        'photos': photos,
        'total-count': headers
    }
    response = make_response(jsonify(data))

    return response


def create(token, data):
    token_info = tokenValidation.token_data(token)

    if token_info is None:
        abort(400)

    user_id = token_info.get('user')

    photo = data['photo']
    photo_type = data['type']

    cur = get_db().cursor()
    try:
        cur.execute(f"INSERT INTO photos(username, photo, type) VALUES('{user_id}','{photo}',{photo_type})")
        get_db().commit()
        cur.close()
    except:
        cur.close()
        abort(400)

    return jsonify({'result': True}), 201


def detail(photo_id):
    cur = get_db().cursor()
    cur.execute(f"SELECT * FROM photo_info pi, photo_most pm WHERE pi.id={photo_id} AND pi.id=pm.id")
    photo = cur.fetchone()
    cur.close()

    return jsonify(photo)


def delete(token, photo_id):
    token_info = tokenValidation.token_data(token)

    if token_info is None:
        abort(400)

    user_id = token_info.get('user')

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


def profile(user_id, token):
    token_info = tokenValidation.token_data(token)

    if token_info is None:
        abort(400)

    user = token_info.get('user')

    if user_id != user:
        abort(405)

    cur = get_db().cursor()
    cur.execute(f"SELECT * FROM photos WHERE username='{user_id}'")
    photos = cur.fetchall()

    cur.execute(f"SELECT count(*) as total FROM photos WHERE username='{user_id}'")
    headers = cur.fetchone()['total']
    cur.close()

    data = {
        'photos': photos,
        'total-count': headers
    }
    response = make_response(jsonify(data))

    return response


def rated(token):
    token_info = tokenValidation.token_data(token)

    if token_info is None:
        abort(400)

    user_id = token_info.get('user')

    cur = get_db().cursor()
    cur.execute(f"SELECT * FROM photos WHERE id IN (SELECT photo FROM ratings WHERE appraiser='{user_id}')")
    photos = cur.fetchall()

    cur.execute(f"SELECT count(*) as total FROM photos WHERE id IN (SELECT photo FROM ratings WHERE appraiser='{user_id}')")
    headers = cur.fetchone()['total']
    cur.close()

    data = {
        'photos': photos,
        'total-count': headers
    }
    response = make_response(jsonify(data))

    return response


def rated_by_category(token, type_id):
    token_info = tokenValidation.token_data(token)

    if token_info is None:
        abort(400)

    user_id = token_info.get('user')

    cur = get_db().cursor()
    cur.execute(f"SELECT * FROM photos WHERE id IN (SELECT photo FROM ratings WHERE appraiser='{user_id}') AND type='{type_id}'")
    photos = cur.fetchall()

    cur.execute(f"SELECT count(*) as total FROM photos WHERE id IN (SELECT photo FROM ratings WHERE appraiser='{user_id}') AND type='{type_id}'")
    headers = cur.fetchone()['total']
    cur.close()

    data = {
        'photos': photos,
        'total-count': headers
    }
    response = make_response(jsonify(data))

    return response
