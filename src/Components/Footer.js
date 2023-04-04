import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="px-4 divide-y dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex flex-col  items-start space-y-3"
          >
            <div className="bg-white p-3 rounded">
              <img
                src={"/assets/images/logo-final.png"}
                className="h-24"
                alt="Flowbite Logo"
              />
            </div>

            <p className="text-2xl font-semibold">
              High Quality Overseas Pvt. ltd
            </p>
            <i className="text-xl font-semibold itallic">
              "Quality is our Obsession"
            </i>
          </a>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-4 text-sm gap-x-3 gap-y-8 lg:w-2/3">
          <div className="space-y-3">
            <h3 className="tracking-wide text-xl underline uppercase dark:text-gray-50">
              Important Links
            </h3>
            <ul className="space-y-1 text-base">
              <li>
                <Link rel="noopener noreferrer" href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" href="/clients">
                  Clients
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide text-xl underline uppercase dark:text-gray-50">
              Get in touch
            </h3>
            <ul className="space-y-1 text-base">
              <li>Samakhusi, New Buspark , Kathmandu</li>
              <li>+977-1-4384853, +977-1-4357168</li>
              <li>hiqualitynepal@gmail.com </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="text-xl underline uppercase dark:text-gray-50">
              Social media
            </div>
            <div className="flex justify-start space-x-3">
              <Link
                href="https://www.facebook.com/hiqualityoverseas?mibextid=ZbWKwL"
                title="Facebook"
                className="flex items-center p-1"
              >
                <FaFacebook className="text-3xl" />
              </Link>
              <Link
                href="mailto:highqualitynepal@gmail.com"
                title="Twitter"
                className="flex items-center p-1"
              >
                <FiMail className="text-3xl" />
              </Link>
              <Link
                href="https://api.whatsapp.com/message/NHYY64RXFJ5LM1?autoload=1&app_absent=0"
                title="Twitter"
                className="flex items-center p-1"
              >
                <FaWhatsapp className="text-3xl" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/high-quality-overseas-pvt-ltd/"
                title="Instagram"
                className="flex items-center p-1"
              >
                <FaLinkedin className="text-3xl" />
              </Link>
            </div>
          </div>
          <div className="space-y-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14126.580295686774!2d85.30935287082627!3d27.728242818203224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb191ed757779f%3A0xa3fb7fed922d73e8!2sSamakhusi%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1623309286420!5m2!1sen!2snp"
              width="100%"
              height="200"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center dark:text-gray-400">
        © 2017 Company Co. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
