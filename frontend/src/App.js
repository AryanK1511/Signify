import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
// import Main from "./Main";
import Weather from "./Weather/Weather";
import Lamp from './Lamp/lamp';
import { useAtom } from 'jotai';
import { gestureAtom } from './store';
// import Quiz from "./quiz/Quiz";

// Connect to the server using a WebSocket connection
const socket = io("http://localhost:8000");

function App() {
  // State to hold the data received from the server
  // Use the gestureAtom
  const [, setGesture] = useAtom(gestureAtom);

  // Set up the WebSocket connection and event listeners
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to WebSocket server");
    });

    // Listen for incoming data
    socket.on("gesture_response", (data) => {
      console.log("Received data:", data);
      setGesture(data); // Update state to reflect new data
    });

    // Cleanup on component unmount
    return () => {
      socket.off("connect");
      socket.off("gesture_response");
    };
  }, []);

  return (
    <div className="App">
      <Lamp />
    </div>
  );
}

export default App;
