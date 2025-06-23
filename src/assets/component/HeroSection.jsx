import { motion } from 'framer-motion';
import bgImage from '../Image/background12.jpg';


const HeroSection = () => {
    const fadeUp = {
        hidden: { opacity: 0,y: 40 },
        show: {  opacity: 1,y: 0},
    };
    return(
        
        <section
  className="min-h-screen bg-cover bg-center bg-no-repeat w-full outline outline-red-500"
  style={{ backgroundImage: `url(${bgImage})` }}
>

  <motion.div
    id="home"
    initial="hidden"
    whileInView="show"
    transition={{ staggerChildren: 1.5 }}
    viewport={{ once: true }}
    className="flex flex-col justify-center items-start  px- md:px-78 md:w-[px] pt-32 md:pt-50"
  >
    <motion.h1
      variants={fadeUp}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="md:text-[90px] text-[#009D66] -ml-6 md:text-left font-bold -mb-8"
    >
      Hello.
    </motion.h1>

    <motion.p
      variants={fadeUp}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="text-[1em] text-white font-extrabold md:text-left -ml-8 leading-[90%] md:text-[150px] font- md:w-[px]"
    >
      I’m a web Developer
    </motion.p>

    <motion.p
      variants={fadeUp}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="md:text-[60px] text-5xl -ml-5 mt-10 text-[#009D66] font-semi-bold leading-tight"
    >
      I build things for the web
    </motion.p>

    <div className="flex items-center -ml-4 gap-60 mt-30">
      <motion.button
        variants={fadeUp}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='h-12 bg-[#009D66] rounded-full hover:bg-green-800'
      >
        <a
          href="/POPOOLA OLUWAGBEMIGA.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black  px-10 py-3  text-3xl font-bold"
        >
          Resume
        </a>
      </motion.button>

      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex gap-6"
      >
        <a
          href="https://www.linkedin.com/in/oluwagbemigapopoola"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-[#009D66] w-12 h-12 flex items-center justify-center rounded-xl hover:bg-green-800">
            <img
              src="src/assets/Image/linkedin.png"
              alt="LinkedIn"
              className="w-8 h-8"
            />
          </div>
        </a>

        <a
          href="https://github.com/Belovethdev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-[#009D66] w-12 h-12 flex items-center justify-center rounded-xl hover:bg-green-800">
            <img
              src="src/assets/Image/github.png"
              alt="GitHub"
              className="w-8 h-8"
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