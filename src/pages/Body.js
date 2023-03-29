import BreadCrumb from "@/Components/BreadCrumb";
import FacebookChat from "@/Components/FacebookMessenger";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Header";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const Body = ({ children, title, subtitle }) => {
  const route = useRouter();
  const check = route.pathname;
  return (
    <>
      <Head>
        <title>{title || "High Quality Overseas Pvt. Ltd."}</title>
      </Head>
      <div>
        <Navbar />
        {check !== "/" && <BreadCrumb {...{ title, subtitle }} />}
        <div className="px-4 md:px-0">{children}</div>
        <FacebookChat />
        <Footer />
      </div>
    </>
  );
};

export default Body;
