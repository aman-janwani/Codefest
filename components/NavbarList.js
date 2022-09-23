import React, { useState } from "react";
import { motion } from "framer-motion";

const NavbarList = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      key={item.id}
      className="flex flex-col text-hostinger-Dark-blue border-b-2 p-3 justify-center min-w-[20rem] max-w-[20rem]"
    >
      <div className="flex space-x-4 items-center">
        <p className="text-lg font-semibold">{item.name}</p>
        {isHovered ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 cursor-pointer"
            onClick={() => setIsHovered(!isHovered)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4  cursor-pointer"
            onClick={() => {
              setIsHovered(!isHovered);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </div>
      <div className="flex items-center justify-center">
        {isHovered && (
          <div className="flex flex-col space-y-1 my-3 bg-hostinger-blue/5">
            {item.menu.map((subItem) => {
              return (
                <div
                  key={subItem.id}
                  className="border-t-2 p-3 flex items-center min-w-[20rem] max-w-[20rem]"
                >
                  <a
                    href={subItem.link}
                    key={subItem.id}
                    className="text-sm duration-500 scale-90 hover:scale-100"
                  >
                    {subItem.name}
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarList;
