import axios, { Axios } from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../redux/action/productAction";
import Product from "./Product";

function Productlist() {
  const products = useSelector((state) => state.allProduct.products);
  console.log("products : ", products);
  const dispatch = useDispatch();

  const fetchproduct = async () => {
    try {
      var response = await axios.get("https://fakestoreapi.com/products");
      dispatch(setProduct(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchproduct();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {products.map((obj) => (
          <Product arr={obj}></Product>
        ))}
      </div>
    </div>
  );
}

export default Productlist;
