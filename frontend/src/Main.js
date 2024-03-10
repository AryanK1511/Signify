import { useAtom } from "jotai";
import { gestureAtom } from "./store";
import { useEffect } from "react";

function Main({ name }) {
  const [gesture] = useAtom(gestureAtom);

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
     "
    >
      <h1 className="leading-relaxed text-5xl">
        Hey {name}! <br /> How can I help you?
      </h1>
      <MainIcon
        imgUrl={"./images/Main/cloud.png"}
        imgAlt={"Weather Icon"}
        title="Weather"
        position={"top-16 left-16"}
      />
      <MainIcon
        imgUrl={"./images/Main/youtube.png"}
        imgAlt={"Youtube Icon"}
        title="Youtube"
        position={"top-16 right-16"}
      />
      <MainIcon
        imgUrl={"./images/Main/news.png"}
        imgAlt={"News Icon"}
        title="News"
        position={"bottom-16 left-16"}
      />
      <MainIcon
        imgUrl={"./images/Main/trex.png"}
        imgAlt={"T-Rex Icon"}
        title="T-Rex"
        position={"bottom-16 right-16"}
      />
    </div>
  );
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
