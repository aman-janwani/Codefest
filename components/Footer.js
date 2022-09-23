import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const [payment, setPayment] = useState([
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663853599/Hostinger/visa-5d68dadf24_vgxu1g.png",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663853593/Hostinger/mastercard-ca75c7f8d3_tnnxk9.png",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663853589/Hostinger/discover-1e5edf3f39_kr7ktl.png",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663853578/Hostinger/dinersclub-3f02e2deec_mtsrdq.png",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663853573/Hostinger/rupay-2bad18f6df_cwxecw.png",
    },
  ]);

  const [links, setLinks] = useState([
    {
      id: 1,
      title: "hosting",
      link: [
        {
          id: 1,
          title: "Web Hosting",
        },
        {
          id: 2,
          title: "VPS Hosting",
        },
        {
          id: 3,
          title: "Minecraft Server Hosting",
        },
        {
          id: 4,
          title: "CyberPanel Hosting",
        },
        {
          id: 5,
          title: "Cloud Hosting",
        },
        {
          id: 6,
          title: "WordPress Hosting",
        },
        {
          id: 7,
          title: "Email Hosting",
        },
        {
          id: 8,
          title: "CMS Hosting",
        },
        {
          id: 9,
          title: "Ecommerce Hosting",
        },
        {
          id: 10,
          title: "Free Web Hosting",
        },
        {
          id: 11,
          title: "Online Store",
        },
        {
          id: 12,
          title: "Website Builder",
        },
        {
          id: 13,
          title: "Buy Hosting",
        },
      ],
    },
    {
      id: 2,
      title: "domains",
      link: [
        {
          id: 1,
          title: "Domain Name Search",
        },
        {
          id: 2,
          title: "Domain Transfer",
        },
        {
          id: 3,
          title: "Free Domain Name",
        },
        {
          id: 4,
          title: "XYZ Domain",
        },
        {
          id: 5,
          title: "Cheap Domain",
        },
        {
          id: 6,
          title: "Domain Extensions",
        },
        {
          id: 7,
          title: "WHOIS Lookup",
        },
        {
          id: 8,
          title: "Free SSL Certificate",
        },
      ],
    },
    {
      id: 3,
      title: "Information",
      link: [
        {
          id: 1,
          title: "Migrate to Hostinger",
        },
        {
          id: 2,
          title: "System Status",
        },
        {
          id: 3,
          title: "Affiliate Program",
        },
        {
          id: 4,
          title: "Payment Methods",
        },
        {
          id: 5,
          title: "Rewards",
        },
        {
          id: 6,
          title: "Reviews",
        },
        {
          id: 7,
          title: "Pricing",
        },
        {
          id: 8,
          title: "Sitemap",
        },
      ],
    },
    {
      id: 4,
      title: "Company",
      link: [
        {
          id: 1,
          title: "About Hostinger",
        },
        {
          id: 2,
          title: "Our Technology",
        },
        {
          id: 3,
          title: "Roadmap",
        },
        {
          id: 4,
          title: "Customer Care",
        },
        {
          id: 5,
          title: "Blog",
        },
      ],
    },
    {
      id: 5,
      title: "Legal",
      link: [
        {
          id: 1,
          title: "Privacy Policy",
        },
        {
          id: 2,
          title: "Terms of Service",
        },
      ],
    },
    {
      id: 6,
      title: "Help",
      link: [
        {
          id: 1,
          title: "Tutorials",
        },
        {
          id: 2,
          title: "Knowledge Base",
        },
        {
          id: 3,
          title: "Report Online Abuse",
        },
      ],
    },
  ]);

  return (
    <div className="bg-hostinger-Dark-blue/10 text-hostinger-Dark-blue">
      <div className="px-7 py-8 flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div>
          <Image
            src="https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663856004/Hostinger/logo-homepage2020-f9c79137d7_li99ai.svg"
            width={200}
            height={40}
            alt="Logo"
          />
          <p className="max-w-xs md:max-w-md text-sm md:text-base font-medium my-5">
            We are a web hosting company with a mission to help everyone who
            goes online succeed. We accomplish this by continuously developing
            server technology, giving expert assistance, and ensuring a flawless
            online website hosting experience.
          </p>
        </div>
        {/* Payments Avalible */}
        <div className="flex space-x-5">
          {payment.map((pay) => {
            return (
              <div className="hover:scale-110 duration-500 cursor-pointer" key={pay.id}>
                <Image src={pay.image} width={50} height={30} alt="Payments" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="px-7 grid grid-cols-2 sm:grid-cols-3 gap-10 lg:grid-cols-6 py-8">
        {/* Links */}
        {links.map((link) => {
          return (
            <div key={link.id} className="flex flex-col space-y-4">
              <div className="font-bold uppercase">{link.title}</div>
              <div className="flex flex-col space-y-2">
                {link.link.map((link) => {
                  return (
                    <motion.div initial={{
                      x: -50,
                    }}
                    transition={{
                      duration: 1,
                    }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}  key={link.id}>
                      <p className="hover:scale-105 cursor-pointer hover:underline underline-offset-2 duration-500">
                        {link.title}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-hostinger-blue/10 flex items-center justify-between flex-wrap px-7 py-4">
        <div className="flex items-center justify-center md:justify-start w-full md:w-3/4">
            <p className="font-semibold ">© 2022 Aman Janwani</p>
        </div>
        <div className="flex items-center justify-center md:justify-start w-full md:w-1/4">
        <p className="font-semibold ">Prices are listed without VAT</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
