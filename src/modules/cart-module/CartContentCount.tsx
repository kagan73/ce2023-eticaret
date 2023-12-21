import { useCartContext } from "../Eticaret";

function CartContentCount() {
  const cartcontext = useCartContext();
  const sayi = cartcontext.cart.products.length;

  return <div>sepette {sayi} adet ürün var</div>;
}

export default CartContentCount;
