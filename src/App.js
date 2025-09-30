import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Home from "./components/Home/home.jsx";
import Footer from "./components/Footer/footer";
import About from "./components/About/about.jsx";
import Program from "./components/Program/program";
import ProgramDetail from "./components/Program/ProgramDetail";
//import News from './components/News/news';
import Contact from "./components/Contact/contact";
import Donate from "./components/Donate/donate";
import ScrollToTop from "./components/ScrollToTop.js";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/program" element={<Program />} />
        <Route path="/program/:id" element={<ProgramDetail />} />{" "}
        {/*	<Route
					path="/news"
					element={<News />}
				/> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
