from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = 'super-secret'
app.config['ADMIN'] = 'admin'

from app import routes