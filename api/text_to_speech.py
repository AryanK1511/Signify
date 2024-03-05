from gtts import gTTS
import os
import pygame

def text_to_speech(text):
    # Convert the text to speech
    tts = gTTS(text=text, lang='en')
    filename = "temp_audio.mp3"  # Temporary file to store the audio
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
    
    # Optionally, remove the temporary file after playing
    os.remove(filename)

if __name__ == "__main__":
    # Input text
    text = input("Enter the text you want to convert to speech: ")
    # Call the function
    text_to_speech(text)

