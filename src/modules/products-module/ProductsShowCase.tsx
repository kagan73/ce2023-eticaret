import { useEffect, useState } from "react";
import { Badge, Button, Card, Col, Row, Stack } from "react-bootstrap";
import { Product } from "./ProductType";
import { useCartContext } from "../Eticaret";
import AddToCartButton from "./AddToCartButton";

function ProductsShowCase() {
  const [products, setProducts] = useState<Product[]>([]);
  const cartcontext = useCartContext();

  const loadProduct = () => {
    fetch("https://dummyjson.com/products")
      .then((veri) => veri.json())
      .then((json) => {
        setProducts(json.products);
      });
  };

  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <Row xs={1} sm={2} md={3} className="g-1">
      {products.map((product) => (
        <Col>
          <Card className="h-100">
            <Card.Img
              variant="top"
              height={180}
              src={product.thumbnail}
              className={"mt-1 object-fit-contain"}
            />
            <Card.Body>
              <Card.Subtitle className="py-1">
                <Stack direction="horizontal">
                  <div className="ms-auto"></div>
                  <del className="text-danger">
                    $ {product.price.toFixed(2)}
                  </del>
                  <small className="mx-1">
                    <Badge pill bg="warning">
                      % {product.discountPercentage}
                    </Badge>
                  </small>
                  <h3 className="text-success">$ {}</h3>
                </Stack>
              </Card.Subtitle>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text className="">{product.description}</Card.Text>
              <AddToCartButton product={product} />

              <Card.Link className="ms-2" href="#">
                İncele
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ProductsShowCase;
