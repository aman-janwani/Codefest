import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import MoneyBack from '../components/MoneyBack';
import Navbar from '../components/Navbar';
import PricingMain from '../components/PricingMain';

const Pricing = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }, []);
  
    // console.log(loading);
  
    if (loading) {
      return (
        <div className={`flex overflow-hidden h-screen bg-hostinger-Dark-blue/5 w-screen justify-center items-center`}>
          <Head>
            <title>Hostinger</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663594437/Hostinger/image_11_1_fgff04.svg" />
          </Head>
          <div className="animate-test overflow-hidden relative w-full h-full flex justify-center items-center">
            <Image
              src="https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663856004/Hostinger/logo-homepage2020-f9c79137d7_li99ai.svg"
              alt="loader"
              width={200}
              height={40}
              objectFit="contain"
              layout="fill"
            />
          </div>
        </div>
      );
    }

  return (
    <div className="bg-slate-200">
      <Head>
        <title>Prcing | Choose Hostinger and Host Your Site for Only ₹129.00/mo</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dfk5jbk5r/image/upload/v1663594437/Hostinger/image_11_1_fgff04.svg"
        />
      </Head>
      <main className="font-['Nunito'] max-w-[95rem] bg-white mx-auto">
        {/* Navbar */}
        <Navbar />
        {/* Main Component */}
        <PricingMain />
        {/* Money Back */}
        <MoneyBack />
        {/* Footer */}
        <Footer />
      </main>
    </div>
  )
}

export default Pricing