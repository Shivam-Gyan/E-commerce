
import React, { useState, useEffect } from 'react';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const SwiperSlider = ({ offers,Mobileoffers, autoSlide = false, autoSlideInterval = 6000 }) => {
    const [curr, setCurr] = useState(0);
    const [autoSlidePaused, setAutoSlidePaused] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const prev = () =>
        setCurr((curr) => (curr === 0 ? offers.length - 1 : curr - 1));

    const next = () =>
        setCurr((curr) => (curr === offers.length - 1 ? 0 : curr + 1));

    const enterHandler = () => {
        if (autoSlide) {
            setAutoSlidePaused(true);
        }
    };

    const leaveHandler = () => {
        if (autoSlide) {
            setAutoSlidePaused(false);
        }
    };

    useEffect(() => {
        let slideInterval;
        if (autoSlide && !autoSlidePaused) {
            slideInterval = setInterval(next, autoSlideInterval);
        }
        return () => clearInterval(slideInterval);
    }, [curr, autoSlide, autoSlidePaused]);

    useEffect(() => {
        window.addEventListener('resize',
          () => setWindowWidth(window.innerWidth));
    
        return () => {
          window.removeEventListener('resize', () => setWindowWidth(window.innerWidth))
        };
      }, []);

    return (
        <div className="z-30 mt-[60px] sm:mt-16 overflow-hidden relative"
            onMouseEnter={enterHandler}
            onMouseLeave={leaveHandler}>
            <div
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {windowWidth>450? offers.map((item, index) => (
                    <img key={index} src={item?.url} alt={item?.title} className='w-full  sm:h-auto' />
                )):Mobileoffers.map((item, index) => (
                    <img key={index} src={item?.url} alt={item?.title} className='w-full  sm:h-auto' />
                ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                    onClick={prev}
                    className="p-2 sm:p-1 rounded-full shadow bg-white text-slate-800 hover:bg-white/70"
                >
                    <GrFormPrevious className='size-[25px] sm:size-[40px] ' />
                </button>
                <button
                    onClick={next}
                    className="p-2 sm:p-1 rounded-full shadow bg-white text-slate-800 hover:bg-white/70"
                >
                    <GrFormNext className='size-[25px] sm:size-[40px] ' />
                </button>
            </div>

            <div className="absolute bottom-1 sm:bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {offers.map((_, i) => (
                        <div
                            key={i}
                            className={` cursor-pointer
                            transition-all w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full
                            ${curr === i ? "p-1 sm:p-2" : "bg-opacity-50"}
                        `}
                        onClick={()=> setCurr(i)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SwiperSlider;
