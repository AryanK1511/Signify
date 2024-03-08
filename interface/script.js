// This file is used to handle the socket.io connection and display the response from the server
document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault()
    var socket = io.connect('http://localhost:8000');
    socket.on('gesture_response', function(data) {
        // Display the message somewhere in your web page
        document.getElementById('response').textContent = data.message;
    });
});