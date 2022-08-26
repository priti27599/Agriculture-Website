import React from "react";
import Experience from "../screens/Experience";
import Insta from "../screens/Insta";
import Products from "../screens/Products";
import Banner from "../screens/Banner";
import Header from "./Header";


const Home = () => {
  
  return (
   
        <div className="/">
          <Header />
          <Banner />
          <Experience />
          <Products />
          <Insta />
        </div>
     
  );
};

export default Home;
