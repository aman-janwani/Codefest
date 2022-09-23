import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const ControlPanelSec = () => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });


  useEffect(() => {
    if (inView) {
      videoRef.current.play();
    } else {
      if (inView) {
        videoRef.current.pause();
      }
    }
  }, [inView]);

  const [list, setList] = useState([
    {
      id: 1,
      title: "Ease of Use",
      description:
        "Hostinger Panel is extremely user-friendly and can be used by those with little experience in website development.",
      image:
        "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663848829/Hostinger/Frame_7_raeadr.svg",
    },
    {
      id: 2,
      title: "Powerful",
      description:
        "A wide variety of tools to satisfy advanced user and website developer needs.",
      image:
        "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663848831/Hostinger/Frame_8_kobpha.svg",
    },
    {
      id: 3,
      title: "WordPress Optimized",
      description:
        "Get more speed, better SEO, visitor retention and conversions with our custom-built WP optimization stack and LiteSpeed cache.",
      image:
        "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663683370/Hostinger/wordpress-hosting-ico-f260728d34_sfcbkx.svg",
    },
  ]);

  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center text-hostinger-Dark-blue">
      <motion.div initial={{
            x: -100,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }} className="w-full md:w-7/12 p-3" ref={ref}>
        <video ref={videoRef} className="rounded-xl w-full" muted playsInline>
          <source
            src={
              "https://res.cloudinary.com/dfk5jbk5r/video/upload/v1663835591/Hostinger/user-friendly-cp-2020-7ab2c70b24_kpfkiu.mp4"
            }
            type="video/mp4"
          />
        </video>
      </motion.div>
      <motion.div initial={{
            x: -100,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }} className="md:w-5/12 flex flex-col">
        <h2 className="text-2xl md:text-3xl font-bold pb-10 mx-auto">
          User-Friendly Control Panel
        </h2>
        <div className="md:max-w-md max-w-lg mx-auto flex flex-col space-y-10">
          {list.map((item) => {
            return (
              <div key={item.id} className="flex scale-95 hover:scale-100 duration-500 cursor-pointer items-center space-x-5 rounded-xl p-3">
                <Image alt="img" src={item.image} width={50} height={50} />
                <div className="flex flex-col space-y-3 max-w-[18rem] md:max-w-xs">
                  <h3 className="font-bold text-2xl">{item.title}</h3>
                  <p className="text-sm font-medium">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default ControlPanelSec;
