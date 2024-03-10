import { useState } from "react";

function Lamp() {
  const [lampLight, setLampLight] = useState("OFF");
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
      >
        <img src="./images/Main/lamp/light1.png" alt="lamp" className="p-10" />
      </div>
      <p className="pt-10">{lampLight}</p>
    </div>
  );
}

export default Lamp;
