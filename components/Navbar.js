import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import NavbarList from "./NavbarList";
import { motion } from "framer-motion";


const Navbar = () => {
  const [list, setList] = useState([
    {
      id: 1,
      name: "Hosting",
      link: "#",
      menu: [
        {
          id: 1,
          name: "Web Hosting",
          link: "#",
          image:
            "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663683385/Hostinger/shared-hosting-ico-3b9eae97d4_zhldq0.svg",
        },
        {
          id: 2,
          name: "Cloud Hosting",
          link: "#",
          image:
            "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663683376/Hostinger/cloud-hosting-ico-8b3eacbef9_k9rbsm.svg",
        },
        {
          id: 3,
          name: "WordPress Hosting",
          link: "#",
          image:
            "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663683370/Hostinger/wordpress-hosting-ico-f260728d34_sfcbkx.svg",
        },
      ],
    },
    {
      id: 2,
      name: "VPS",
      link: "#",
      menu: [
        {
          id: 1,
          name: "VPS Hosting",
          link: "#",
          image:
            "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663683441/Hostinger/vps-hosting-ico-ae5dec82ad_zuwdgy.svg",
        },
        {
          id: 2,
          name: "CyberPanel Hosting",
          link: "#",
          image:
            "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663683432/Hostinger/cyber-panel-vps-hosting-ico-85f6512246_cli3pk.svg",
        },
        {
          id: 3,
          name: "Minecraft Server Hosting",
          link: "#",
          image:
            "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663683423/Hostinger/minecraft-hosting-ico-48c44ca8a8_gk6uu5.svg",
        },
      ],
    },
    {
      id: 3,
      name: "Email",
      link: "#",
      menu: [
        {
          id: 1,
          name: "Google Workspace Email Hosting",
          link: "#",
          image:
            "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663683627/Hostinger/workspace-email-hosting-ico-f6d95080f4_fs4xdp.svg",
        },
        {
          id: 2,
          name: "Hostinger Email Hosting",
          link: "#",
          image:
            "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663683411/Hostinger/titan-email-hosting-ico-adbf24006e_jf30u0.svg",
        },
      ],
    },
    {
      id: 4,
      name: "Domain",
      link: "#",
      menu: [
        {
          id: 1,
          name: "Domain Name Search",
          link: "#",
          image:
            "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663683453/Hostinger/domain-checker-ico-9f56a54b4a_puxtsr.svg",
        },
        {
          id: 2,
          name: "WHOIS Lookup",
          link: "#",
          image:
            "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663683460/Hostinger/whois-ico-05661c09d0_rfnzrl.svg",
        },
        {
          id: 3,
          name: "Domain Transfer",
          link: "#",
          image:
            "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663683467/Hostinger/domain-transfer-ico-2a5c55e300_g2os8l.svg",
        },
      ],
    },
  ]);

  const [isOpened, setIsOpened] = useState(false);
  const [isHovered, setIsHovered] = useState(0);
  const [show, setShow] = useState(false);

  const handleChange = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
      window.addEventListener('scroll', handleChange)
      return () => window.removeEventListener('scroll', handleChange)
  }, [])

  const router = useRouter();

  return (
    <div className="sticky w-full top-0 z-50 ">
      <div className={`px-7 py-5 z-50 bg-hostinger-blue navbar backdrop-blur-xl flex justify-between items-center text-white ${show && ("nav_stickey")}`}>
        <div className="flex items-center space-x-5 md:space-x-10 w-8/12 min-w-[18rem] md:w-2/12 lg:w-3/12">
          {show ? (
            <Image
            src="https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663594669/Hostinger/Frame_1_ctkikb.svg"
            width={148}
            height={28}
            alt="Logo"
          />
          ) : (
            <Image
            src="https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663594678/Hostinger/Frame_2_bmll62.svg"
            width={148}
            height={28}
            alt="Logo"
          />
          )}
          <div className="flex items-center space-x-4">
            <Image
              src="https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663594950/Hostinger/image_9_1_yvfvbg.svg"
              width={30}
              height={18}
              alt="India"
            />
            <p className="text-sm hidden lg:block font-semibold">English</p>
            <p className="text-sm lg:hidden font-semibold">IN</p>
          </div>
        </div>
        {/*  */}
        <div
          onClick={() => {
            setIsOpened(!isOpened);
          }}
          className="flex cursor-pointer items-center md:hidden hover:bg-hostinger-Dark-blue/5 p-2 rounded-full"
        >
          {isOpened ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
        {/*  */}
        <div className="hidden md:flex items-center justify-evenly w-5/12 space-x-2">
          {list.map((item) => {
            return (
              <div
              key={item.id}
                className=""
                onClick={() => {
                  if (isHovered === item.id) {
                    setIsHovered(0);
                  } else {
                    setIsHovered(item.id);
                  }
                }}
              >
                <div
                  key={item.id}
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <p className="text-base font-semibold">{item.name}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
                {isHovered === item.id ? (
                    <div
                    className={`absolute w-fit h-fit bg-white rounded-lg p-5 shadow-md top-20 my-5 text-hostinger-Dark-blue`}
                  >
                    {item.menu.map((item) => {
                      return (
                        <div
                          key={item.id}
                          className="flex items-center p-2 hover:bg-hostinger-blue/10 duration-500 rounded-md cursor-pointer"
                        >
                          <Image alt={item.name} src={item.image} width={40} height={40} />
                          <p className="text-base font-semibold">{item.name}</p>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  ""
                  )}
              </div>
            );
          })}
        </div>
        {/*  */}
        <div className="hidden md:flex w-2/12 lg:w-3/12 items-center space-x-3 justify-end">
          <div onClick={() => {
            router.push('/login')
          }} className={`flex w-2/6 lg:max-w-[8rem] lg:min-w-[8rem] justify-evenly px-3 py-2 border-2 cursor-pointer ${show ? ("border-hostinger-Dark-blue") : ("border-white")} rounded-xl`}>
            <Image
              src="https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663596025/Hostinger/Purple_Icons_Set_1_-_Copy_-_Copy_4-1366x657_vxm2bo.svg"
              width={20}
              height={24}
              alt="Login"
            />
            <p className="text-base hidden lg:block font-medium">Login</p>
          </div>
          <div className="flex w-2/6 justify-evenly cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>

            <p className="text-base hidden lg:block font-medium">Cart</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className={`flex ${isOpened ? ("w-screen h-screen ") : ("w-0 h-0")} justify-end bg-transparent top-20 fixed right-0`}>
        {isOpened && (
          <motion.div initial={{
            x: 300,
          }}
          transition={{
            duration: 1.5,
          }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}  className="md:hidden flex flex-col h-fit items-center space-y-5 bg-white shadow-md min-w-[20rem] max-w-[20rem] rounded-2xl m-2">
            <div className={`flex flex-col duration-700`}>
              {list.map((item) => {
                return <NavbarList key={item.id} item={item} />;
              })}
            </div>
            <div className="flex flex-col items-center space-y-5 justify-end py-5">
              <div onClick={() => {
            router.push('/login')
          }}  className="flex max-w-[15rem] min-w-[15rem] scale-95 hover:scale-100 duration-500 justify-center space-x-4 cursor-pointer px-3 py-2 border-2 border-hostinger-Dark-blue rounded-xl">
                <Image
                  src="https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663596025/Hostinger/Purple_Icons_Set_1_-_Copy_-_Copy_4-1366x657_vxm2bo.svg"
                  width={20}
                  height={24}
                  alt="Login"
                />
                <p className="text-base font-medium">Login</p>
              </div>
              <div className="flex max-w-[15rem] min-w-[15rem] scale-95 hover:scale-100 duration-500 justify-center space-x-4 cursor-pointer px-3 py-">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>

                <p className="text-base font-medium">Cart</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
