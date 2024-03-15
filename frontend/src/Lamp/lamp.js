import React, { useState, useEffect } from "react";
import { changeLampState } from "./lamp_operations";
import { useAtom } from "jotai";
import { gestureAtom } from "../store";
import HomeButton from "../Main/HomeButton";

// ===== Lamp component =====
const Lamp = () => {
  // State to hold the data received from the server
  const [gesture] = useAtom(gestureAtom);
  const [lampLight, setLampLight] = useState("OFF");

  // Set up the WebSocket connection and event listeners
  useEffect(() => {
    if (gesture !== null) {
      if (gesture.toLowerCase() === "thumb_up") {
        setLampLight("ON");
      } else {
        setLampLight("OFF");
      }
      changeLampState(gesture);
    }
  }, [gesture]);

  // Handle lamp click

  function handleLampClick() {
    if (lampLight === "OFF") {
      setLampLight("ON");
    } else {
      setLampLight("OFF");
    }
  }

  // Create a use effect such that whenever the lamplight changes, I call a python script
  return (
    <div
      className="
    flex
     flex-col
     justify-center
     items-center
     w-screen
     h-screen
     bg-[#190C40]
     text-white
     text-center
     text-5xl
      font-medium
      pt-10
      "
    >
      <div
        className="
      w-[250px]
      h-[250px]
      flex
      justify-center
      items-center
      bg-[#D9D9D9]
      rounded-full
      "
        onClick={() => handleLampClick()}
      >
        <img
          src={`./images/Main/lamp/light${lampLight === "ON" ? "2" : "1"}.png`}
          alt="lamp"
          className="p-10"
        />
      </div>
      <p className="pt-10">{lampLight}</p>

      <HomeButton customStyle={"mt-24"} />
    </div>
  );
};

export default Lamp;
