import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  return (
    <header className=" z-20 absolute top-0 w-full p-1 pb-2 flex justify-center bg-black font-brand text-3xl text-white">
      <div
        className=" w-fit px-4  bg-gradient-to-r from-green-500 to-pink-400 hover:from-green-400 hover:to-pink-500 hover:scale-105 transition-all bg-clip-text text-transparent cursor-pointer"
        onClick={handleClick}
      >
        La Familia
      </div>
    </header>
  );
}
