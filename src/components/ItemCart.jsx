import { useState, useContext, useEffect } from "preact/hooks";
import { StateContext } from "../StateProvider";

import {
  DollarSign,
  XOctagon,
  MinusCircle,
  PlusCircle,
  ChevronDown,
  ChevronUp,
  Trash2,
  ListX
} from "lucide-react";

const increment = 1;

export default function ItemCart({ item }) {
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
      <div className=" w-1/6 h-full mr-3 flex  flex-col items-center justify-between gap-8 ">
        <img
          className=" w-4/5 h-auto select-none pointer-events-none "
          src={item?.imgType}
          alt="Tipo de mermelada"
        />
        <button
          className="  w-fit p-1 flex items-center justify-center bg-gradient-to-br from-red-200 to-red-400  shadow-black shadow-sm active:scale-95 active:shadow-none  rounded-xl"
          type="button"
          onClick={() => handleRemoveItem(item.id)}
        >
          <ListX size={25} />
        </button>
      </div>
      <div className=" w-4/6 flex flex-col items-start justify-center gap-4 select-none cursor-default">
        <h2 className=" font-semibold text-xl ">{item?.name}</h2>
        <p className=" font-normal text-sm -mt-4 italic leading-3">
          {item.sugar}% azucar agregada
        </p>
        <div className=" w-full flex justify-between gap-3">
          <div className=" flex items-center gap-1">
            <input
              className=" w-[40px] text-center "
              type="number"
              name=""
              id=""
              value={cantJar}
            />
            <span>{cantJar > 1 ? "frascos" : "frasco"}</span>
          </div>
          <div className="  bg-slate-400 shadow-sm shadow-black flex items-center justify-center gap-1 pointer-events-auto rounded-md">
            <button
              className={`${
                cantJar === 0
                  ? "bg-sky-100 cursor-default pointer-events-none"
                  : "bg-gray-400 cursor-pointer"
              } px-4 py-1 flex items-center justify-center  rounded-md `}
              onClick={() => handleDecrease(item.id)}
              type="button"
            >
              <ChevronDown />
            </button>
              <span className=" w-[0.1rem] h-full bg-white" />
            <button
              className={`${
                cantJar === 1000
                  ? "bg-sky-100 cursor-default pointer-events-none"
                  : "bg-gray-400 cursor-pointer"
              } px-4 py-1 flex items-center justify-center rounded-md `}
              onClick={() => handleIncrease(item.id)}
              type="button"
            >
              <ChevronUp />
            </button>
          </div>
        </div>
      </div>
      <div className="  w-1/6 h-full  ml-1 flex flex-col items-end justify-between gap-8 ">
        <div className="  flex items-center  cursor-default pointer-events-none">
          <DollarSign size={20} />
          <span className="leading-3 text-3xl">{valueItem}</span>
        </div>
      </div>
    </>
  );
}
