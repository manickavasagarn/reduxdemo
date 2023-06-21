import React from "react";
import { useDispatch } from "react-redux";
import { deletetocart } from "../redux/action/productAction";

function CartBody(props) {

  return (
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">
          {props.product.title} - ${props.product.price}
        </div>
        {props.product.category}
      </div>
      <span
        class="badge bg-danger rounded-pill"
        onClick={() => props.handledeletecart(props.product.id)}
      >
        <i class="fa-solid fa-xmark"></i>
      </span>
    </li>
  );
}

export default CartBody;
