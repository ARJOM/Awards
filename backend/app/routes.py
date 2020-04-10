from flask import request, abort
from functools import wraps
from app import app
from app.utils import tokenValidation

from app.controllers import session_controllers as sessions
from app.controllers import user_controllers as users
from app.controllers import gender_controllers as genders
from app.controllers import types_controllers as types
from app.controllers import photo_controllers as photos
from app.controllers import rating_controllers as ratings


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('authorization')

        if token is None:
            abort(400)

        if not tokenValidation.is_valid(token):
            abort(401)

        return f(*args, **kwargs)

    return decorated


@app.route('/session', methods=['POST'])
def session():
    return sessions.session(request.json)


@app.route('/users', methods=['POST'])
def user_create():
    return users.create(request.json)


@app.route('/users', methods=['GET', 'DELETE'])
@token_required
def users_list():
    if not tokenValidation.is_staff(request.headers['authorization']):
        abort(403)
    return users.index()


@app.route('/users', methods=['DELETE'])
@token_required
def users_delete():
    return users.delete(request.headers['authorization'], request.json)


@app.route('/genders', methods=['GET', 'POST'])
@token_required
def genders_route():
    if not tokenValidation.is_staff(request.headers['authorization']):
        abort(403)
    if request.method == 'GET':
        return genders.index()
    elif request.method == 'POST':
        return genders.create(request.json)
    abort(405)


@app.route('/types', methods=['GET'])
@token_required
def types_index():
    return types.index()


@app.route('/home', methods=['GET'])
@token_required
def types_home():
    return types.list_photo()


@app.route('/types', methods=['POST'])
@token_required
def types_route():
    if not tokenValidation.is_staff(request.headers['authorization']):
        abort(403)
    return types.create(request.json)


@app.route('/types/<int:type_id>', methods=['DELETE'])
@token_required
def type_delete(type_id):
    if not tokenValidation.is_staff(request.headers['authorization']):
        abort(403)
    return types.delete(type_id)


@app.route('/photos', methods=['GET', 'POST'])
@token_required
def photos_route():
    if request.method == 'GET':
        return photos.index()
    elif request.method == 'POST':
        return photos.create(request.headers['authorization'], request.json)


@app.route('/photos/<int:type_id>', methods=['GET'])
@token_required
def photo_type(type_id):
    return photos.list_by_type(type_id)


@app.route('/photos/<int:type_id>/<int:gender_id>', methods=['GET'])
@token_required
def photo_type_gender(type_id, gender_id):
    return photos.list_by_type_and_gender(type_id, gender_id)


@app.route('/photos/detail/<int:photo_id>', methods=['GET'])
@token_required
def photo_detail(photo_id):
    return photos.detail(photo_id)


@app.route('/photos/<int:photo_id>', methods=['DELETE'])
@token_required
def photo_delete(photo_id):
    return photos.delete(request.headers['authorization'], photo_id)


@app.route('/profile/<string:user_id>', methods=['GET'])
@token_required
def profile(user_id):
    return photos.profile(user_id, request.headers['authorization'])


@app.route('/ratings', methods=['GET', 'POST'])
@token_required
def rating():
    if request.method == 'GET':
        return ratings.index()
    elif request.method == 'POST':
        return ratings.create(request.headers['authorization'], request.json)


@app.route('/rated', methods=['get'])
@token_required
def rated():
    return photos.rated(request.headers['authorization'])


@app.route('/rated/<int:type_id>', methods=['GET'])
@token_required
def rated_type(type_id):
    return photos.rated_by_category(request.headers['authorization'], type_id)
