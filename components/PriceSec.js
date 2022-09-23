import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const PriceSec = () => {
  const router = useRouter();

  const [features, setFeatures] = useState([
    {
      id: 1,
      title: "Unmetered traffic (Unlimited GB)",
    },
    {
      id: 2,
      title: "100 Websites",
    },
    {
      id: 3,
      title: "100 GB SSD Storage",
    },
    {
      id: 4,
      title: "Free Weekly Backups",
    },
    {
      id: 5,
      title: "Unlimited Free SSL",
    },
    {
      id: 6,
      title: "Free Domain",
    },
    {
      id: 7,
      title: "Free Email",
    },
    {
      id: 8,
      title: "Optimized for WordPress",
    },
  ]);
  return (
    <div className="text-hostinger-Dark-blue flex flex-col space-y-10 items-center py-14">
      <motion.div
        initial={{
          y: -100,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col space-y-10 items-center "
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          All-In-One Web Hosting
        </h2>
        <p className="text-base font-medium text-hostinger-Dark-blue/75 max-w-xl text-center">
          We prepared the best web hosting plan for you to start. You will be
          able to adjust plans as you go - our custom-built algorithm will
          provide suggestions based on your usage.
        </p>
      </motion.div>
      <div className="bg-hostinger-blue rounded-2xl border-2 border-hostinger-blue md:w-[45rem] lg:w-[60rem] flex flex-col md:flex-row ">
        <motion.div
          initial={{
            x: -200,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          className="bg-white md:w-1/2 rounded-2xl"
        >
          <div className="p-5 border-b-2 flex justify-center items-center border-hostinger-blue">
            <h3 className="font-semibold text-2xl">Best Web Hosting</h3>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col items-center pb-8 pt-12 w-full">
              <h2 className="text-5xl font-semibold flex items-end">
                <span className="flex items-start">
                  <span className="text-base">₹</span>
                  149.00
                </span>
                <span className="text-base">/MO</span>
              </h2>
              <p>₹249.00/mo when you renew</p>
            </div>
            <div className="flex flex-col space-y-3 pb-2 items-center pt-8 w-full">
              <button className="hover:shadow-lg active:scale-95 transition transform ease-out flex items-center text-xl space-x-3 bg-hostinger-pink shadow-2xl hover:drop-shadow-[0px_0px_10px_#FF306F] px-14 py-3 text-white rounded-xl duration-500 cursor-pointer">
                <span>Select</span>
              </button>
              <p onClick={
                () => router.push("/pricing")
              } className="cursor-pointer scale-90 hover:scale-100 duration-500 font-medium underline underline-offset-2">
                See More
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{
            x: 200,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          className="md:w-1/2 hidden lg:flex flex-col px-8 lg:px-16 justify-between space-y-4 md:space-y-0 py-5"
        >
          {features.map((feature) => {
            return (
              <div
                key={feature.id}
                className="text-white flex items-center space-x-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <p className="font-semibold">{feature.title}</p>
              </div>
            );
          })}
        </motion.div>
        <motion.div
          initial={{
            x: -200,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex lg:hidden flex-col px-8 lg:px-16 justify-between space-y-4 md:space-y-0 py-5"
        >
          {features.map((feature) => {
            return (
              <div
                key={feature.id}
                className="text-white flex items-center space-x-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <p className="font-semibold">{feature.title}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default PriceSec;
