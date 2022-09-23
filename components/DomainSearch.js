import React from "react";
import { motion } from "framer-motion";

const DomainSearch = () => {
  return (
    <div className="bg-hostinger-blue text-white flex flex-col space-y-10 items-center py-14">
      <motion.div
        initial={{
          x: -100,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        className="flex flex-col space-y-8 items-center "
      >
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold">
          Find the perfect domain name
        </h2>
        <p className="text-base font-medium text-[#F5F5F5] max-w-2xl text-center">
          Enter domain name of your choice and pick any extension name on the
          next step (choose between .in, .com, .online, .live, .store, .info and
          many more)
        </p>
      </motion.div>
      <motion.div
        initial={{
          x: -100,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        className="bg-white duration-500 text-hostinger-Dark-blue w-11/12 lg:w-7/12 flex justify-between rounded-xl"
      >
        <input
          className="flex-grow text-base md:text-lg py-4 px-6 rounded-l-xl outline-none border-none focus:bg-hostinger-Dark-blue/5"
          type="text"
          placeholder="Type in that perfect domain name"
        />
        <button className="bg-hostinger-pink hover:brightness-110 duration-500 text-white font-semibold text-base md:text-lg rounded-r-xl px-8 md:px-16 py-4">
          <span className="hidden md:block">Search</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 md:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </motion.div>
    </div>
  );
};

export default DomainSearch;
