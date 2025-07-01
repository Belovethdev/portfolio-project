import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser'; // ✅ Import EmailJS

const words = ['Innovative', 'Exciting', 'Creative', 'Brilliant', 'Cool'];

const FooterSection = () => {
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false); // ✅ Success message
  const form = useRef();
    const [showSuccess, setShowSuccess] = useState(false);

  // Cycle words every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const wordVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeOut' } },
  };

  // ✅ ✅ ✅ The sendForm handler
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_sdohg7m',  // <-- change to your EmailJS Service ID
        'template_eh2wbt5', // <-- your EmailJS Template ID
        form.current,
        'SZxZS6St1vL3R9fVf'   // <-- your EmailJS Public Key
      ).then(
      (result) => {
        console.log(result.text);
        setShowSuccess(true);
        form.current.reset();

        // ✅ Auto-close after 4 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 4000);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };


  return (
    <motion.div
      id="Contact"
      className="h-[1480px] bg-cover bg-center bg-black bg-no-repeat relative w-full md:h-full md:pt-30 py-10 px-4 md:px-34
  bg-[url('/images/footer.jg')] md:bg-[url('/images/Bcc 2.jg')]"
  initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }} // animate once when 30% visible
      variants={fadeUp}
    >
      <motion.div className="md:h-[600px] md:w-[1300px] w-full h-[1350px] md:top-900 rounded-2xl py- mt-5 grid md:grid-cols-2 gap-0 md:gap-30 md:items-start"
      variants={fadeUp}
      >
        {/* leftdiv */}
        <div className="md:w-[550px] w-full h-full mt- ml-5 rounded-2xl px-5 bg-cover bg-center bg-no-repeat bg-[url('/images/footer1.jpg')] md:bg-[url('/images/Bcc .jpg')]">
          <h2 className="text-white flex items-center md:mt-2 mt-25 md:text-[36px] text-[29px] font-semibold">
            Let's Discuss Something
          </h2>
          <p className="text-white md:text-[35px] text-[30px] font-semibold flex items-center">
            <span className="mr-2">
              {/* AnimatePresence for animating changing words */}
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  variants={wordVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.6 }}
                  className="text-[#009D66] inline-block"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>{' '}
            Together
          </p>
          {/* rest of your code remains unchanged */}
          <p className="text-white mt-10 mb-3 text-[20px] font-semibold">I'm interested in...</p>
          <div className="flex flex-wrap md:gap-3 gap-4 mb-6">
            {[
              'Ecommerce Website',
              'Portfolio',
              'Saas Website',
              'Landing Page',
              'Movie Website',
              'Blog Website',
            ].map((tag) => (
              <span
                key={tag}
                className="px-6 py-1 text-sm bg-transparent border border-[#009D66] text-white hover:text-black hover:bg-green-800 hover:font-semibold rounded-[8px]"
              >
                {tag}
              </span>
            ))}
          </div>
          <button className="bg-[#009D66] text-black font-semibold px-2 py-1 rounded-[8px] hover:bg-green-800 mt-15 text-[15px]"> <a href="#form">Hire me Now</a>
            
          </button>

          <div className="text-sm space-y-2 mt-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#009D66] rounded-full flex items-center justify-center">
                <img src="/Image/call icon.png" alt="" className="w-4 h-4" />
              </div>
              <p className="text-white text-[16px]"> +234 705 725 3514</p>
            </div>
            <div className="flex md:flex-row flex-col md:items-center gap-3">
              <div className="flex gap-4">
                <div className="w-6 h-6 bg-[#009D66] rounded-full flex items-center justify-center">
                  <img src="/Image/email icon.png" alt="" className="w-4 h-3" />
                </div>
                <p className="text-white text-[16px] md:mb-"> hello.oluwagbemiga@gmail.com</p>
              </div>
              <div className="flex gap-6 md:mt-[2px] mt-5 md:ml-30">
                <a
                  href="https://www.linkedin.com/in/oluwagbemigapopoola"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-[#009D66] w-9 h-9 flex items-center justify-center rounded hover:bg-green-800">
                    <img src="/Image/linkedin.png" alt="LinkedIn" className="w-5 h-5" />
                  </div>
                </a>

                <a
                  href="https://github.com/Belovethdev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-[#009D66] w-9 h-9 flex items-center justify-center rounded hover:bg-green-800">
                    <img src="/Image/github.png" alt="GitHub" className="w-5 h-5" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* right */}
        <div id='form' className="space-y-4 w-full md:mt-[15px] -mt-40 md:w-[550px] bg-black px-5 flex justify-center flex-col">
          <div className="flex gap">
            <h3 className="text-[17px] text-white font-semibold ml-2">
              I’ve got what you need{' '}
              <span className="text-[#009D66] font-bold text-[25px]">Lets talk</span>{' '}
            </h3>
          </div>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input
              type="text"
              name="user_name"
              placeholder="Your name"
              required
              className="w-[95%] h-[50px] md:w-[400px] bg-white text-black px-4 py-4 border-2 border-green-600 text-sm focus:outline-none focus:ring-2 focus:ring-green-800 rounded"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your email"
              required
              className="w-[95%] h-[50px] md:w-[400px] bg-white text-black px-4 py-4 border-2 border-green-600 text-sm focus:outline-none focus:ring-2 focus:ring-green-800 rounded"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your message"
              required
              className="w-[95%] md:w-[400px] h-[170px] bg-white text-black px-4 py-2 border-2 border-green-600 text-sm focus:outline-none focus:ring-2 focus:ring-green-800 rounded"
            />
            <button
              type="submit"
              className="w-[95%] md:w-[400px] bg-[#009D66] hover:bg-green-600 text-black py-2 rounded font-semibold"
            >
              Submit
            </button>
          </form>

          {/* ✅ Success Message */}
      {showSuccess && (
        <div className="mt-4 text-green-500 font-semibold">
          ✅ Thank you for your message!
        </div>
          )}

          {/* <div
            id="home"
            className="flex-col w-8 h-8 flex absolute md:mt-[0px] mt-12 md:bottom-60 right-54 md:right-30 items-center justify-center rounded-xl hover:bg-green-950"
          >
            <img
              src="/Image/arrow.png"
              alt="arrow"
              className="w-12 h-8"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
          </div> */}
          
        </div>
      </motion.div>
      {/* Copyright Text Centering */}
  <div className="absolute bottom-0 left-0 right-0 md:mb-8 md:mt-10 flex justify-center items-center py-4">
    <p className="text-[12px] md:text-[18px] leading-[24px] text-[#AEAEAE] tracking-normal font-[355] text-center">
      © 2025 BelovethDev. All rights reserved.
    </p>
  </div>
    </motion.div>
  );
};

export default FooterSection;
