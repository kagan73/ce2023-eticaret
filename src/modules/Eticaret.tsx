import { createContext, useContext, useState } from "react";
import CartShowCase, {
  CartType,
  initialCart,
} from "./cart-module/CartShowCase";
import ProductsShowCase from "./products-module/ProductsShowCase";
import CartContentCount from "./cart-module/CartContentCount";
import { Product } from "./products-module/ProductType";

interface CartContextType {
  cart: CartType;
  addToCart: (newItem: Product, count: number) => void;
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
    const newCart = { total: 200, products: newProucts };
    setCart(newCart);
  };

  return (
    <div>
      <CartContext.Provider value={{ cart, addToCart }}>
        <h1>Eticaret sayfam</h1>
        <CartContentCount />
        <h2>Sepetteki ürünler</h2>
        <CartShowCase />
        <h2>Size özel ürünler</h2>
        <ProductsShowCase></ProductsShowCase>
        <h2>Ödeme bilgileri</h2>
        <h2>Ödeme işlem sonucu</h2>
      </CartContext.Provider>
    </div>
  );
}

export default Eticaret;
