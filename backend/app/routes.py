from flask import request, abort

from app import app

from app.controllers import user_controllers as users
from app.controllers import gender_controllers as genders


@app.route('/users', methods=['GET', 'POST', 'DELETE'])
def user():
    if request.method == 'GET':
        return users.index()
    elif request.method == 'POST':
        return users.create(request.json)
    elif request.method == 'DELETE':
        return users.delete(request.headers['authorization'], request.json)
    abort(405)


@app.route('/genders', methods=['GET', 'POST'])
def gender():
    if request.method == 'GET':
        return genders.index()
    elif request.method == 'POST':
        return genders.create(request.json)
    abort(405)
