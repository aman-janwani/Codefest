import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const FeatureCard = ({feature}) => {
    const videoRef = useRef(null);
    const ItemRef = useRef();
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
  
    return (
      <div ref={ItemRef} onClick={() => {
        ItemRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }} className="flex flex-col-reverse md:flex-row min-w-[20rem] sm:min-w-[25rem] md:min-w-[48rem] lg:min-w-[65rem] px-10 snap-always py-8 hover:shadow-lg hover:scale-105 border-2 duration-[400ms] cursor-pointer border-slate-300 snap-center rounded-2xl justify-evenly md:justify-between">
        {/* Content */}
        <div className="w-full md:w-1/2 flex flex-col space-y-5 justify-evenly">
            <h2 className="text-sm md:text-base font-semibold uppercase text-hostinger-Dark-blue/60 max-w-fit">
                {feature.subject}
            </h2>
            <h3 className="text-2xl md:text-4xl font-bold text-hostinger-Dark-blue max-w-fit">
                {feature.title}
            </h3>
            <p className="font-medium text-hostinger-Dark-blue/80 text-base md:text-lg max-w-md">
                {feature.description}
            </p>
            <p className="text-hostinger-pink cursor-pointer duration-500 max-w-fit hover:underline underline-offset-4">
                {feature.linkText}
            </p>
        </div>
        {/* Video */}
        <div className="w-full md:w-1/2 p-3" ref={ref}>
          <video ref={videoRef} className="rounded-xl w-full" muted playsInline>
            <source
              src={feature.video}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    );
}

export default FeatureCard