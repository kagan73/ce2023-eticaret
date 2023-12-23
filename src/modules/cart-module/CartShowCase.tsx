import { Button, ListGroup } from "react-bootstrap";
import { Product } from "../products-module/ProductType";
import { useState } from "react";
import { useCartContext } from "../Eticaret";

export interface CartType {
  total: number;
  products: Product[];
}

export const initialCart: CartType = {
  total: 100,
  products: [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      count: 1,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
    },
    {
      id: 1,
      title: "iPhone 9X",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      count: 1,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
    },
  ],
};

function CartShowCase() {
  const cartcontext = useCartContext();
  const cart = cartcontext.cart;

  return (
    <div>
      sepetteki ürünler
      <ListGroup>
        {cart.products.map((item) => (
          <ListGroup.Item>
            {item.title} - ({item.count})
          </ListGroup.Item>
        ))}
      </ListGroup>
      <div>TOPLAM : {cart.total}</div>
      <Button onClick={() => cartcontext.emptyCart()} variant="danger">
        Sepeti boşalt
      </Button>
    </div>
  );
}

export default CartShowCase;
