import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "preact/hooks";
import { StateContext } from "../StateProvider";

import { Home, BookText, List, User, ShoppingCart } from "lucide-react";

const navButtons = [
  {
    icon: <Home />,
    name: "Home",
    path: "/",
  },
  {
    icon: <List />,
    name: "Catálogo",
    path: "/catalogue",
  },
  {
    icon: <ShoppingCart />,
    name: "Carrito",
    path: "/cart",
  },
  {
    icon: <BookText />,
    name: "Blog",
    path: "/blog",
  },
  {
    icon: <User />,
    name: "Perfil",
    path: "/profile",
  },
];

export default function Navbar() {
  const { cartItems } = useContext(StateContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  function handleClick(path) {
    navigate(path);
  }
  return (
    <nav className=" fixed bottom-0 w-full p-3 flex items-center justify-around bg-blue-950 text-white">
      <ul className=" w-full flex items-center justify-evenly">
        {navButtons.map((button) => (
          <li
            className={` ${
              button.path === pathname ? " bg-sky-600 " : " bg-transparent "
            } relative p-1 flex items-center justify-center  rounded-md`}
            key={button.name}
          >
            <button onClick={() => handleClick(button.path)}>
              {button.icon}
            </button>
            {button.name === "Carrito" && cartItems.length !== 0 && (
              <span className=" absolute top-0 right-0 px-[0.15rem] text-xs bg-red-500 text-white rounded-full cursor-default pointer-events-none select-none">
                {cartItems.length}
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
