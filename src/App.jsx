import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductDetail from "./components/Productos";
import ProductosRelacionados from "./components/ProductosRelacionados";

function App() {
  return (
    <>
      <Navbar />


      <ProductDetail />
      <br></br>

      <ProductosRelacionados />
      
      <Footer />
    </>
  );
}

export default App;
