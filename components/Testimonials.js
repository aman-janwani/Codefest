import React, { useState } from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const [data, setData] = useState([
    {
      name: "Mukesh Ambani",
      image:
        "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1662386515/landingPage/image_16_kpdnre.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem.",
      position: "CEO, Jio",
    },
    {
      name: "Aman Janwani",
      image:
        "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1639398172/profilepic2_2_1_l6iu0d.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem.",
      position: "Student",
    },
    {
      name: "Thapa Technical",
      image:
        "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663856968/80803717_2351624181764829_4928555558631374848_n.jpg_qr19o2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem.",
      position: "CTO, Jio",
    },
    {
      name: "Thapa Technical",
      image:
        "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663856968/80803717_2351624181764829_4928555558631374848_n.jpg_qr19o2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem.",
      position: "CTO, Jio",
    },
  ]);
  return (
    <div className="text-white bg-hostinger-blue py-14">
      <div className="flex px-3 md:px-10 py-5 max-w-[90rem] mx-auto items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Testimonials
        </h2>
      </div>
      {/* Testimonial Cards */}
      <div className="flex relative snap-x py-5 snap-mandatory space-x-24 px-8 md:px-20 overflow-x-scroll">
        {data.map((item, index) => {
          return <TestimonialCard item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Testimonials;
