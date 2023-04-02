import React from "react";
import Body from "./Body";

const clients = () => {
  return (
    <Body title={"Clients"} subtitle={"Clients"}>
      <section className="px-4 md:px-0">
        <div className="container mx-auto py-10">
          <p className="heading mb-4">List of Our Valued Clients.</p>
          <p className="text-2xl font-semibold leading-normal tracking-tight my-6">
            Without whom we could not have been where we are today. Thank you
            for your continued and never ending support.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8 gap-y-6 my-6">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item) => (
              <div
                className="col-span-1 border shadow-2xl border-dashed p-4"
                key={item}
              >
                <img
                  src={`/assets/images/clients/client (${item + 1}).png`}
                  alt=""
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Body>
  );
};

export default clients;
