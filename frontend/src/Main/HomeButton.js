import { Link } from "react-router-dom";
function HomeButton({ customStyle }) {
  return (
    <button
      className={`
    mt-5 px-4 py-2 text-4xl rounded-lg shadow 
    bg-[#31304D] text-[#fff]
    hover:bg-blue-600 hover:scale-105
    transition ease-in-out delay-100
    ${customStyle}`}
    >
      <Link to="/">Back to Home</Link>
    </button>
  );
}

export default HomeButton;
