import jwt

from app import app


def token_data(token):
    try:
        return jwt.decode(token, app.config['SECRET_KEY'])
    except:
        return None


def is_valid(token):
    data = token_data(token)
    if data is None:
        return False
    return True


def is_staff(token):
    token_info = token_data(token)

    if token_info is not None:
        user_id = token_info.get('username')
        if user_id == app.config['ADMIN']:
            return True

    return False
