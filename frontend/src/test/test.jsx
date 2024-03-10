import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io("http://localhost:8000");

function App() {
  const [gestureData, setGestureData] = useState({});

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to WebSocket server");
    });

    socket.on("gesture_response", (data) => {
      console.log("Received data:", data);
      setGestureData(data); // Update state to reflect new data
    });

    // Cleanup on component unmount
    return () => {
      socket.off("connect");
      socket.off("gesture_response");
    };
  }, []);

  return (
    <div className="App">
    </div>
  );
}

export default App;
