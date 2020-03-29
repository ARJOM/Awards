from flask import request, abort

from app import app

from app.controllers import user_controllers as users


@app.route('/users', methods=['GET', 'POST', 'DELETE'])
def users():
    if request.method == 'GET':
        return users.index()
    elif request.method == 'POST':
        return users.create(request.json)
    elif request.method == 'DELETE':
        return users.delete(request.headers['authorization'], request.json)
    abort(405)
