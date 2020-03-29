from flask import request

from app import app

from app.controllers import user_controllers as users


@app.route('/users', methods=['GET'])
def index():
    return users.index()


@app.route('/users', methods=['POST'])
def create():
    return users.create(request.json)
