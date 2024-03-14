import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { gestureAtom } from "../store";
import { HiOutlineLightBulb } from "react-icons/hi";
import { CiCloudMoon } from "react-icons/ci";
import { MdOutlineQuiz } from "react-icons/md";
import { useNavigate } from "react-router-dom";

// ===== Main component =====
function Main() {
  // Navigate to the next question
  const navigate = useNavigate();

  // State to hold the data received from the server
  const [gesture, setGesture] = useAtom(gestureAtom);

  // State to manage the highlight
  const [highlight, setHighlight] = useState("");

  // Set up the WebSocket connection and event listeners
  useEffect(() => {
    if (gesture === null) return;

    if (
      gesture.toLowerCase() === "open_palm" ||
      gesture.toLowerCase() === "thumb_up" ||
      gesture.toLowerCase() === "thumb_down"
    ) {
      handleGesture();
    } else {
      if (gesture.toLowerCase() === "iloveyou") {
        navigate(`/${highlight}`);
      }
    }
  }, [gesture, highlight]);

  // Event handlers
  function handleGesture() {
    switch (gesture.toLowerCase()) {
      case "thumb_up":
        setHighlight("light");
        break;
      case "thumb_down":
        setHighlight("quiz");
        break;
      case "open_palm":
        setHighlight("weather");
        break;
      default:
        break;
    }

    setGesture(null); // Reset the gesture
  }

  return (
    <div class="flex bg-[#190C40] w-screen h-screen overflow-hidden">
      <div class="flex-1 flex items-center justify-center p-12">
        <div>
          <h1 class="text-8xl font-semibold pb-4 text-white">Hey Jeff!</h1>
          <p className="text-5xl text-white pt-5">
            What can I help you with today?
          </p>
        </div>
      </div>

      <div class="flex-1 flex flex-col items-center justify-center gap-10">
        <button
          onClick={() => navigate("/light")}
          class={`px-6 py-3 bg-gray-200 rounded-full shadow focus:outline-none focus:ring ${
            highlight === "light" ? "ring-8 ring-cyan-500" : ""
          }`}
        >
          <HiOutlineLightBulb size="8em" />
          Light
        </button>

        <button
          onClick={() => navigate("/weather")}
          class={`px-6 py-3 bg-gray-200 rounded-full shadow focus:outline-none focus:ring ${
            highlight === "weather" ? "ring-8 ring-cyan-500" : ""
          }`}
        >
          <CiCloudMoon size="8em" />
          Weather
        </button>

        <button
          onClick={() => navigate("/quiz")}
          class={`px-6 py-3 bg-gray-200 rounded-full shadow focus:outline-none focus:ring ${
            highlight === "quiz" ? "ring-8 ring-cyan-500" : ""
          }`}
        >
          <MdOutlineQuiz size="8em" />
          Quiz
        </button>
      </div>
    </div>
  );
}

export default Main;
