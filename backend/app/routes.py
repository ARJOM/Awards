from flask import request, abort

from app import app

from app.controllers import user_controllers as users
from app.controllers import gender_controllers as genders
from app.controllers import types_controllers as types
from app.controllers import photo_controllers as photos


@app.route('/users', methods=['GET', 'POST', 'DELETE'])
def users_route():
    if request.method == 'GET':
        return users.index()
    elif request.method == 'POST':
        return users.create(request.json)
    elif request.method == 'DELETE':
        return users.delete(request.headers['authorization'], request.json)
    abort(405)


@app.route('/genders', methods=['GET', 'POST'])
def genders_route():
    if request.method == 'GET':
        return genders.index()
    elif request.method == 'POST':
        return genders.create(request.json)
    abort(405)


@app.route('/types', methods=['GET', 'POST'])
def types_route():
    if request.method == 'GET':
        return types.index()
    elif request.method == 'POST':
        return types.create(request.json)


@app.route('/types/<int:type_id>', methods=['DELETE'])
def type_delete(type_id):
    return types.delete(type_id)


@app.route('/photos', methods=['GET', 'POST'])
def photos_route():
    if request.method == 'GET':
        return photos.index()
    elif request.method == 'POST':
        return photos.create(request.headers['authorization'], request.json)


@app.route('/photos/<int:type_id>', methods=['GET'])
def photo_type(type_id):
    return photos.list_by_type(type_id)


@app.route('/photos/<int:type_id>/<int:gender_id>', methods=['GET'])
def photo_type_gender(type_id, gender_id):
    return photos.list_by_type_and_gender(type_id, gender_id)


@app.route('/photos/<int:photo_id>', methods=['GET'])
def photo_detail(photo_id):
    return photos.detail(photo_id)


@app.route('/photos/<int:photo_id>', methods=['DELETE'])
def photo_delete(photo_id):
    return photos.delete(request.headers['authorization'], photo_id)


@app.route('/profile/<string:user_id>', methods=['GET'])
def profile(user_id):
    return photos.profile(user_id)
