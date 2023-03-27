import BreadCrumb from "@/Components/BreadCrumb";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Header";
import React from "react";

const Body = ({ children }) => {
  return (
    <div>
      <Navbar />
      <BreadCrumb />
      {children}
      <Footer />
    </div>
  );
};

export default Body;
