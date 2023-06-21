import axios from "axios";
import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  addtocart,
  removeselectProduct,
  selectProduct,
} from "../redux/action/productAction";

function ProductDetail() {
  const products = useSelector((state) => state.seleted);
  const [msg, setmsg] = useState(false);
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
    fetchseleted();
    return () => {
      dispatch(removeselectProduct());
    };
  }, []);
  const handleaddtocart = (product) => {
    dispatch(addtocart(product));
    setmsg(true);
  };
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
                    <button
                      onClick={() => handleaddtocart(products)}
                      className="btn btn-primary"
                    >
                      Buy ${products.price}
                    </button>
                  </div>
                  <br></br>
                  {msg ? (
                    <div
                      class="alert alert-warning alert-dismissible fade show"
                      role="alert"
                    >
                      <strong>Your Product</strong> is Successfully added to
                      Cart, Please Check it !
                    </div>
                  ) : null}
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
