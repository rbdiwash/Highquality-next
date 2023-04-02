import { sliderContent } from "@/constants/const";
import Head from "next/head";
import Link from "next/link";
import CountUp from "react-countup";
import { BiHappyHeartEyes } from "react-icons/bi";
import {
  FaArrowLeft,
  FaArrowRight,
  FaAward,
  FaCaretRight,
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaRegAddressBook,
  FaRegClock,
} from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Body from "./Body";
import { useRef } from "react";
export default function Home() {
  var settings = {
    autoplay: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
  };

  var ClientSettings = {
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
  };
  const slider = useRef(null);
  return (
    <>
      <Head>
        <title>High Quality</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Body>
        <section id="hero-area" className="bg-blue-100 ">
          <div className="">
            <Slider {...settings} ref={slider}>
              {sliderContent.map((item, index) => (
                <div className="relative" key={index}>
                  <div
                    className="p-4 flex items-end justify-start "
                    style={{
                      backgroundImage: `url(${item?.image?.src})`,
                      width: "100%",
                      height: "550px",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="w-full mx-auto py-4 flex items-center justify-start flex-col text-left bg-gray-200 bg-opacity-70">
                      <div className="flex flex-col md:flex-row gap-4">
                        <a
                          className="outlined-button uppercase mr-4"
                          href="#services"
                        >
                          View Profile
                        </a>

                        <a
                          className="btn-primary uppercase"
                          type="button"
                          href={"assets/files/profile.pdf"}
                          download={"Aarotech_Profile.pdf"}
                          onClick={(e) => e.stopPropagation()}
                        >
                          Download Profile
                        </a>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => slider?.current?.slickPrev()}
                    className="slider-arrow"
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    className="arrow-btn next"
                    onClick={() => slider?.current?.slickNext()}
                  >
                    <FaArrowRight />
                  </button>
                </div>
              ))}
            </Slider>
          </div>
        </section>
        <section className="about my-10 md:mb-20 px-4 md:px-0">
          <div className="container mx-auto">
            <div className="text-3xl my-3 mb-5 font-semibold">
              Company Profile
            </div>
            <p className="leading-relaxed text-lg text-justify tracking-wide font-normal">
              Linking the fine talents of candidates with great opportunities
              available within an organization is matchmaking at its best. At
              High Quality Overseas, we transform this into an art worth
              emulating. Blending the needs of recruiters with the aspirations
              of job seekers, High Quality Overseas provides a platform where
              both sides come close, identify each other's requirements, and
              make informed decisions. <br />
              <br /> At High Quality Overseas, clients and candidates can
              benefit from our strong recruitment track record of an experienced
              team that strictly follows a 'Zero-Compromise' approach in every
              aspect of the recruitment procedure. Since it's inception in 2017,
              High Quality Overseas has evolved into a result-driven
              organization focusing on fulfilling the distinct needs of business
              establishments that approach the organization for its services.{" "}
              <br />
              <br /> In such a short span of time, High Quality has emerged as a
              preferred Human Resources Consultant for organizations in the
              Middle East, Southeast Asia and in Europe. <br />
              <br /> High Quality Overseas promises and delivers the quality
              services of Overseas Recruitment to clients and candidates through
              Integrity innovate and partnership. We provide a communication
              platform to link a gap bridge between job seekers' talent/skill
              and clients' requirements. <br />
              <br /> Our dedication to every success is to understand every
              client's business by inspiration and building long-lasting
              relationships. We are passionate about nurturing and building
              partnerships for which excellence is everything.
            </p>
          </div>
        </section>
        <section id="about" className="about my-12 px-4 md:px-0">
          <div className="container mx-auto">
            <p className="heading">Our Achivements</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6  mt-5 md:my-12">
              <Card
                icon={<BiHappyHeartEyes className="text-gray-400 text-6xl" />}
                duration={200}
                title={"Happy Clients"}
              />
              <Card
                icon={<FaRegAddressBook className="text-gray-400 text-6xl" />}
                duration={15}
                title={"Clients"}
              />
              <Card
                icon={<FaRegClock className="text-gray-400 text-6xl" />}
                duration={8}
                title={"Years experience"}
              />
              <Card
                icon={<FaAward className="text-gray-400 text-6xl" />}
                duration={8}
                title={"Countries Linked"}
              />
            </div>
          </div>
        </section>
        <section id="md" className="bg-primary text-white px-4 md:px-0">
          <div className="container mx-auto py-10">
            <div className="grid grid-cols-3 gap-12 items-center">
              {/* <div className="col-span-3 md:col-span-1">
                <img
                  src="/assets/images/md.jpg"
                  alt=""
                  className="rounded-full object-cover h-[500px] w-[500px]"
                />
              </div> */}
              <div className="col-span-3 md:col-span-3 mx-auto my-12">
                <p className="text-4xl mb-4 font-semibold">
                  Message from The Managing Director
                </p>
                <p className="text-lg leading-relaxed mt-2 text-justify">
                  It is my honor to welcome you at High Quality Overseas. My
                  fifteen years in recruitment business has taught me one thing
                  i.e., good business is all about human connection,
                  transparency, and integrity in everything we do. Without it,
                  trust cannot be built, and genuine partnerships cannot
                  flourish. . <br /> <br /> High Quality isn't a new player in
                  the industry. It's just a new name and was born out of my
                  commitment to continue providing my clients with the very best
                  value we can in a transparent, innovative, flexible, and
                  accountable way. The same incredibly talented and hard-working
                  team, delivering the high quality, flexible service we have
                  become recognized for. <br />
                  <br />
                  At High Quality, our commitment is: doing recruitment your way
                  - flexible pricing options to better suit your circumstances,
                  superior candidates sourced from the job description we've
                  calibrated with you, technology that facilitates a transparent
                  and highly collaborative process, and shared accountability
                  for the outcome. The way outstanding recruitment is done. The
                  way successful partnerships are built.
                  <br />
                  <br />
                  Adding real value every step of the way. That's our promise to
                  you.
                  <br /> Looking forward to working with you!
                  <br /> <br />
                  <span className="mt-5 text-white font-bold text-xl uppercase">
                    Lokendra bahadur Ranabhat
                  </span>
                  <br />
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="clients" className="my-12 px-4 md:px-0">
          <div className="container mx-auto">
            <p className="heading my-8 mb-12">Our Clients</p>

            <Slider {...ClientSettings}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item) => (
                <img
                  src={`/assets/images/clients/client (${item + 1}).png`}
                  alt=""
                  className="h-[250px] object-contain  my-8 pr-6"
                  key={item}
                />
              ))}
            </Slider>
          </div>
          <Link href="/clients">
            <div className="outlined-button">View All</div>
          </Link>
        </section>
        <section className="text-white bg-primary">
          <div className="px-4 py-12 md:px-12 lg:text-left">
            <div className="container mx-auto text-center">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-center justify-between">
                <div className="mt-12 lg:mt-0">
                  <h1
                    className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12"
                    // style="color: hsl(218, 81%, 95%)"
                  >
                    Do you have <br />
                    <span>any queries?</span>
                  </h1>
                  <p
                    className="mb-4 opacity-70 lead"
                    // style="color: hsl(218, 81%, 85%)"
                  >
                    We will get back to you as soon as we receive the message.
                  </p>
                </div>
                <div className="mb-12 lg:mb-0 lg:pl-32">
                  <div className="block rounded-lg shadow-lg bg-white px-6 py-12 md:px-12">
                    <h2 className="text-3xl font-bold mb-12 text-center text-red">
                      Send a Quick Message
                    </h2>
                    <form>
                      <div className="form-group mb-6">
                        <input
                          type="text"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleInput90"
                          placeholder="Name"
                        />
                      </div>
                      <div className="form-group mb-6">
                        <textarea
                          type="text"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleInput91"
                          placeholder="Enter Message"
                          rows={5}
                        />
                      </div>

                      <button type="submit" className="btn-primary w-full">
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="faq" className="my-12 md:my-32">
          <div className="container mx-auto">
            <p className="heading my-8 mb-12">Frequently Asked Questions</p>
            <div className="mt-20">
              {faq.map(({ quest, ans }) => (
                <Accordion quest={quest} ans={ans} key={ans} />
              ))}
            </div>
          </div>
        </section> */}
      </Body>
    </>
  );
}
export const Card = ({ icon, duration, title }) => {
  return (
    <div className="w-full">
      <div className="py-8 rounded-lg shadow-lg border w-full">
        <div className="flex-center justify-center gap-8">
          {icon}
          <div className="flex flex-col justify-start items-center">
            <div className="center gap-4 ">
              <CountUp
                end={duration}
                duration={5}
                suffix="+"
                className="text-4xl primary font-semibold"
              ></CountUp>
              {/* <FaSmile className="text-yellow-400 text-4xl" /> */}
            </div>
            <p className="font-semibold my-2 leading-8 text-2xl text-gray-600 ">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
