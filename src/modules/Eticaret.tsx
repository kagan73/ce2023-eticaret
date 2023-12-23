import { createContext, useContext, useState } from "react";
import CartShowCase, {
  CartType,
  initialCart,
} from "./cart-module/CartShowCase";
import ProductsShowCase from "./products-module/ProductsShowCase";
import CartContentCount from "./cart-module/CartContentCount";
import { Product } from "./products-module/ProductType";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import CheckOut from "./cart-module/CheckOut";

interface CartContextType {
  cart: CartType;
  addToCart: (newItem: Product, count: number) => void;
  emptyCart: () => void;
}
//@ts-ignore
const initialCartContext: CartContextType = {};
const CartContext = createContext(initialCartContext);

export function useCartContext() {
  return useContext(CartContext);
}

function Eticaret() {
  const [cart, setCart] = useState(initialCart);

  const addToCart = (newItem: Product, count: number) => {
    console.log(newItem.title + " eklenecek adet " + count);

    const newProduct = { ...newItem, count: count };
    const newProucts = [...cart.products, newProduct];
    const newTotal = newProucts.reduce((t, p) => p.price * p.count + t, 0);
    const newCart = { total: newTotal, products: newProucts };
    setCart(newCart);
  };

  function emptyCart() {
    const newCart = { total: 0, products: [] };
    setCart(newCart);
  }

  return (
    <div>
      <HashRouter>
        <CartContext.Provider value={{ cart, addToCart, emptyCart }}>
          <h1>Eticaret uygulaması</h1>
          <CartContentCount />
          <Link to={"/"}>ana sayfa</Link> -
          <Link to={"/sepet"}>sepeti göster</Link> -
          <Link to={"/odemeyap"}>ödeme yap</Link>
          <Routes>
            <Route path="/" element={<ProductsShowCase></ProductsShowCase>} />
            <Route path="/sepet" element={<CartShowCase />} />
            <Route path="/odemeyap" element={<CheckOut />} />
            <Route
              path="/thankyou"
              element={
                <h2>Ödemeniz alınmıştır. Ürünler gönderime hazırlanıyor</h2>
              }
            />
          </Routes>
        </CartContext.Provider>
      </HashRouter>
    </div>
  );
}

export default Eticaret;
