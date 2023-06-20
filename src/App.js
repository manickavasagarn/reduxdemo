import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Productlist from "./containers/Productlist";
import ProductDetail from "./containers/ProductDetail";
import Header from "./containers/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Productlist />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
