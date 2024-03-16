# Signify

**Signify** is **Alexa for the deaf and mute**. 

**Signify** is an innovative home assistant platform designed to enhance accessibility through gesture recognition. It allows users to perform various tasks such as controlling lights, checking weather updates, and playing quizzes without the need for direct screen interaction.

## [Link to Youtube Demo](https://youtu.be/h1M6SkJgcqs)

<div align="center">
    <img src="./assets/logo.png" alt="Signify Logo" width="400">
</div>

## How to use

### Home Page

- **`Thumbs Up` Gesture:** Select the page to control lights using gestures.
- **`Thumbs Down` Gesture:** Select the page to play the quiz game using gestures.
- **`Thumbs Up` Gesture:** Select the page to check the weather in your area.
- **`Rock and Roll Sign`**: Got to the selected page.

### Light Control Page

- **`Thumbs Up` Gesture:** Turn the light `ON` (`OFF` by default).
- **`Thumbs Down` Gesture:** Turn the light `OFF`.
- **`Closed Fist` Gesture:** Go back to the home page.

### Quiz Page

- **`Thumbs Up` Gesture:** Select the `true` option.
- **`Thumbs Down` Gesture:** Select the `false` option.
- **`Open Palm` Gesture:** Go to the next question if you have answered a question already.
- **`Closed Fist` Gesture:** Go back to the home page.

### Weather Page

- **`Closed Fist` Gesture:** Go back to the home page.

## Models Overview

### Gesture Recognition

Utilizing MediaPipe for gesture recognition, Signify employs a two-part model approach:

1. **Hand Landmark Model Bundle:**
- Detects hand presence and geometry.
- Utilizes a combination of palm detection and hand landmarks detection models.
- Trained on diverse datasets including real-world images and synthetic models.
2. **Gesture Classification Model Bundle:**
- Identifies specific gestures from hand geometry.
- Supports common gestures like Closed Fist, Open Palm, Thumbs Up, etc.

### Processing Flow

- Frames are captured every 1.3 seconds and sent to the gesture recognition model.
- The first model component assesses hand presence, while the second classifies the gesture.

## Implementation Details

### Backend
- A Flask backend processes recognized gestures.
- Includes functionalities like light control based on the gesture received.

### Frontend
- React-based frontend displays real-time gesture updates via WebSocket.
- Implements logic to respond to different gestures for controlling various functions.

### Task Benchmarks
Pre-trained models offer efficient processing with average latencies of 16.76ms (CPU) and 20.87ms (GPU) on Pixel 6 devices.

## Running the project locally

### Running the Computer Vision Notebook

Run the operations below using your terminal. The directory should be the root directory of the `Signify` project.

1. Download [Anaconda](https://www.anaconda.com/download).

2. Create a conda environment with Python 3.9 as mediapipe works perfectly for this version.

    ```bash
    conda create -n signify_environment python=3.9
    ```

3. Activate the conda environment

    ```bash
    conda activate signify_environment
    ```

4. Download the conda packages

    ```bash
    conda install -r conda_requirements.txt
    ```

5. Download the python packages using pip

    ```bash
    pip install -r pip_requirements.txt
    ```

6. Create a new kernel with `signify_environment`.

    ```bash
    conda install ipykernel 
    python -m ipykernel install --user --name=signify --display-name "signify_environment"
    ```

7. Run jupyter lab

    ```bash
    jupyterlab
    ```

8. Once you open the notebook make sure the top right corner where it shows the kernel says `signify_environment`.

    ![Kernel Example](./assets/kernel.png)

9. Run all the cells using `shift` + `enter` until the open CV code starts running and you see the camera turn on.

10. Press `q` after selecting the camera window if you want to stop code execution and quit the camera.

### Running the backend

1. Navigate to the `api` directory in the `Signify` project directory.

2. Once you are in the `api` directory, create a python3 virtual environment to seperate the dependencies that you install for this project from the rest of your system.

    ```bash
    python3 -m venv venv
    ```

3. Activate the virtual environment.

    ```bash
    source venv/bin/activate
    ```

4. Install all python dependencies using pip.
    ```bash
    pip install -r requirements.txt
    ```

    If there are any errors in this step then install the packages manually by referencing the code.

5. Start the backend flask server.

    ```bash
    python run.py
    ```

### Running the frontend

1. Navigate to the `frontend` directory within the `Signify` project directory.

2. Install the packages using npm.

    ```bash
    npm i
    ```

3. Run the react app.

    ```bash
    npm start
    ```

## Tools used

- [Python](https://docs.python.org/3/)
- [MediaPipe](https://google.github.io/mediapipe/)
- [TensorFlow](https://www.tensorflow.org/overview)
- [Anaconda](https://docs.anaconda.com/)
- [Flask](https://flask.palletsprojects.com/)
- [Jupyter Notebook](https://jupyter-notebook.readthedocs.io/en/stable/)
- [OpenCV](https://docs.opencv.org/master/)

## Resources

- [Gesture recognition guide for Python](https://developers.google.com/mediapipe/solutions/vision/gesture_recognizer/python)
- [Hand gesture recognition model customization guide](https://developers.google.com/mediapipe/solutions/customization/gesture_recognizer)
- [Udemy complete AI and ML Bootcamp by ZTM](https://www.udemy.com/share/102vAM3@uzvhf-FWASuZvecZ9RCJyF9n25CqgKAtCSlxnOch3PB_A_F7ZEdAXJ9b6V1QUXEo/)