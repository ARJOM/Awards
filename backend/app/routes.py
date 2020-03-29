from flask import request, abort

from app import app

from app.controllers import user_controllers as users
from app.controllers import gender_controllers as genders
from app.controllers import types_controllers as types


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
