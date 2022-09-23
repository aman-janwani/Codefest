import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="bg-hostinger-blue py-10 lg:py-0 h-[95%] text-white px-7 flex flex-col space-y-4 lg:space-y-0 lg:flex-row items-center justify-between rounded-b-[80px] md:rounded-b-[150px]">
      <motion.div
        initial={{
          x: -200,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        className="flex flex-col space-y-10 items-center"
      >
        <h2 className="text-3xl xl:text-4xl text-center font-extrabold">
          Savings to Set Your Website in Motion
        </h2>
        <h2 className="text-6xl font-semibold flex items-end">
          <span className="flex items-start">
            <span className="text-xl">₹</span>
            149.00
          </span>
          <span className="text-xl">/MO</span>
        </h2>
        <p className="text-base font-semibold max-w-md text-center">
          Make moves with a free domain and SSL included with a four-year
          subscription.
        </p>
        <div className="flex items-start space-x-4">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl lg:text-6xl">01</h2>
            <p>Days</p>
          </div>
          <span className="text-4xl lg:text-6xl">:</span>
          <div className="flex flex-col items-center">
            <h2 className="text-4xl lg:text-6xl">12</h2>
            <p>Hours</p>
          </div>
          <span className="text-4xl lg:text-6xl">:</span>
          <div className="flex flex-col items-center">
            <h2 className="text-4xl lg:text-6xl">38</h2>
            <p>Minutes</p>
          </div>
          <span className="text-4xl lg:text-6xl">:</span>
          <div className="flex flex-col items-center">
            <h2 className="text-4xl lg:text-6xl">40</h2>
            <p>Seconds</p>
          </div>
        </div>
        <button className="flex hover:shadow-lg active:scale-90 transition transform ease-out items-center text-xl space-x-3 bg-hostinger-pink shadow-2xl hover:drop-shadow-[0px_0px_10px_#FF306F] px-14 py-4 rounded-xl duration-500 cursor-pointer">
          <span>Get Started</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </button>
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
      >
        <div className="hidden lg:block lg:max-h-[450px] lg:max-w-[500px] lg:min-h-[450px] lg:min-w-[500px] xl:max-h-[600px] xl:max-w-[700px] xl:min-h-[600px] xl:min-w-[700px] bg-cover bg-[url('https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663592592/Hostinger/Room_-_Girl_Working_-_Copy_7-1366x657_1_xtgxfw.svg')]"> </div>
      </motion.div>
    </div>
  );
};

export default Banner;
