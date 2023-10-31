import { useState, useContext, useEffect } from "preact/hooks";
import { StateContext } from "../StateProvider";

import { Euro, DollarSign, XOctagon, MinusCircle, PlusCircle } from "lucide-react";

const increment = 1;

export default function ItemProduct({ item }) {
  const { cartItems, setCartItems } = useContext(StateContext);
  const [cantJar, setCantJar] = useState(
    cartItems.filter((itemCart) => itemCart.id === item.id)[0].cant
  );
  const [valueItem, setValueItem] = useState(
    (cantJar / 5) *
      cartItems.filter((itemCart) => itemCart.id === item.id)[0].price
  );

  useEffect(() => {
    if (!cartItems.length) return;

    const updateItem = cartItems.filter(
      (itemCart) => itemCart.id === item.id
    )[0];
    updateItem.grams = cantJar;

    let newCartItems = cartItems.map((itemCart) =>
      itemCart.id !== item.id ? itemCart : updateItem
    );
    setCartItems([...newCartItems]);

    setValueItem(
      cantJar * cartItems.filter((itemCart) => itemCart.id === item.id)[0].price
    );
  }, [cantJar]);

  function handleRemoveItem(id) {
    const updatedItems = cartItems.filter((item) => item.id !== id);

    setCartItems(updatedItems);
  }

  function handleDecrease() {
    if (cantJar >= increment) {
      setCantJar(cantJar - increment);
    }
  }

  function handleIncrease() {
    if (cantJar < 1000) {
      setCantJar(cantJar + increment);
    }
  }
  return (
    <>
      <div className=" w-1/6 h-full flex items-start ">
        <img
          className=" w-4/5 h-auto select-none pointer-events-none "
          src={item?.imgType}
          alt="Tipo de mermelada"
        />
      </div>
      <div className=" w-4/6 flex flex-col items-start select-none cursor-default">
        <h2 className=" font-semibold text-xl">{item?.name}</h2>
        <p className=" font-normal italic">{item.sugar}% azucar agregada</p>
        <div className=" w-full flex">
          <div>
            <input
              className=" w-1/2 "
              type="number"
              name=""
              id=""
              value={cantJar}
            />
            <span>frascos</span>
          </div>
          <div className=" flex items-center justify-center gap-2 pointer-events-auto">
            <button
              className={`${
                cantJar === 0
                  ? "bg-sky-100 cursor-default pointer-events-none"
                  : "bg-gray-400 cursor-pointer"
              } w-12 h-8 flex items-center justify-center shadow-sm shadow-black  rounded-md `}
              onClick={() => handleDecrease(item.id)}
              type="button"
            >
              <MinusCircle />
            </button>

            <button
              className={`${
                cantJar === 1000
                  ? "bg-sky-100 cursor-default pointer-events-none"
                  : "bg-gray-400 cursor-pointer"
              } w-12 h-8 flex items-center justify-center shadow-sm shadow-black rounded-md `}
              onClick={() => handleIncrease(item.id)}
              type="button"
            >
              <PlusCircle />
            </button>
          </div>
        </div>
      </div>
      <div className=" w-1/6  ml-1 flex flex-col items-end gap-5 ">
        <div className=" flex items-center  cursor-default pointer-events-none">
          <DollarSign size={20} />
          <span className="leading-3 text-3xl">{valueItem}</span>
        </div>
        <button
          className=" w-fit p-1 flex items-center justify-center bg-gradient-to-br from-red-400 to-red-600  shadow-black shadow-sm active:scale-95 active:shadow-none  rounded-2xl"
          type="button"
          onClick={() => handleRemoveItem(item.id)}
        >
          <XOctagon size={25} />
        </button>
      </div>
    </>
  );
}
