import { motion } from 'framer-motion';
import bgImage from '/Image/background12.jpg';


const HeroSection = () => {
    const slideRight = {
        hidden: { opacity: 0,y: 40 },
        show: {  opacity: 1,y: 0},
    };
    return(
        
        <section
  className="min-h-[650px] bg-cover bg-center bg-no-repeat w-full 
  bg-[url('/images/background2.jpg')]
    md:bg-[url('/images/back.jpg')]
"
  // style={{ backgroundImage: "url('images/back.jpg" }}
>

  <motion.div
    id="home"
    initial="hidden"
    whileInView="show"
    transition={{ staggerChildren: 2.5 }}
    viewport={{ once: true }}
    className="flex flex-col justify-center md:items-start  px-16 md:px-78 md:w-[px] pt-40 md:pt-55"
  >
    <motion.h1
      variants={slideRight}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="md:text-[90px]
      text-3xl md:text-5xl text-[#009D66] -ml-7 text-left font-bold md:-mb-5"
    > 
      Hello.
    </motion.h1>

    <motion.p
      variants={slideRight}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="text-[40px] text-white font-bold md:text-left mt-2 -ml-7 leading-[130%] md:text-[150px] md:w-[900px] w-[300px]"
    >
      I build things for the web
    </motion.p>
    
    {/* <motion.p
      variants={fadeUp}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="md:text-[60px] text-[16px] -ml-7 md:mt-10 mt-8 text-[#009D66] font-semibold leading-tight"
    >
      I build things for the web
    </motion.p> */}
    <motion.p
      variants={slideRight}
      transition={{ duration: 0.8, delay: 0.9 }}
      className="md:text-[60px] w-[280px] text-[14px] -ml-7 md:mt-10 mt-8 text-white font-light leading-[150%]"
    >
       A developer who loves solving real-world problems through clean, efficient code, building fast, responsive, and user-focused websites with a strong eye for structure, accessibility, and performance. My goal is to create digital experiences that are both useful and enjoyable.
    </motion.p>
   

    <div className="flex md:items-center bg-red- md:flex-row -ml-6 md:gap-60 gap-25 mt-20 md:mt-30">
      <motion.button
        variants={slideRight}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='h-9 md:h-8 bg-[#009D66] w-[80px] flex items-center rounded hover:bg-green-800'
      >
        <a
          href="/POPOOLA OLUWAGBEMIGA.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black  px-8 py-3 text-left mb-1 -ml-5 text-[16px] md:text-3xl font-bold"
        >
          Resume
        </a>
      </motion.button>

      <motion.div
        variants={slideRight}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex gap-4"
      >
        <a
          href="https://www.linkedin.com/in/oluwagbemigapopoola"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-[#009D66] md:w-12 w-9 md:h-12 h-9 flex items-center justify-center rounded hover:bg-green-800">
            <img
              src="/Image/linkedin.png"
              alt="LinkedIn"
              className="w-5 h-5 md:w-8 md:h-8"
            />
          </div>
        </a>

        <a
          href="https://github.com/Belovethdev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-[#009D66] md:w-12 w-9 md:h-12 h-9 flex items-center justify-center rounded hover:bg-green-800">
            <img
              src="/Image/github.png"
              alt="GitHub"
              className="w-5 h-5 md:w-8 md:h-8"
            />
          </div>
        </a>
      </motion.div>
    </div>
  </motion.div>
</section>

        
        
    )
}
export default HeroSection;