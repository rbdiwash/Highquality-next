import React from "react";
import { FaHome } from "react-icons/fa";

const BreadCrumb = ({ title, subtitle }) => {
  return (
    <div className="py-6 bg-primary text-white px-4 md:px-0">
      <div className="container mx-auto">
        <div className="flex-center justify-between">
          <span className="text-3xl">{title || "Home"}</span>
          <span className="text-lg center space-x-4 font-semibold">
            <FaHome /> <span> {">"}</span>
            <span> {subtitle || "Home"}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
