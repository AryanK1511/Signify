from app import app
from flask import jsonify

# ========== ROUTE TO HANDLE GESTURE RESULT ==========
@app.route('/api/gesture', methods=['POST'])
def handle_gesture():
    return jsonify({'message': 'API runs successfully'}), 201