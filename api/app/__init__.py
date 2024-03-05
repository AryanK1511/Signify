from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

# Create a Flask app
app = Flask(__name__)

# This will enable CORS for all routes and domains
CORS(app, supports_credentials=True) 

# Import the routes
from app.routes import api_routes