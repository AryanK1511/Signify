import os
from gtts import gTTS
import pygame

# ===== FUNCTION TO CONVERT TEXT TO SPEECH =====
def tts(text):
    # Convert the text to speech using Google Text-to-Speech
    tts = gTTS(text=text, lang='en')
    # Save the audio to a file
    filename = "assistant_audio.mp3" 
    tts.save(filename)
    
    # Initialize pygame mixer
    pygame.mixer.init()

    # Load the audio file
    pygame.mixer.music.load(filename)

    # Play the audio file
    pygame.mixer.music.play()

    # Wait for the audio file to finish playing
    while pygame.mixer.music.get_busy():
        pygame.time.Clock().tick(10)
    
    # Remove the temporary file after playing
    os.remove(filename)
