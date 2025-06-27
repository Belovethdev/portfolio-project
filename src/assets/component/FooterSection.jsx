
import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';
import bgmage from '/images/Bcc 2.jpg';
import React, { useState, useEffect } from 'react';

const FooterSection = () => {
    useEffect(() => {
        const handleScroll = () => {
          setIsFixed(window.scrollY > 0); // fixed once you scroll down at all
        };
        window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
    // const fadeUp = {
    //     hidden: { opacity: 0,y: 40 },
    //     show: {  opacity: 1,y: 0},
    // };
    return (
        <div id='Contact'
        className="h-[1500px] bg-cover bg-center bg-no-repeat w-full md:h-[950px] md:py- px-10 md:px-78
    //     bg-[url('/images/Bcc 2.jpg')]
    // md:bg-[url('/images/mobile.jpg')]"
          style={{ backgroundImage: `url(${bgmage})` }}
          >
            <div className='md:h-[600px] md:w-[1300px] w-[350px] h-[1350px] absolute top-660 md:top-900  rounded-2xl py-10 mt-5 grid md:grid-cols-2 md:gap-30 items-start'>
                <div className='md:w-[550px] w-[px] mt-4 ml-5 rounded-2xl'>
                    <h2 className='text-white w-[400px] flex items-center  text-[29px] font-semibold '>Let's Discuss Something</h2>
                    <p className='text-white text-[30px] font-semibold'> <span className='text-[#009D66]'>Innovative</span> Together</p>
                    <p className='text-white mt-10 mb-3 text-[20px] font-semibold'>I'm interested in...</p>
                    <div className="flex flex-wrap md:gap-3 gap-4 mb-6">
                     {[
                       "Ecommerce Website",
                       "Portfolio",
                       "Saas Website",
                       "Landing Page",
                       "Movie Website",
                       "Blog Website",
                     ].map((tag) => (
                      <span
                        key={tag}
                        className="px-6 py-1 text-sm bg-transparent border border-[#009D66] text-white hover:text-black hover:bg-green-800 hover:font-semibold rounded-[8px]"
                        >
                       {tag}
                     </span>
                     ))}
                    </div>
                    <button className="bg-[#009D66] text-black font-semibold px-2 py-1 rounded-[8px] hover:bg-green-800 mt-15 text-[15px]">
                      Hire me Now
                    </button>

                    <div className="text-sm space-y-2 mt-4">
                        <div className='flex items-center gap-3'>
                            <div className='w-6 h-6 bg-[#009D66] rounded-full flex items-center justify-center'>
                            <img src="/Image/call icon.png" alt="" className='w-4 h-4' />
                           </div>
                           <p className='text-white text-[16px]'> +234 705 725 3514</p>
                        </div>
                        <div className='flex md:flex-row flex-col md:items-center gap-3'>
                            <div className='flex gap-4'><div className='w-6 h-6 bg-[#009D66] rounded-full flex items-center justify-center'>
                            <img src="/Image/email icon.png" alt="" className='w-4 h-3' />
                           </div>
                           <p className='text-white text-[16px]'> hello.oluwagbemiga@gmail.com</p></div>
                           <div className='flex gap-6 mt-5 md:ml-30'> 
                             <a
                              href="https://www.linkedin.com/in/oluwagbemigapopoola"
                              target="_blank"
                              rel="noopener noreferrer"
                             >
                             <div className="bg-[#009D66] w-9 h-9 flex items-center justify-center  rounded-xl hover:bg-green-800">
                              <img
                                src="/Image/linkedin.png"
                                alt="LinkedIn"
                                className="w-5 h-5"
                              />
                              </div>
                             </a>

                              <a
                                href="https://github.com/Belovethdev"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                             <div className="bg-[#009D66] w-9 h-9 flex items-center justify-center rounded-xl hover:bg-green-800">
                             <img
                              src="/Image/github.png"
                              alt="GitHub"
                              className="w-5 h-5"
                             />
                             </div>
                             </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right */}
                
                    <div className=" space-y-4 w-[300px] md:w-[550px] px-7">
                        <div className='flex gap'><h3 className="text-[18px] text-white w-[200px] font-semibold ml-2">
                          I’ve got what you need <span className="text-[#009D66]  font-bold text-[25px] mt-">Lets talk</span> </h3>
                         
                        </div>
                     <form className="space-y-4">
                     <input
                       type="text"
                       placeholder="Your name"
                       className="w-[298px] md:w-[430px] bg-white text-black px-4 py-5 border-2 border-gren-600 text-sm focus:outline-none focus:ring-2 focus:ring-green-800 rounded"
                      />
                     <input
                      type="email"
                      placeholder="Your email"
                      className="w-[298px] md:w-[430px] bg-white text-black px-4 py-5 border-2 border-gren-600 text-sm focus:outline-none focus:ring-2 focus:ring-green-800 rounded"
                      />
                     <textarea
                     rows="4"
                     placeholder="Your message"
                     className="w-[298px] md:w-[430px] h-[170px] bg-white text-black px-4 py-2 border-2 border-gren-600 text-sm focus:outline-none focus:ring-2 focus:ring-green-800  rounded"
                     />
                     <button
                       type="submit"
                       className="w-[298px] md:w-[430px] bg-[#009D66] hover:bg-green-600 text-black py-2 rounded font-semibold"
                       >
                       Submit
                     </button>
                     </form>
                     <div id='home' className="flex-col gap w-8 h-8 flex absolute md:mt-[0px] mt-10 md:bottom-27.5 right-39 md:right-6 items-center justify-center rounded-xl hover:bg-green-950">
                             <img
                              src="/Image/arrow.png"
                              alt="GitHub"
                              className="w-12 h-8"
                              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                             />
                             {/* <p className="text-[14px] leading-[24px] text-white tracking-normal font-[355px] w-[400px] mt-20 h-[24px] text-center">© 2025 BelovethDev. All rights reserved.</p> */}
                             </div>
                             <p className="text-[12px] absolute  leading-[24px] text-[#AEAEAE] tracking-normal font-[355] w-[300px] mt-40 x] text-center ">© 2025 BelovethDev. All rights reserved.</p>
                    </div>
            </div>
        </div>
    )
}
export default FooterSection;