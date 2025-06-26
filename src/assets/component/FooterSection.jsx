
import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';
import bgmage from '../Image/Bcc 2.jpg';
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
        className="h-[] bg-cover bg-center bg-no-repeat w-full md:h-[900px] md:py- px-6 md:px-78"
          style={{ backgroundImage: `url(${bgmage})` }}>
            <div className='h-[600px] w-[1500px] absolute top-900 bg-[#0a0a0a] border-1 rounded-2xl max-w-7xl py-10 px mt-5 grid md:grid-cols-2 gap-30 items-start'>
                <div className='w-[550px] mt-4 px-6 ml-5 rounded-2xl'>
                    <h2 className='text-white text-3xl font-semibold '>Let's Discuss</h2>
                    <p className='text-white text-3xl font-semibold'>Something <span className='text-[#009D66]'>Innovative</span> Together</p>
                    <p className='text-white mt-10 mb-3 text-[15px] font-bold'>I'm interested in...</p>
                    <div className="flex flex-wrap gap-3 mb-6">
                     {[
                       "Ecommerce Website",
                       "Saas Website",
                       "Portfolio",
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
                            <img src="src/assets/image/call icon.png" alt="" className='w-4 h-4' />
                           </div>
                           <p className='text-white'> +234 705 725 3514</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='w-6 h-6 bg-[#009D66] rounded-full flex items-center justify-center'>
                            <img src="src/assets/image/email icon.png" alt="" className='w-4 h-3' />
                           </div>
                           <p className='text-white'> hello.oluwagbemiga@gmail.com</p>
                           <div className='flex gap-3 ml-30'> 
                             <a
                              href="https://www.linkedin.com/in/oluwagbemigapopoola"
                              target="_blank"
                              rel="noopener noreferrer"
                             >
                             <div className="bg-[#009D66] w-9 h-9 flex items-center justify-center  rounded-xl hover:bg-green-800">
                              <img
                                src="src/assets/Image/linkedin.png"
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
                              src="src/assets/Image/github.png"
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
                <div>
                    <div className="space-y-4 w-[550px]">
                        <div className='flex gap-2'><h3 className="text-[20px] text-white font-semibold ml-2">
                          I’ve got what you need <span className="text-green-400  font-bold text-[28px] mt-1">Lets talk</span> </h3>
                         
                        </div>
                     <form className="space-y-4">
                     <input
                       type="text"
                       placeholder="Your name"
                       className="w-[430px] bg-white text-black px-4 py-5 border-2 border-gren-600 text-sm focus:outline-none focus:ring-2 focus:ring-green-800 rounded"
                      />
                     <input
                      type="email"
                      placeholder="Your email"
                      className="w-[430px] bg-white text-black px-4 py-5 border-2 border-gren-600 text-sm focus:outline-none focus:ring-2 focus:ring-green-800 rounded"
                      />
                     <textarea
                     rows="4"
                     placeholder="Your message"
                     className="w-[430px] h-[170px] bg-white text-black px-4 py-2 border-2 border-gren-600 text-sm focus:outline-none focus:ring-2 focus:ring-green-800  rounded"
                     />
                     <button
                       type="submit"
                       className="w-[430px] bg-[#009D66] hover:bg-green-600 text-black py-2 rounded font-semibold"
                       >
                       Submit
                     </button>
                     </form>
                     <div id='home' className="bg-[] w-8 h-8 flex absolute bottom-27.5 right-6 items-center justify-center rounded-xl hover:bg-green-950">
                             <img
                              src="src/assets/Image/arrow.png"
                              alt="GitHub"
                              className="w-12 h-8"
                              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                             />
                             </div>
                    </div>
                </div>
                
            </div>
            <div className='relative'>
                
            </div>
        </div>
    )
}
export default FooterSection;