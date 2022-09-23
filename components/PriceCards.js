import React from "react";

const PriceCards = ({ item }) => {
  return (
    <div className="bg-white mb-11 flex flex-col justify-between items-center space-y-5 p-8 text-hostinger-Dark-blue shadow-lg rounded-xl min-w-[20rem] max-w-[20rem] min-h-[28rem] max-h-[28rem]">
      <h3 className="text-xl font-semibold">{item.title}</h3>
      <h2 className="text-4xl font-bold flex items-end">
        <span className="flex items-start">
          <span className="text-base">₹</span>
          {item.price}.00
        </span>
        <span className="text-base">/ {item.duration}</span>
      </h2>
      <div className="flex flex-col space-y-2">
        {item.features.map((fea) => {
          return (
            <div
              key={fea.id}
              className=" flex items-center space-x-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-emerald-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <p className="font-semibold">{fea.feature}</p>
            </div>
          );
        })}
      </div>
      <button className="flex hover:shadow-lg text-white active:scale-90 transition transform ease-out items-center justify-center text-xl space-x-3 bg-hostinger-pink shadow-2xl hover:drop-shadow-[0px_0px_10px_#FF306F] w-full px-14 py-3 rounded-xl duration-500 cursor-pointer">
        <span>Get Started</span>
      </button>
    </div>
  );
};

export default PriceCards;
