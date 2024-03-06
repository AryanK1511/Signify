from app import app
from flask import jsonify, request
import time
from ..utils import assistant

# ========== ROUTE TO HANDLE GESTURE RESULT ==========
@app.route('/api/gesture', methods=['POST'])
def handle_gesture():
    # Parse the incoming JSON data
    data = request.get_json()

    # You can now use 'data' which is a Python dictionary
    gesture_name = data.get('gesture', 'No gesture found')

    # Log the received gesture
    print(f"Received gesture: {gesture_name}")

    # Call the AI assistant API
    assistant.call_api(gesture_name)

    # Return a response to the caller
    return jsonify({'message': 'Gesture processed successfully', 'received_gesture': gesture_name}), 200