from app import app, socketio
from flask import jsonify, request
from ..utils import change_lamp_state

# ========== ROUTE TO HANDLE GESTURE RESULT ==========
@app.route('/api/gesture', methods=['POST'])
def handle_gesture():
    # Parse the incoming JSON data and get the gesture name
    data = request.get_json()
    gesture_name = data.get('gesture', 'No gesture found')

    # Log the received gesture
    print(f"Received gesture: {gesture_name}")

    # Emit the gesture to the client
    socketio.emit('gesture_response', {'gesture': gesture_name})

    # Return a response to the caller
    return jsonify({'message': 'Gesture processed successfully', 'received_gesture': gesture_name}), 200

# ========== ROUTE TO HANDLE LAMP STATE ==========
@app.route('/api/lamp', methods=['POST'])
def handle_lamp():
    # Parse the incoming JSON data and get the lamp state
    data = request.get_json()
    lamp_state = data.get('lamp_state', 'No state found')

    # Log the received lamp state
    print(f"Received lamp state: {lamp_state}")

    # Call python function to change lamp state
    change_lamp_state.send_lamp_command(state=lamp_state)

    # Return a response to the caller
    return jsonify({'message': 'Lamp state processed successfully', 'received_state': lamp_state}), 200
