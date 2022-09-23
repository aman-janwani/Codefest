import React, { useState } from "react";
import { motion } from "framer-motion";
import PriceCards from "./PriceCards";

const PricingMain = () => {
    const [pricing, setPricing] = useState([
        {
            id: 1,
            title: "Single",
            price: "69",
            duration: "mo",
            features: [
                {
                    id: 1,
                    feature: "Full-Featured Control Panel",
                },
                {
                    id: 2,
                    feature: "Free SSL",
                },
                {
                    id: 3,
                    feature: "99.9% Uptime Guarantee",
                },
                {
                    id: 4,
                    feature: "DNS management",
                },
                {
                    id: 5,
                    feature: "Weekly Backups",
                },
                {
                    id: 6,
                    feature: "Multiple PHP Versions",
                },
            ]},
        {
            id: 2,
            title: "Premium",
            price: "149",
            duration: "mo",
            features: [
                {
                    id: 1,
                    feature: "Free Domain Registration",
                },
                {
                    id: 2,
                    feature: "MySQL Databases",
                },
                {
                    id: 3,
                    feature: "99.9% Uptime Guarantee",
                },
                {
                    id: 4,
                    feature: "SSH Access",
                },
                {
                    id: 5,
                    feature: "InnoDB",
                },
                {
                    id: 6,
                    feature: "Webmail access",
                },
            ]},
        {
            id: 3,
            title: "Business",
            price: "249",
            duration: "mo",
            features: [
                {
                    id: 1,
                    feature: "Daily Backups",
                },
                {
                    id: 2,
                    feature: "Email Accounts",
                },
                {
                    id: 3,
                    feature: "99.9% Uptime Guarantee",
                },
                {
                    id: 4,
                    feature: "File Manager",
                },
                {
                    id: 5,
                    feature: "phpMyAdmin",
                },
                {
                    id: 6,
                    feature: "1-Click Installer",
                },
            ]}

    ])
  return (
    <div className="mb-20">
      <div className="bg-hostinger-blue py-10 h-[95%] text-white px-7 flex flex-col space-y-4 lg:space-y-0 lg:flex-row items-center justify-between rounded-b-[80px] md:rounded-b-[100px]">
        <motion.div
          initial={{
            x: -200,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col space-y-10 w-full items-center"
        >
          <h2 className="text-3xl xl:text-4xl text-center my-20 font-extrabold">
            Pricing
          </h2>
        </motion.div>
      </div>
      <div className="-mt-16 flex items-center px-8 lg:justify-center space-x-10 overflow-x-scroll ">
        {pricing.map((item) => {
            return (
                <PriceCards key={item.id} item={item} />
            )
        })}
      </div>
    </div>
  );
};

export default PricingMain;
