import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import Body from "./Body";

const services = () => {
  return (
    <Body title="Our Services" subtitle="Services">
      <section>
        <div className="container mx-auto my-20">
          <p className="heading my-8">Industries we Serve</p>
          <div className="grid md:grid-cols-2 gap-12 items-center mt-10 md:mt-20">
            <ul className="area ">
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
                VEHICLE OPERATOR/MECHANIC AND MAINTENANCE
              </li>
            </ul>
            <div className="col-span-1 rounded-lg shadow-xl p-4">
              <img src="/assets/images/serv.png" alt="services" />
            </div>
          </div>
        </div>
      </section>
      <section className="training">
        <div className="container mx-auto my-20">
          <p className="heading my-8 text-white">Training and Orientation</p>
          <div className="grid md:grid-cols-2 gap-12 items-center mt-10 md:mt-20 z-50">
            <div className="col-span-1 rounded-lg shadow-xl p-4">
              <img src="/assets/images/ser1.png" alt="services" />
            </div>
            <div className="col-span-1">
              <p className="text-white text-2xl mb-4 underline underline-offset-4">
                Our training programs serve multiple purposes including:
              </p>
              <ul className="area text-white">
                <li>
                  <FiCheckCircle className="text-red font-bold" />
                  To improve productivity and performance.
                </li>
                <li>
                  <FiCheckCircle className="text-red font-bold" />
                  To bring about change in the attitudes of the workers towards
                  fellow workers, supervisor and the organization.
                </li>
                <li>
                  <FiCheckCircle className="text-red font-bold" />
                  Providing job related knowledge to the workers.
                </li>
                <li>
                  <FiCheckCircle className="text-red font-bold" />
                  To prepare workers for promotion to higher jobs by imparting
                  them advanced skills.
                </li>
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mt-10 md:mt-20 z-50">
            <div className="col-span-1">
              <p className="text-white text-2xl mb-4 underline underline-offset-4">
                Our orientation programs serve multiple purposes including:
              </p>
              <ul className="area text-white">
                <li>
                  <FiCheckCircle className="text-red font-bold" />
                  Creating a favorable working approach and environment.
                </li>
                <li>
                  <FiCheckCircle className="text-red font-bold" />
                  Explaining the benefits of working in foreign company.
                </li>
                <li>
                  <FiCheckCircle className="text-red font-bold" />
                  Ease the new hire's entry into the work group.
                </li>
                <li>
                  <FiCheckCircle className="text-red font-bold" />
                  Help the new hire see where they fit in.
                </li>
              </ul>
            </div>
            <div className="col-span-1 rounded-lg shadow-xl p-4">
              <img src="/assets/images/ser2.png" alt="services" />
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container mx-auto my-20">
          <p className="heading my-8 ">Travel Arrangement</p>
          <div className="grid md:grid-cols-2 gap-12 items-center mt-10 md:mt-20 z-50">
            <div className="col-span-1 rounded-lg shadow-xl ">
              <img src="/assets/images/nepairlines.jpg" alt="services" />
            </div>
            <div className="col-span-1">
              <p className="text-xl mb-4 text-justify text-gray">
                Once Contract signing with the employee is done, travel
                arrangement becomes the final procedure. For convenience to the
                employee and the employer, GSO makescomplete travel
                arrangements. Tickets, VISA and various travel assistance for
                mobilization and demobilization of personnel from home country
                to the remote region is handled by us. Our services include
                handling the entire official documents: original passport, air
                ticket and government’s approval letter to the employee before
                departure. We also acquaint them with all of the traveling
                procedures in order to reach their destination without
                complexity. One is recommended to collect one’s VISA from the
                VISA counter in the concerned airport and to contact immigration
                authority for VISA endorsement if his visa is not endorsed
                before departure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Body>
  );
};

export default services;
