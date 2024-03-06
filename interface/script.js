document.addEventListener('DOMContentLoaded', (event) => {
    var socket = io.connect('http://localhost:8000');
    socket.on('gesture_response', function(data) {
        // Display the message somewhere in your web page
        document.getElementById('response').textContent = data.message;
    });
});