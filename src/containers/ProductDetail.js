import axios from "axios";
import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  removeselectProduct,
  selectProduct,
} from "../redux/action/productAction";

function ProductDetail() {
  const products = useSelector((state) => state.seleted);
  console.log(products);
  const id = useParams().id;
  const dispatch = useDispatch();
  const fetchseleted = async () => {
    try {
      var response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      dispatch(selectProduct(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("testrjking");
    fetchseleted();
    return () => {
      dispatch(removeselectProduct());
    };
  }, []);

  return (
    <>
      <div className="container">
        {Object.keys(products).length == 0 ? (
          <h1>loading.....</h1>
        ) : (
          <div className="card mt-5">
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <img
                    src={products.image}
                    style={{ width: "100%", height: "auto" }}
                  ></img>
                </div>
                <div className="col-6">
                  <h5 class="card-title">Title : {products.title}</h5>
                  <p class="card-text">Category : {products.category}</p>
                  <p class="card-text">Description : {products.description} </p>

                  <div className="text-center">
                    <button className="btn btn-primary">
                      Buy ${products.price}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProductDetail;
