import React, { useState } from "react";
import { FaLinkedin, FaPhone, FaWhatsapp } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { useRouter } from "next/router";
import Link from "next/link";
const Navbar = () => {
  const options = [
    { label: "Home", id: "" },
    { label: "Services", id: "services" },
    { label: "Gallery", id: "gallery" },
    { label: "Clients", id: "clients" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];
  const route = useRouter();
  const check = route.pathname;

  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <nav className="text-gray-500 border-gray-200 bg-gray-200">
        <div className="flex flex-wrap justify-between items-center mx-auto container px-4 md:px-0 py-2.5">
          <span className="self-center md:text-lg font-semibold text-black">
            Welcome to{" "}
            <span className="text-red uppercase">
              High Quality Overseas Pvt. Ltd
            </span>
          </span>

          <div className="flex items-center">
            <Link
              href="https://www.facebook.com/hiqualityoverseas?mibextid=ZbWKwL"
              className="mr-6 text-sm font-medium text-gray-500 hover:underline"
            >
              <BsFacebook />
            </Link>
            <Link
              href="mailto:highqualitynepal@gmail.com"
              className="mr-6 text-md font-medium text-gray-500 hover:underline"
            >
              <FiMail />
            </Link>
            <Link
              href="tel:00977-1-4357168"
              className="mr-6 text-sm font-medium text-gray-500 hover:underline"
            >
              <FaPhone />
            </Link>
            <Link
              href="https://api.whatsapp.com/message/NHYY64RXFJ5LM1?autoload=1&app_absent=0"
              className="mr-6 text-sm font-medium text-gray-500 hover:underline"
            >
              <FaWhatsapp />
            </Link>
            <Link
              href="https://www.linkedin.com/company/high-quality-overseas-pvt-ltd/"
              className="text-md font-medium text-gray-500 hover:underline"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </nav>
      <nav className="p-3 px-0 bg-white  border-gray-200  shadow top-0 sticky z-50">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link href="/" className="flex items-center">
            <img
              src={"/assets/images/logo.png"}
              className="mr-3 h-6 sm:h-16"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl  font-semibold whitespace-nowrap text-black">
              High Quality <br /> Overseas Pvt. Ltd.
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 "
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={
              "w-full md:block md:w-auto " + (openMenu ? "" : "hidden")
            }
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col mt-4 bg-white shadow-lg md:shadow-none text-gray-600 border text-center md:text-gray-400  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent">
              {options.map((item, index) => (
                <li key={index} onClick={() => setOpenMenu(false)}>
                  <Link
                    href={`/${item?.id}`}
                    className={
                      "hover:text-[#ec1f24] block uppercase text-lg  py-2 pr-4 pl-3   rounded md:bg-transparent md:p-0 border-b border-gray-600 md:border-0 " +
                      (check === "/" + item?.id
                        ? "text-[#ec1f24] font-semibold"
                        : "")
                    }
                  >
                    {item?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
