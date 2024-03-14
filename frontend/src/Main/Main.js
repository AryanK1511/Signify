import { useAtom } from "jotai";
import { gestureAtom } from "../store";
import { useEffect } from "react";
import { HiOutlineLightBulb} from "react-icons/hi";
import { CiCloudMoon } from "react-icons/ci";
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
        <button onClick={()=>{navigate('/light')}} class="px-6 py-3 bg-gray-200 rounded-full shadow focus:outline-none focus:ring">
        <HiOutlineLightBulb size="8em"/>
          Light
        </button>

        <button onClick={()=>{navigate('/weather')}} class="px-6 py-3 bg-gray-200 rounded-full shadow focus:outline-none focus:ring">
        <CiCloudMoon size="8em"/>
          Weather
        </button>

        <button onClick={()=>{navigate('/quiz')}} class="px-6 py-3 bg-gray-200 rounded-full shadow focus:outline-none focus:ring">
        <MdOutlineQuiz size="8em"/>
          Quiz
        </button>
      </div>
    </div>
  );

  // return (
  //   <div
  //     className="
  //    flex
  //    flex-col
  //    justify-center
  //    items-center
  //    w-screen
  //    h-screen
  //    bg-[#190C40]
  //    text-white
  //    text-center
  //    "
  //   >
  //     <h1 className="leading-relaxed text-5xl">
  //       Hey {name}! <br /> How can I help you?
  //     </h1>
  //     <MainIcon
  //       imgUrl={"./images/Main/cloud.png"}
  //       imgAlt={"Weather Icon"}
  //       title="Weather"
  //       position={"top-16 left-16"}
  //     />
  //     <MainIcon
  //       imgUrl={"./images/Main/youtube.png"}
  //       imgAlt={"Youtube Icon"}
  //       title="Youtube"
  //       position={"top-16 right-16"}
  //     />
  //     <MainIcon
  //       imgUrl={"./images/Main/news.png"}
  //       imgAlt={"News Icon"}
  //       title="News"
  //       position={"bottom-16 left-16"}
  //     />
  //     <MainIcon
  //       imgUrl={"./images/Main/trex.png"}
  //       imgAlt={"T-Rex Icon"}
  //       title="T-Rex"
  //       position={"bottom-16 right-16"}
  //     />
  //   </div>
  // );
}
function MainIcon({ imgUrl, imgAlt, title, position }) {
  return (
    <div className={`absolute ${position}`}>
      <div className="w-[190px] h-[190px] rounded-full overflow-hidden bg-white bg-opacity-40 flex items-center justify-center">
        <img
          className="w-[150px] h-[150px] object-cover"
          src={imgUrl}
          alt={imgAlt}
        />
      </div>
      <p className="text-4xl p-6 font-bold">{title}</p>
    </div>
  );
}
export default Main;
