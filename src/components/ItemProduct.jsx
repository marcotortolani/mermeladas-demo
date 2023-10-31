import { useState, useContext, useEffect } from "preact/hooks";
import { StateContext } from "../StateProvider";
import cannabisImage from "../assets/img/brote.png";
import { Euro, XOctagon, MinusCircle, PlusCircle } from "lucide-react";

const catalogueItems = [
  {
    id: 1,
    imgType: cannabisImage,
    name: "Njam Njam",
    THC: "13",
    description:
      "Tempor minim nostrud voluptate ex duis deserunt sit ullamco nostrud sint quis.",
    price: "7",
  },
  {
    id: 2,
    imgType: cannabisImage,
    name: "Cookies",
    THC: "15",
    description:
      "Tempor minim nostrud voluptate ex duis deserunt sit ullamco nostrud sint quis.",
    price: "8",
  },
  {
    id: 3,
    imgType: cannabisImage,
    name: "Skittlez",
    THC: "17",
    description:
      "Tempor minim nostrud voluptate ex duis deserunt sit ullamco nostrud sint quis.",
    price: "6",
  },
  {
    id: 4,
    imgType: cannabisImage,
    name: "Pinky Jam",
    THC: "14",
    description:
      "Tempor minim nostrud voluptate ex duis deserunt sit ullamco nostrud sint quis.",
    price: "10",
  },
];

const incrementGrams = 5;

export default function ItemProduct({ item }) {
  const { cartItems, setCartItems } = useContext(StateContext);
  const [cantGrams, setCantGrams] = useState(
    cartItems.filter((itemCart) => itemCart.id === item.id)[0].grams
  );
  const [valueItem, setValueItem] = useState(
    (cantGrams / 5) *
      cartItems.filter((itemCart) => itemCart.id === item.id)[0].price
  );

  useEffect(() => {
    if (!cartItems.length) return;

    const updateItem = cartItems.filter(
      (itemCart) => itemCart.id === item.id
    )[0];
    updateItem.grams = cantGrams;

    let newCartItems = cartItems.map((itemCart) =>
      itemCart.id !== item.id ? itemCart : updateItem
    );
    setCartItems([...newCartItems]);

    setValueItem(
      (cantGrams / 5) *
        cartItems.filter((itemCart) => itemCart.id === item.id)[0].price
    );
  }, [cantGrams]);

  function handleRemoveItem(id) {
    const updatedItems = cartItems.filter((item) => item.id !== id);

    setCartItems(updatedItems);
  }

  function handleDecrease() {
    if (cantGrams >= incrementGrams) {
      setCantGrams(cantGrams - incrementGrams);
    }
  }

  function handleIncrease() {
    if (cantGrams < 1000) {
      setCantGrams(cantGrams + incrementGrams);
    }
  }
  return (
    <>
      <div className=" w-1/6 h-full flex items-start ">
        <img
          className=" w-auto h-1/3 select-none pointer-events-none "
          src={item?.imgType}
          alt="Tipo de especie"
        />
      </div>
      <div className=" w-4/6 flex flex-col items-start select-none cursor-default">
        <h2 className=" font-semibold text-xl">{item?.name}</h2>
        <p className=" font-normal italic">{item?.THC}% THC</p>
        <div className=" w-full flex">
          <div>
            <input
              className=" w-1/2 "
              type="number"
              name=""
              id=""
              value={cantGrams}
            />
            <span>grs</span>
          </div>
          <div className=" flex items-center justify-center gap-2 pointer-events-auto">
            <button
              className={`${
                cantGrams === 0
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
                cantGrams === 1000
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
          <Euro size={20} />
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
