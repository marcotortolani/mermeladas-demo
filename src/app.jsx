import { useContext } from "preact/hooks";
import { StateProvider } from "./StateProvider";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/UserProfile";
import Catalogue from "./pages/Catalogue";
import Blog from "./pages/Blog";
import CartPage from "./pages/CartPage";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

export function App() {
  return (
    <main className=" w-screen min-h-screen overflow-y-scroll flex flex-col items-center justify-center bg-white text-black font-text">
      <StateProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Navbar />
      </StateProvider>
    </main>
  );
}
