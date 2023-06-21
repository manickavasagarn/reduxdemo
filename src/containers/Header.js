import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <Link to="/">
          <h1>Fake Store</h1>
        </Link>
        {/*
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> */}

        <div className="d-flex justify-content-end">
          <Link to="/cart">
            <i class="fa-solid fa-cart-shopping"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
