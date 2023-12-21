import { Button } from "react-bootstrap";
import { useCartContext } from "../Eticaret";
import { Product } from "./ProductType";
import { useState } from "react";

function AddToCartButton({ product }: { product: Product }) {
  const cartcontext = useCartContext();
  const [count, setCount] = useState(1);

  const artir = () => setCount(count + 1);

  const azalt = () => {
    return setCount(count - 1);
  };

  return (
    <div>
      <Button onClick={artir}>+</Button>
      {count}
      <Button onClick={azalt}>-</Button>
      <Button
        onClick={() => {
          cartcontext.addToCart(product, count);
        }}
        variant="primary"
        className="ms-4"
      >
        Sepete Ekle
      </Button>
    </div>
  );
}

export default AddToCartButton;
