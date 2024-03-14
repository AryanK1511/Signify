import { useAtom } from "jotai";
import { gestureAtom } from "../store";
import { useEffect } from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { LuCloudSun } from "react-icons/lu";
import { MdOutlineQuiz } from "react-icons/md";
import { useNavigate } from "react-router-dom";

// ===== Main component =====
function Main({ name }) {
  const [gesture] = useAtom(gestureAtom);
  const navigate = useNavigate();

  useEffect(() => {
    handleGesture();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gesture]);

  function handleGesture() {
    switch (gesture) {
      case "gesture1":
        console.log("");
        break;
      case "gesture2":
        console.log("");
        break;
      default:
        console.log("");
    }
  }

  return (
    <div class="flex bg-[#190C40] w-screen h-screen">
      <div class="flex-1 flex items-center justify-center p-12">
        <div>
          <h1 class="text-8xl font-semibold pb-4 text-white">Hey Jeff!</h1>
          <p className="text-5xl text-white">What can I help you with today?</p>
        </div>
      </div>

      <div class="flex-1 flex flex-col items-center justify-center gap-10">
        <button
          onClick={() => {
            navigate("/light");
          }}
          class="px-6 py-3 bg-gray-200 rounded-full shadow focus:outline-none focus:ring"
        >
          <HiOutlineLightBulb size="8em" />
          Light
        </button>

        <button
          onClick={() => {
            navigate("/weather");
          }}
          class="px-6 py-3 bg-gray-200 rounded-full shadow focus:outline-none focus:ring"
        >
          <LuCloudSun style={{ padding: '8px' }} size="8em"/>
          Weather
        </button>

        <button
          onClick={() => {
            navigate("/quiz");
          }}
          class="px-6 py-3 bg-gray-200 rounded-full shadow focus:outline-none focus:ring"
        >
          <MdOutlineQuiz size="8em" />
          Quiz
        </button>
      </div>
    </div>
  );
}
export default Main;
