import Image from "next/image";
import React from "react";
import Body from "./Body";

const about = () => {
  return (
    <Body title={"About Us"} subtitle={"About Us"}>
      <section className="about my-10 md:mb-20">
        <div className="container mx-auto">
          <p className="heading">About us</p>
          <div className="text-3xl my-3 mb-5">Company Profile</div>
          <p className="leading-relaxed text-lg text-justify tracking-wide font-normal">
            Linking the fine talents of candidates with great opportunities
            available within an organization is matchmaking at its best. At High
            Quality Overseas, we transform this into an art worth emulating.
            Blending the needs of recruiters with the aspirations of job
            seekers, High Quality Overseas provides a platform where both sides
            come close, identify each other's requirements, and make informed
            decisions. <br />
            <br /> At High Quality Overseas, clients and candidates can benefit
            from our strong recruitment track record of an experienced team that
            strictly follows a 'Zero-Compromise' approach in every aspect of the
            recruitment procedure. Since it's inception in 2017, High Quality
            Overseas has evolved into a result-driven organization focusing on
            fulfilling the distinct needs of business establishments that
            approach the organization for its services. <br />
            <br /> In such a short span of time, High Quality has emerged as a
            preferred Human Resources Consultant for organizations in the Middle
            East, Southeast Asia and in Europe. <br />
            <br /> High Quality Overseas promises and delivers the quality
            services of Overseas Recruitment to clients and candidates through
            Integrity innovate and partnership. We provide a communication
            platform to link a gap bridge between job seekers' talent/skill and
            clients' requirements. <br />
            <br /> Our dedication to every success is to understand every
            client's business by inspiration and building long-lasting
            relationships. We are passionate about nurturing and building
            partnerships for which excellence is everything.
          </p>
        </div>
      </section>
      {/* <section id="md" className="bg-primary text-white">
        <div className="container mx-auto py-10">
          <div className="grid grid-cols-3 gap-12 items-center">
            <div className="col-span-3 md:col-span-1">
              <img
                src="/assets/images/md.jpg"
                alt=""
                className="rounded-full object-cover h-[500px] w-[500px]"
              />
            </div>
            <div className="col-span-3 md:col-span-2">
              <p className="text-4xl mb-4 font-semibold">
                Message from The Managing Director
              </p>
              <br />
              <p className="text-lg leading-relaxed mt-2">
                It is my honor to welcome you at High Quality Overseas. My
                fifteen years in recruitment business has taught me one thing
                i.e., good business is all about human connection, transparency,
                and integrity in everything we do. Without it, trust cannot be
                built, and genuine partnerships cannot flourish. . <br /> <br />
                High Quality isn't a new player in the industry. It's just a new
                name and was born out of my commitment to continue providing my
                clients with the very best value we can in a transparent,
                innovative, flexible, and accountable way. The same incredibly
                talented and hard-working team, delivering the high quality,
                flexible service we have become recognized for. <br />
                <br />
                At High Quality, our commitment is: doing recruitment your way –
                flexible pricing options to better suit your circumstances,
                superior candidates sourced from the job description we've
                calibrated with you, technology that facilitates a transparent
                and highly collaborative process, and shared accountability for
                the outcome. The way outstanding recruitment is done. The way
                successful partnerships are built.
                <br />
                <br />
                Adding real value every step of the way. That's our promise to
                you.
                <br /> Looking forward to working with you! <br />
                <br />
                <span className="mt-5 text-white font-bold text-xl uppercase">
                  Lokendra bahadur Ranabhat
                </span>
                <br />
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <section className="">
        <div className="container mx-auto my-10 md:my-20">
          <p className="heading mb-12">Mission, Vision and Values</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
            <div className="col-span 1 shadow-lg hover:scale-95 hover:shadow-2xl border border-dashed px-12 py-16 rounded-xl cursor-pointer transition text-center duration-500">
              <img src="/assets/images/ser1.png" alt="" />
              <div className="text-black font-semibold text-2xl  my-3">
                Our Mission
              </div>
              <p>
                Our mission is to build a platform where business establishments
                across the globe and job aspirants can connect with each other
                and achieve mutually beneficial results.
              </p>
            </div>
            <div className="col-span 1 shadow-lg hover:scale-95 hover:shadow-2xl border border-dashed px-12 py-16 rounded-xl cursor-pointer transition text-center duration-500s">
              <img src="/assets/images/ser1.png" alt="" />
              <div className="text-black font-semibold text-2xl  my-3">
                Our Vision
              </div>
              <p>
                Our vision is to become a top ranked resource for quality
                manpower from Nepal, which is equally admired by job aspirants
                and business establishments across the globe for promoting
                ethical, reliable, and transparent recruitment process.
              </p>
            </div>
            <div className="col-span 1 shadow-lg hover:scale-95 hover:shadow-2xl border border-dashed px-12 py-16 rounded-xl cursor-pointer transition text-center duration-500">
              <img src="/assets/images/ser1.png" alt="" />
              <div className="text-black font-semibold text-2xl  my-3">
                Our Values
              </div>
              <p>
                All individuals are accountable for the highest standards of
                ethical behavior. We deliver recruitment services with honesty,
                transparency, equality, and consistency.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="py-12">
        <div className="container mx-auto my-10 md:my-20">
          <p className="heading my-12">Management Team</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 items-center">
            <div className="col-span 1 shadow-lg hover:shadow-2xl border border-dashed  rounded-xl cursor-pointer transition">
              <img
                src="/assets/images/md.jpg"
                alt=""
                className="rounded-t-xl h-[400px] object-cover"
              />
              <div className="px-4 py-5">
                <div className="font-bold text-xl uppercase text-gray-500">
                  Managing Director
                </div>
                <div className="text-lg font-semibold tracking-wide text-gray-600">
                  Mr. Lokendra Bahadur Ranabhat
                </div>
              </div>
            </div>
            <div className="col-span 1 shadow-lg hover:shadow-2xl border border-dashed  rounded-xl cursor-pointer transition">
              <img
                src="/assets/images/md.jpg"
                alt=""
                className="rounded-t-xl h-[400px] object-cover"
              />
              <div className="px-4 py-8">
                <div className="font-bold text-xl uppercase text-gray-500">
                  Managing Director
                </div>
                <div className="text-lg font-semibold tracking-wide text-gray-600">
                  Mr. Lokendra Bahadur Ranabhat
                </div>
              </div>
            </div>
            <div className="col-span 1 shadow-lg hover:shadow-2xl border border-dashed  rounded-xl cursor-pointer transition">
              <img
                src="/assets/images/md.jpg"
                alt=""
                className="rounded-t-xl h-[400px] object-cover"
              />
              <div className="px-4 py-8">
                <div className="font-bold text-xl uppercase text-gray-500">
                  Managing Director
                </div>
                <div className="text-lg font-semibold tracking-wide text-gray-600">
                  Mr. Lokendra Bahadur Ranabhat
                </div>
              </div>
            </div>
            <div className="col-span 1 shadow-lg hover:shadow-2xl border border-dashed  rounded-xl cursor-pointer transition">
              <img
                src="/assets/images/md.jpg"
                alt=""
                className="rounded-t-xl h-[400px] object-cover"
              />
              <div className="px-4 py-8">
                <div className="font-bold text-xl uppercase text-gray-500">
                  Managing Director
                </div>
                <div className="text-lg font-semibold tracking-wide text-gray-600">
                  Mr. Lokendra Bahadur Ranabhat
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="bg-parallax my-10 mb-20 text-white">
        <div className="container mx-auto">
          <p className="w-full heading text-white text-4xl font-bold text-center my-6">
            What makes us different?
          </p>

          <p className="leading-relaxed text-lg text-justify tracking-wide font-normal">
            <span className="text-red font-semibold text-lg">Say goodbye </span>
            to misunderstanding, miscommunication and lack of transparency.
            <br />
            <br /> The most common complaints clients and candidates have about
            recruiters are pretty widely known. Yet, nothing seems to change.
            Well, now it has.
          </p>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-12 my-6">
            <div className="col-span-1">
              <span className="text-red font-semibold text-xl underline">
                Mismatched candidates
              </span>
              <p className="mt-2 text-lg">
                Candidates don't match the brief you gave the recruiter. At High
                Quality, we continually check in on you to make sure the
                candidates we're presenting are hitting the mark. Frustration
                gone.
              </p>
            </div>
            <div className="col-span-1">
              <span className="text-red font-semibold   text-xl underline">
                You have to chase the recruiter.
              </span>
              <p className="mt-2 text-lg">
                You don't get regular updates from the recruiter — you have to
                chase them. We don't keep our clients hanging like that. Our
                online collaborative tool gives you updates in real time.
                Frustration gone
              </p>
            </div>
            <div className="col-span-1">
              <span className="text-red font-semibold   text-xl underline">
                Ill-informed candidates
              </span>
              <p className="mt-2 text-lg">
                Candidates turn up for interview and have a different idea about
                what the job is, resulting in both client and candidate wasting
                their time. Our rigorous processes and commitment to
                transparency make sure no candidate goes to an interview not
                being sure what the job is. Frustration gone
              </p>
            </div>
            <div className="col-span-1">
              <span className="text-red font-semibold text-xl  mb-3 underline">
                Vague candidate evaluations
              </span>
              <p className="mt-2 text-lg">
                You don't know if a candidate has been properly screened or
                reference checked — you just have to take the recruiter's word
                for it. At Just Right People, you can see what we're doing. All
                our interview notes, reference checks and candidate documents
                are uploaded into the online workspace so you can see for
                yourself. Frustration gone.
              </p>
            </div>
            <div className="col-span-1">
              <span className="text-red font-semibold   text-xl underline">
                Black box recruitment process
              </span>
              <p className="mt-2 text-lg">
                You don't know if you're being sent the most suitable candidates
                or just the ones the recruiter likes. That doesn't happen with
                us. We work to your brief, so you'll only get the most suitable
                candidates. Oh, and have we mentioned our online tool that lets
                you see what we're doing? Frustration gone.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Body>
  );
};

export default about;
