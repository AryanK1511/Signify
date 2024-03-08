from app import socketio
from .text_to_speech import tts

# ===== DATA DICTIONARY =====
GESTURE_LABELS = {
    'closed_fist': 'This is a closed fist gesture.',
    'open_palm': 'I live in Toronto, Canada. What is the time right now?',
    'pointing_up': 'I live in Toronto, Canada. What ',
    'thumb_down': 'This is a thumb down gesture.',
    'thumb_up': 'This is a thumb up gesture.',
    'victory': 'This is a victory gesture.',
    'iloveyou': 'This is an I love you gesture.'
}

# ===== FUNCTION TO CALL THE CHATGPT API FOR GETTING A RESPONSE =====
def call_api(gesture_name):
    print(gesture_name)
    
    # Call the text_to_speech function
    # tts(GESTURE_LABELS[gesture_name.lower()])