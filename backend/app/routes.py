from flask import request

from app import app

from app.controllers import user_controllers as users


@app.route('/users', methods=['GET'])
def users_index():
    return users.index()


@app.route('/users', methods=['POST'])
def users_create():
    return users.create(request.json)


@app.route('/users', methods=['DELETE'])
def users_delete():
    return users.delete(request.headers['authorization'], request.json)
