import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const [servicesList, setServicesList] = useState([
    {
      id: 1,
      title: "Free SSL",
      image:
        "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663766810/Hostinger/Services/free-ssl-c672bc7cfb_r2zn2r.svg",
    },
    {
      id: 2,
      title: "Free Migration",
      image:
        "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663766825/Hostinger/Services/free-migration-913e6bfab2_ds0hmg.svg",
    },
    {
      id: 3,
      title: "PHP Speed Boost",
      image:
        "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663766832/Hostinger/Services/php-speed-boost-f7850027dc_nrbojq.svg",
    },
    {
      id: 4,
      title: "24/7/365 Tech Support",
      image:
        "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663766840/Hostinger/Services/tech-support-ebf15a3d83_wiulwy.svg",
    },
    {
      id: 5,
      title: "Access Management",
      image:
        "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663766849/Hostinger/Services/access-management-01f91d3436_nhdcln.svg",
    },
    {
      id: 6,
      title: "Automated backups",
      image:
        "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663766862/Hostinger/Services/backups-2d6e895cf1_psnuoo.svg",
    },
    {
      id: 7,
      title: "LiteSpeed Cache Plugin",
      image:
        "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663766878/Hostinger/Services/litespeed-wp-module-e0e9453f3c_oynols.svg",
    },
    {
      id: 8,
      title: "Auto Script Installer",
      image:
        "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663766884/Hostinger/Services/script-installer-6fe9e03c5c_y2sins.svg",
    },
    {
      id: 9,
      title: "eCommerce Optimization",
      image:
        "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663766891/Hostinger/Services/ecommerce-c7adac5be7_lghrcp.svg",
    },
    {
      id: 10,
      title: "DDoS Protection",
      image:
        "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663766911/Hostinger/Services/cloudflare-d1bcbdabc9_kceepp.svg",
    },
    {
      id: 11,
      title: "One-Click WordPress Installation",
      image:
        "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663766919/Hostinger/Services/wp-installation-2161a49ee3_pbymvx.svg",
    },
    {
      id: 12,
      title: "99.9% Uptime Guarantee",
      image:
        "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663766923/Hostinger/Services/uptime-guarantee-1e9eae1cb0_iqfzc4.svg",
    },
  ]);
  return (
    <div className="text-hostinger-Dark-blue flex flex-col items-center py-12">
      <motion.div
        initial={{
          x: -100,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold">Our services</h2>
      </motion.div>
      <div className="p-10 mt-10 grid grid-rows-4 grid-flow-col overflow-x-scroll gap-10 bg-hostinger-Dark-blue/10 pl-6 pr-4 w-11/12  rounded-2xl">
        {/* Services List */}
        {servicesList.map((service) => {
          return (
            <>
            <motion.div
              initial={{
                x: -100,
              }}
              transition={{
                duration: 1.5,
              }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              key={service.id}
              className="items-center flex space-x-4 min-w-[20rem]"
            >
              <Image
                alt={service.title}
                src={service.image}
                width={40}
                height={40}
              />
              <h3 className="text-xl font-bold">{service.title}</h3>
            </motion.div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
