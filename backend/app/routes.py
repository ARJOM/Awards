from app import app

from app.controllers import user_controllers


@app.route('/')
def index():
    return user_controllers.hello_world()
