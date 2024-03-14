import React, { useEffect } from "react";
import io from "socket.io-client";
import Lamp from "./Lamp/Lamp";
import Main from "./Main/Main";
import Weather from "./Weather/Weather";
import Quiz from "./Quiz/Quiz";
import { useAtom } from "jotai";
import { gestureAtom } from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Connect to the server using a WebSocket connection
const socket = io("http://localhost:8000");

// ===== Main App component =====
function App() {
  // State to hold the data received from the server
  const [, setGesture] = useAtom(gestureAtom);

  // Set up the WebSocket connection and event listeners
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to WebSocket server");
    });

    // Listen for incoming data
    socket.on("gesture_response", (data) => {
      console.log("Received data:", data);
      setGesture(data.gesture); // Update state to reflect newer data
    });

    // Cleanup on component unmount
    return () => {
      socket.off("connect");
      socket.off("gesture_response");
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/light" element={<Lamp />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
