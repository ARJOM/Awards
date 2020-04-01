from app.database.connection import get_db
from flask import jsonify, abort
from app.utils import tokenValidation


def index():
    cur = get_db().cursor()
    cur.execute("SELECT * FROM ratings")
    ratings = cur.fetchall()
    cur.close()

    return jsonify(ratings)


def create(token, data):
    token_info = tokenValidation.token_data(token)

    if token_info is None:
        abort(400)

    user_id = token_info.get('username')

    photo_id = data['photo']
    rating = data['rating']

    cur = get_db().cursor()
    try:
        cur.execute(f"INSERT INTO ratings(appraiser, photo, grade) VALUES ('{user_id}',{photo_id},{rating})")
        get_db().commit()
        cur.close()
    except:
        cur.close()
        abort(400)

    return jsonify({'result': True}), 201
