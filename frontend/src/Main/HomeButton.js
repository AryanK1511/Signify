import { Link } from "react-router-dom";
function HomeButton({ customStyle }) {
  return (
    <button
      className={`
    mt-5 px-4 py-2 text-4xl rounded-lg shadow 
    bg-[#00BCD4] text-[#fff]
    hover:bg-[#fff] hover:text-[#00BCD4] hover:scale-105
    transition ease-in-out delay-100
    ${customStyle}`}
    >
      <Link to="/">Back to Home</Link>
    </button>
  );
}

export default HomeButton;
