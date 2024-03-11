from flask import Flask
from flask_cors import CORS
from flask_socketio import SocketIO

# Create a Flask app
app = Flask(__name__)
# Create a Web Socket to send gestures in real time
socketio = SocketIO(app, cors_allowed_origins="*")

# This will enable CORS for all routes and domains
CORS(app, supports_credentials=True) 

# Import the routes
from app.routes import api_routes