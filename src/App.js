import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
	Home,
	About,
	Header,
	Footer,
	Products,
	SingleProduct,
	Cart,
	Checkout,
} from "./pages";

const App = () => {
	return (
    <BrowserRouter>
			<Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
			<Footer />
    </BrowserRouter>
	);
};

export default App;
