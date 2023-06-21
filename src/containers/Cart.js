import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartBody from "./CartBody";
import { deletetocart } from "../redux/action/productAction";

function Cart() {
  const [products, setproducts] = useState([]);
  const product = useSelector((state) => state.cart.products);
  useEffect(() => {
    setproducts(product);
  }, []);

  const dispatch = useDispatch();
  const handledeletecart = (id) => {
    var newarr = products.filter((obj) => {
      return obj.id !== id;
    });
    setproducts([...newarr]);
    dispatch(deletetocart(id));
  };
  return (
    <div className="container">
      <div className="card mt-5">
        <div className="card-header">
          <h3>Cart List</h3>
        </div>
        <div className="card-body">
          <ol class="list-group list-group-numbered">
            {products.map((obj, index) => {
              return (
                <CartBody
                  product={obj}
                  handledeletecart={handledeletecart}
                ></CartBody>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Cart;
