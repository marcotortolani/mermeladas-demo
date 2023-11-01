import { useContext } from "preact/hooks";
import { StateContext } from "../StateProvider";

import { DollarSign, ListPlus, ListX } from "lucide-react";

export default function ItemCatalogue({ item }) {
  const { cartItems, setCartItems } = useContext(StateContext);

  const itemOnCart = cartItems.some((cartItem) => cartItem.id === item.id);

  function handleAddItem({ id, price }) {
    if (cartItems.length !== 0 && cartItems.some((item) => item.id === id)) {
      return;
    }
    // add to cart
    const newItem = { id, cant: 1, price };
    setCartItems([...cartItems, newItem]);
  }

  function handleRemoveItem(id) {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  }
  return (
    <li
      className=" w-full h-fit p-4 bg-gradient-to-br from-gray-300 to-gray-500 shadow-inner shadow-gray-200 flex items-center justify-between gap-4 rounded-xl"
      key={item?.id}
    >
      <div className=" w-1/6 h-full flex items-start ">
        <img
          className=" w-auto h-2/4 select-none pointer-events-none "
          src={item?.imgType}
          alt="Tipo de especie"
        />
      </div>
      <div className=" w-4/6 select-none cursor-default pointer-events-none">
        <h2 className=" font-semibold text-2xl">{item?.name}</h2>
        <p className=" font-normal italic">{item?.sugar}% Azucar agregada</p>
        <p className=" text-xs">{item?.description}</p>
      </div>
      <div className=" w-1/6  ml-1 flex flex-col items-end gap-5 ">
        <div className=" flex items-center  cursor-default pointer-events-none">
          <DollarSign size={20} />
          <span className="leading-3 text-3xl">{item?.price}</span>
        </div>

        <button
          className={` ${
            itemOnCart
              ? " from-red-300 to-red-500 "
              : " from-sky-400 to-sky-600"
          } w-fit p-2 flex items-center justify-center  bg-gradient-to-br  shadow-black shadow-sm active:scale-95 active:shadow-none  rounded-xl`}
          type="button"
          onClick={
            itemOnCart
              ? () => handleRemoveItem(item.id)
              : () => handleAddItem({ id: item.id, price: item.price })
          }
        >
          {itemOnCart ? <ListX size={25} /> : <ListPlus size={25} />}
        </button>
      </div>
    </li>
  );
}
