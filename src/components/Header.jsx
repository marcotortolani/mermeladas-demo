import { useNavigate, useLocation } from "react-router-dom";

import grannyIcon from "../assets/granny.png";

export default function Header() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  return (
    <header className=" z-20 absolute top-0 w-full h-16 p-1 pb-2 flex items-center justify-center bg-black font-brand text-3xl text-white">
      <div className=" h-full p-2">
        <img className=" h-full" src={grannyIcon} alt="La Nonna Icon" />
      </div>
      <div
        className=" w-fit px-4  bg-gradient-to-r from-pink-400 to-pink-600 hover:from-green-400 hover:to-pink-500 hover:scale-105 transition-all bg-clip-text text-transparent cursor-pointer"
        onClick={handleClick}
      >
        La Nonna
      </div>
    </header>
  );
}
