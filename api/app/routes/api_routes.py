from app import app, socketio
from flask import jsonify, request
from ..utils import assistant

# ========== ROUTE TO HANDLE GESTURE RESULT ==========
@app.route('/api/gesture', methods=['POST'])
def handle_gesture():
    # Parse the incoming JSON data and get the gesture name
    data = request.get_json()
    gesture_name = data.get('gesture', 'No gesture found')

    # Log the received gesture
    print(f"Received gesture: {gesture_name}")

    # Call the AI assistant API which will process the gesture
    # assistant.call_api(gesture_name)
    socketio.emit('gesture_response', {'message': gesture_name})

    # Return a response to the caller
    return jsonify({'message': 'Gesture processed successfully', 'received_gesture': gesture_name}), 200
