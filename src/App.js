import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Home from "./components/Home/home";
import Footer from "./components/Footer/footer";

import Ourwork from "./components/Ourwork/ourwork";
//import Price from "./components/Price/price";
//import Product from "./components/Product/product";
import ScrollToTop from "./components/ScrollToTop.js";

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourwork" element={<Ourwork />} />
        {/*} <Route path="/price" element={<Price />} />
        {/*}  <Route path="/product" element={<Product />} />
        {/* <Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="/"
					element={<PropertyListing />}
				/>

				<Route
					path="/submitProject"
					element={<SubmitProject />}
				/> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
