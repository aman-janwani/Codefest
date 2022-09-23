import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Trust = () => {
  return (
    <div className="flex flex-wrap gap-12 md:gap-20 items-center justify-center mx-auto py-10">
      <motion.div initial={{
        x: -100
      }} whileInView={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 1
      }} viewport={{ once: true }}>
        <Image
          src="https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663763095/Hostinger/Frame_6_ubzidx.svg"
          width={163}
          height={36}
          alt="Wordpress"
        />
      </motion.div>
      <motion.div initial={{
        x: 0
      }} whileInView={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 1
      }} viewport={{ once: true }}>
        <Image
          src="https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663763093/Hostinger/Frame_5_v7t706.svg"
          width={137}
          height={35}
          alt="LiteSpeed"
        />
      </motion.div>
      <motion.div initial={{
        x: 50
      }} whileInView={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 1
      }} viewport={{ once: true }}>
        <Image
          src="https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663763084/Hostinger/Frame_4_rfv7pb.svg"
          width={219}
          height={24}
          alt="Cloudflare"
        />
      </motion.div>
    </div>
  );
};

export default Trust;
