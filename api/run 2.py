from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

from app import app, socketio

# Run the app
if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=8000, debug=True)