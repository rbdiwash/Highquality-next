import BreadCrumb from "@/Components/BreadCrumb";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Header";
import React from "react";

const Body = ({ children, title, subtitle }) => {
  return (
    <div>
      <Navbar />
      <BreadCrumb {...{ title, subtitle }} />
      <div className="px-4 md:px-0">{children}</div>
      <Footer />
    </div>
  );
};

export default Body;
