import Image from "next/image";
import React from "react";

const TestimonialCard = ({ item }) => {
  return (
    <div className="snap-center border-2 border-slate-300 mt-14 md:flex relative min-w-[350px] max-w-[350px] min-h-[210px] max-h-[210px] rounded-2xl cursor-pointer scale-90 hover:scale-100 -rotate-12 hover:rotate-0 duration-700">
      <div className="absolute top-0 -mr-16 -mt-8 left-0 h-32">
        <Image
          src={item.image}
          alt="profile"
          width={80}
          height={80}
          className="rounded-full bg-white"
        />
      </div>
      <div className="flex flex-col justify-evenly py-5 space-y-5 lg:space-y-0 lg:py-0 items-end rounded-2xl px-7">
        <div className="px-8 mx-auto max-w-[15rem]">
          <h2 className="text-lg font-bold">{item.name}</h2>
          <p className="text-sm font-semibold">{item.position}</p>
        </div>
        <div className="static">
          <p className="text-sm font-semibold line-clamp-5 tracking-wide">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;