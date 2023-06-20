import React from "react";
import { Link } from "react-router-dom";

function Product(props) {
  return (
    <div className="col-3 mt-3">
      <Link to={`/product/${props.arr.id}`}>
        <div class="card">
          <img
            src={props.arr.image}
            class="card-img-top"
            alt="..."
            style={{ width: "100%", height: "250px" }}
          />
          <div class="card-body">
            <h5 class="card-title" style={{ height: "150px" }}>
              {props.arr.title}
            </h5>
            <p class="card-text">{props.arr.category}</p>
            <Link to={`/product/${props.arr.id}`} class="btn btn-primary">
              $: {props.arr.price}
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Product;
