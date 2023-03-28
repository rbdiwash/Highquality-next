import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import Body from "./Body";

const services = () => {
  return (
    <Body title="Our Services" subtitle="Services">
      <div className="container mx-auto my-20">
        <p className="heading my-8">Area of Expertise</p>{" "}
        <ul className="area mt-20">
          <li>
            <FiCheckCircle className="text-red font-bold" />
            BUILDING MAINTENANCE AND CONSTRUCTION
          </li>
          <li>
            <FiCheckCircle className="text-red font-bold" />
            SECURITY GUARDS
          </li>
          <li>
            <FiCheckCircle className="text-red font-bold" />
            OIL AND GAS
          </li>
          <li>
            <FiCheckCircle className="text-red font-bold" />
            ENGINEERING
          </li>
          <li>
            <FiCheckCircle className="text-red font-bold" />
            AGRICULTURE AND FARMING GROUP
          </li>
          <li>
            <FiCheckCircle className="text-red font-bold" />
            OFFICE PERSONNEL MANAGEMENT
          </li>
          <li>
            <FiCheckCircle className="text-red font-bold" />
            HOSPITALITY AND EVENT MANAGEMENT
          </li>
          <li>
            <FiCheckCircle className="text-red font-bold" />
            SUPERMARKET(RETAILS/SALES)
          </li>
          <li>
            <FiCheckCircle className="text-red font-bold" />
            GARMENTS AND TEXTILE
          </li>
          <li>
            <FiCheckCircle className="text-red font-bold" />
            OIL AND GASINFORMATION TECHNOLOGY
          </li>
          <li>
            <FiCheckCircle className="text-red font-bold" />
            VEHICLE OPERATOR/MECHANIC AND MAINTENANCE
          </li>
        </ul>
      </div>
    </Body>
  );
};

export default services;
