import { useContext } from "preact/hooks";
import { StateContext } from "../StateProvider";


import straberryIcon from "../assets/img/strawberry.png"
import blueberryIcon from "../assets/img/blueberry.png"
import orangeIcon from "../assets/img/orange2.png"
import peachIcon from "../assets/img/peach.png"
import grapesIcon from "../assets/img/grapes.png"



import { Euro, DollarSign, ListPlus } from "lucide-react";

const catalogueItems = [
  {
    id: 1,
    imgType: blueberryIcon,
    name: "Arándano",
    sugar: "7",
    description:
      "Tempor minim nostrud voluptate ex duis deserunt sit ullamco nostrud sint quis.",
    price: 7,
  },
  {
    id: 2,
    imgType: straberryIcon,
    name: "Frutilla",
    sugar: "10",
    description:
      "Tempor minim nostrud voluptate ex duis deserunt sit ullamco nostrud sint quis.",
    price: 8,
  },
  {
    id: 3,
    imgType: orangeIcon,
    name: "Naranja",
    sugar: "20",
    description:
      "Tempor minim nostrud voluptate ex duis deserunt sit ullamco nostrud sint quis.",
    price: 6,
  },
  {
    id: 4,
    imgType: grapesIcon,
    name: "Uva Malbec",
    sugar: "12",
    description:
      "Tempor minim nostrud voluptate ex duis deserunt sit ullamco nostrud sint quis.",
    price: 10,
  },
  {
    id: 5,
    imgType: peachIcon,
    name: "Durazno",
    sugar: "15",
    description:
      "Tempor minim nostrud voluptate ex duis deserunt sit ullamco nostrud sint quis.",
    price: 10,
  },
];

export default function Catalogue() {
  const { cartItems, setCartItems } = useContext(StateContext);

  function handleAddItem({ id, price }) {
    if (cartItems.length !== 0 && cartItems.some((item) => item.id === id)) {
      return;
    }

    // add to cart
    const newItem = { id, cant: 1, price };
    setCartItems([...cartItems, newItem]);
  }

  return (
    <div className=" relative top-14 w-full h-full px-4 py-2  flex flex-col items-center justify-center gap-3 ">
      <ul className=" w-full h-full min-h-screen pt-4 flex flex-col items-center justify-start gap-3 ">
        {catalogueItems.map((item) => (
          <li
            className=" w-full h-fit p-4 bg-gradient-to-br from-gray-300 to-gray-500 shadow-inner shadow-gray-200 flex items-center gap-2 rounded-xl"
            key={item.id}
          >
            <div className=" w-1/6 h-full flex items-start ">
              <img
                className=" w-auto h-2/4 select-none pointer-events-none "
                src={item.imgType}
                alt="Tipo de especie"
              />
            </div>
            <div className=" w-4/6 select-none cursor-default pointer-events-none">
              <h2 className=" font-semibold text-xl">{item.name}</h2>
              <p className=" font-normal italic">{item.sugar}% Azucar agregada</p>
              <p className=" text-xs">{item.description}</p>
            </div>
            <div className=" w-1/6  ml-1 flex flex-col items-end gap-5 ">
              <div className=" flex items-center  cursor-default pointer-events-none">
                <DollarSign size={20} />
                <span className="leading-3 text-3xl">{item.price}</span>
              </div>
              <button
                className=" w-fit p-2 flex items-center justify-center bg-gradient-to-br from-sky-400 to-sky-600  shadow-black shadow-sm active:scale-95 active:shadow-none  rounded-xl"
                type="button"
                onClick={() =>
                  handleAddItem({ id: item.id, price: item.price })
                }
              >
                <ListPlus size={25} />
              </button>
            </div>
          </li>
        ))}
      </ul>
  <div className=" w-full h-20 bg-transparent content-normal" />
    </div>
  );
}
