import React, { useRef, useState } from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const [featuresList, setFeaturesList] = useState([
    {
      id: 1,
      title: "Easy to set up",
      subject: "EASY TO USE AND SIMPLE",
      linkText: "Learn more",
      description:
        "Getting your website live is as simple as a click of a button. Everything you need - provided in a clear way.",
      video:
        "https://res.cloudinary.com/dfk5jbk5r/video/upload/v1663832888/Hostinger/easy-to-set-up-6e4616539f_d1n5vv.mp4",
    },
    {
      id: 2,
      title: "Lightning-fast websites",
      subject: "PERFORMANCE AND SPEED",
      linkText: "Learn more",
      description:
        "Website speed can slow or grow your business. Delight your visitors with a fast-loading and optimized website.",
      video:
        "https://res.cloudinary.com/dfk5jbk5r/video/upload/v1663835557/Hostinger/simply-fast-websites-ad53591419_hdbmc1.mp4",
    },
    {
      id: 3,
      title: "WordPress made easy",
      subject: "GREAT WORDPRESS EXPERIENCE",
      linkText: "Learn more",
      description:
        "Start your website with an automatic 1-click WordPress installation. The backend is powered by LiteSpeed caching and advanced optimization to ensure your websites are fast, reliable and secure.",
      video:
        "https://res.cloudinary.com/dfk5jbk5r/video/upload/v1663835563/Hostinger/wordpress-made-easy-f182af6a28_abacyn.mp4",
    },
    {
      id: 4,
      title: "24/7 Support",
      subject: "PROFESSIONAL AND HANDS-ON",
      linkText: "Contact us",
      description:
        "Our team of experts will solve technical issues to get your websites up and running. Anytime.",
      video:
        "https://res.cloudinary.com/dfk5jbk5r/video/upload/v1663835572/Hostinger/chat-support-24-7-f281e75a32_qvz9m8.mp4",
    },
    {
      id: 5,
      title: "From micro to large-scale",
      subject: "FLEXIBLE AND SCALABLE",
      linkText: "See all products",
      description:
        "Different projects require different technologies. Pick a plan that matches your current needs, then upgrade and scale as your website grows.",
      video:
        "https://res.cloudinary.com/dfk5jbk5r/video/upload/v1663835579/Hostinger/scale-from-micro-to-large-scale-54c553ecb0_k1ffqs.mp4",
    },
  ]);

  return (
    <div className="flex mb-20 pb-8 pt-20 space-x-20 px-40 scroll-smooth overflow-x-scroll snap-mandatory snap-x">
      {featuresList.map((feature) => {
        return <FeatureCard key={feature.id} feature={feature} />;
      })}
    </div>
  );
};

export default Features;
