import React, { useState } from "react";
import { FiCheckCircle, FiChevronDown, FiChevronUp } from "react-icons/fi";
import Body from "./Body";

const services = () => {
  const [isActive, setIsActive] = useState(0);
  const handleOpen = (value) => {
    setIsActive(isActive === value ? 0 : value);
  };
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
      {/* <section className="training">
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
      </section> */}
      <section className="training">
        <div className="container mx-auto my-20 text-white">
          <p className="heading my-8 text-white">Our Process</p>

          <p className="text-lg mb-4">
            The recruitment operation at High Quality Overseas is a
            one-of-a-kind approach, based on flexibility, confidentiality,
            excellence, and commitment. Our recruitment consultants are some of
            the most skilled search professionals in the business today. Each
            individual has expertise in key functional areas. Our team
            facilitates and manages the entire process from 'employee wanted' to
            'you're hired'.
          </p>
          <div class="steps-progress">
            <ul class="steps-list">
              <li class="steps-item">
                <h3 class="head text-2xl font-semibold my-10">Briefing</h3>
                {/* <div class="location">Indonesia - University</div>
                <div class="periode">
                  <i class="fas fa-calendar-alt"></i> 2016-2021
                </div> */}
              </li>
              <li class="steps-item">
                <h3 class="head text-2xl font-semibold my-10">
                  Search and Analysis
                </h3>
              </li>
              <li class="steps-item">
                <h3 class="head text-2xl font-semibold my-10">
                  Interview and Selection Process
                </h3>
              </li>
              <li class="steps-item">
                <h3 class="head text-2xl font-semibold my-10">
                  Post Selection and Deployment
                </h3>
              </li>
            </ul>
          </div>

          <div className="mt-20">
            <div className="accordion pb-3 border-b-2 mb-2">
              <div
                className="flex-center gap-4 text-2xl font-semibold cursor-pointer"
                onClick={() => handleOpen(1)}
              >
                <div>
                  {isActive === 1 ? <FiChevronUp /> : <FiChevronDown />}
                </div>
                <div>Briefing</div>
              </div>
              {isActive === 1 && (
                <div className="text-xl  ml-10 my-4 accordion-body">
                  A thorough briefing is crucial. We spend time with client to
                  build the deepest possible understanding of its priorities as
                  an organization and build a detailed profile of the position.
                  At this stage we organize a full recruitment schedule, conduct
                  research, and prepare a strategy to rope in potential
                  candidates.
                  <ul>
                    <li>
                      Receipt of manpower requirements with job description from
                      Client Company.
                    </li>
                    <li>
                      Establish the recruitment strategy with the client
                      company.
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="accordion pb-3 border-b-2 mb-2">
              <div
                className="flex-center gap-4 text-2xl font-semibold cursor-pointer"
                onClick={() => handleOpen(2)}
              >
                <div>
                  {isActive === 2 ? <FiChevronUp /> : <FiChevronDown />}
                </div>
                <div>Search and Analysis</div>
              </div>
              {isActive === 2 && (
                <div className="text-xl  ml-10 my-4">
                  We search and headhunt for the right professionals in our
                  database/ our web portal and various other prominent web
                  portals that contain profiles ranging from top management,
                  senior engineering, highly qualified professionals, highly
                  skilled, semi-skilled and general workforce from various
                  industries like construction, operation, maintenance:
                  services, manufacturing, production, information technology,
                  hotel & hospitality, medical, and trading among others.
                  <br />
                  We place recruitment advertisements in newspapers, magazines,
                  leaflets, digital banners, web portals, website, and social
                  media via use of SMSs, texts, and bulk emails. For filling
                  top-level positions, we provide specialized head-hunting
                  services. We regularly send our personnel to small towns and
                  remote corners of India to distribute leaflets. This way the
                  job seekers come to know about the interview schedule and
                  later appear for the same. <br />
                  Prospective candidates are called for a primary round of
                  interview. Our team of recruitment consultants conducts tests
                  to evaluate the trade / industry skills, language skills,
                  psychology. attitude and overall personality of candidates.{" "}
                  <br />
                  Following these, we meet with the client again; present
                  interview reports and discuss to determine who all among the
                  interviewed shall be shortlisted.
                  <ul>
                    <li>
                      Generate CVs candidates meeting position requirements
                      (this may require placing advertisements with prior
                      approval from the client company or sourcing CVs through
                      the database we maintain).
                    </li>
                    <li>
                      Pre-screening interview and short-listing CVs matching
                      position requirements.
                    </li>
                    <li>
                      Submit short-ling CVs to Client Company and do the
                      follow-up.
                    </li>
                    <li>
                      Receive shortlist for interview from Client Company.
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="accordion pb-3 border-b-2 mb-2">
              <div
                className="flex-center gap-4 text-2xl font-semibold cursor-pointer"
                onClick={() => handleOpen(3)}
              >
                <div>
                  {isActive === 3 ? <FiChevronUp /> : <FiChevronDown />}
                </div>
                <div>Interview and Selection Process</div>
              </div>
              {isActive === 3 && (
                <div className="text-xl  ml-10 my-4">
                  Invite shortlisted candidates to attend interview clearly
                  specifying the requirements to present all originals of
                  documents and passport and stating the date / time and
                  location of interview and confirm attendance. Arrange hotel
                  accommodation and airport pick-up / drop for client
                  representatives. Arrange interview facilities / conference
                  room for the interview.
                  <br />
                  <br />
                  Provide efficient support staff to conduct interview.{" "}
                  <ul>
                    <li>
                      Agree to interview date/time and location and other
                      logistics associated with client's visit to conduct
                      interview.
                    </li>
                    <li>
                      Ensure all office facilities are available for client's
                      use for the duration of such as fax, telephone, computer,
                      courier, and e-mail, to name a few.
                    </li>
                    <li>
                      Attend interview in the closing session with client's
                      representatives to assess the interview results and obtain
                      the shortlist of candidates to be recruited.
                    </li>
                    <li>
                      Ensure all candidates' documents are completed and in
                      place.
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="accordion pb-3 border-b-2 mb-2">
              <div
                className="flex-center gap-4 text-2xl font-semibold cursor-pointer"
                onClick={() => handleOpen(4)}
              >
                <div>
                  {isActive === 4 ? <FiChevronUp /> : <FiChevronDown />}
                </div>
                <div>Post Selection & Deployment</div>
              </div>
              {isActive === 4 && (
                <div className="text-xl  ml-10 my-4">
                  Following are the processes the candidates need to undergo
                  after their final selection.
                  <br />
                  <br />
                  <ul>
                    <li>
                      Receive employment offers for selected candidates from the
                      client company.
                    </li>
                    <li>
                      Extend offers to selected candidates and conduct post
                      selection interview and explain the offer in detail and
                      confirm acceptance as well. Inform the client company of
                      the offer acceptance.
                    </li>
                    <li>
                      Schedule pre-employment medical with authorized medical
                      facility.
                    </li>
                    <li>
                      Documents' attestation, if required, is also done by our
                      organization
                    </li>
                    <li>
                      Conduct background checks and verification of references
                      and provide details to client company, if requested.
                    </li>
                    <li>
                      We also arrange for re-medical tests as per the GAMCA
                      rules and regulations.
                    </li>
                    <li>Arrange visa application and obtain visa.</li>
                    <li>
                      Carry out emigration formalities and formulate insurance
                      policy.
                    </li>
                    <li>
                      Support candidates in shipping their personal effects as
                      required.
                    </li>
                    <li>Ensure travel documents are complete.</li>
                    <li>
                      Ticket booking for the candidates and their family members
                      if they are rewarded with family status.
                    </li>
                    <li>
                      Give flight details of the candidates to the client 3-4
                      days prior to their departure date.
                    </li>

                    <li>
                      Assist new recruits and dependents at the time of
                      departure at the airport.
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* <section className="">
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
      </section> */}
    </Body>
  );
};

export default services;
