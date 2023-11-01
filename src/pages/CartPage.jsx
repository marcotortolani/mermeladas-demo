import { useContext } from "preact/hooks";
import { StateContext } from "../StateProvider";

import emptyBox from "../assets/img/empty-box.png";

import ItemCart from "../components/ItemCart";

import { catalogueItems} from "../data/products"
import { DollarSign } from "lucide-react";


const increment = 1;

export default function CartPage() {
  const { cartItems, setCartItems } = useContext(StateContext);

  const itemsToShow = cartItems.map((cartItem) => {
    const foundItem = catalogueItems.find((item) => item.id === cartItem.id);
    return foundItem ? { ...foundItem } : null;
  });

  const totalCart = cartItems.reduce(function(acumulador, objeto) {
    return acumulador + (objeto.cant * objeto.price);
  }, 0);


  return (
    <div className="  w-full h-full px-4 py-2 flex flex-col items-center justify-start gap-2 ">
      {cartItems.length !== 0 ? (
        <>
          <ul className=" w-full h-fit  py-4 mt-20 flex flex-col items-center justify-start gap-3  ">
            {itemsToShow.map((item) => (
              <li
                className=" w-full h-fit min-h-[120px] p-4 bg-gradient-to-r from-sky-100 to-sky-300 shadow-inner shadow-gray-200 flex items-start gap-2 rounded-xl"
                key={item.id}
              >
                <ItemCart item={item} />
              </li>
            ))}
          </ul>
          <div className="  w-full h-fit p-4 min-h-20 flex items-center justify-between bg-gray-200 rounded-2xl">
            <span className=" font-medium text-xl">Total:</span>
            <div className=" flex items-center  cursor-default pointer-events-none">
              <DollarSign size={20} />
              <span className="leading-3 text-3xl">{totalCart}</span>
            </div>
          </div>
          <div className=" w-full py-10 mb-20 flex items-center justify-center ">
            <button
              type="button"
              className="inline-block rounded-full bg-success px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-white bg-green-500 shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
            >
              Hacer pedido
            </button>
          </div>
        </>
      ) : (
        <div className=" w-full h-3/5 px-2 flex flex-col items-center justify-center gap-6 font-title text-xl">
          <img className="w-1/3" src={emptyBox} alt="Empty box icon" />
          No hay elementos en el carrito
        </div>
      )}
    </div>
  );
}
