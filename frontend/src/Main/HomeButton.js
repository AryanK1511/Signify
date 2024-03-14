import { Link } from "react-router-dom";
function HomeButton({ customStyle }) {
  return (
    <button
      className={`mt-5 px-4 py-2 text-4xl rounded-lg shadow hover:bg-blue-600 transition-colors duration-150 bg-[#31304D] text-[#fff] ${customStyle}`}
    >
      <Link to="/">Back to Home</Link>
    </button>
  );
}

export default HomeButton;
