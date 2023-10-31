import { createContext } from "preact";
import useLocalStorage from "./hooks/useLocalStorage";

const StateContext = createContext();

const blogFavInitial = [];
const cartInitial = [];

const StateProvider = ({ children }) => {
  const [blogFavorites, setBlogFavorite] = useLocalStorage(
    "favorite-blogs",
    blogFavInitial
  );
  const [cartItems, setCartItems] = useLocalStorage(
    "shopping-cart",
    cartInitial
  );
  const values = {
    blogFavorites,
    setBlogFavorite,
    cartItems,
    setCartItems,
  };
  return (
    <StateContext.Provider value={values}>{children}</StateContext.Provider>
  );
};

export { StateContext, StateProvider };
