import { motion } from 'framer-motion';

const slideRight = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0 },
};

const slideUp = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  return (
<section className="relative w-full min-h-screen overflow-hidden dark:bg-black dark:text-black px-4 md:px-16">
  {/* Mobile Background */}
  <div className="absolute inset-0 md:hidden h-[60rem] md:h-100vh w-100% bg-[url('/images/background22.jpg')] bg-cover bg-center bg-no-repeat" />

  {/* Desktop Background */}
  <div className="absolute inset-0 hidden md:block bg-[url('/images/background22.jpg')] bg-cover bg-center bg-no-repeat" />

   {/* Horizontal Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-95" />

    {/* Vertical Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-70 z-0" />

  {/* Content */}
  <motion.div
    id="home"
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.5 }}
    variants={{
      show: {
        transition: {
          staggerChildren: 0.4,
        },
      },
    }}
    className="relative z-10 flex flex-col justify-center md:items-start md:gap-[10px] md:w-[640px] md:h-[318px] mt px-10 md:top-[200px] md:pl-[120px] pt-50"
  >
    {/* Heading */}
        <motion.h1
          variants={slideRight}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-3xl md:text-[66px] w-[300px] md:w-[800px] text-[#38EDCA] text-left font-bold  md:mb-0"
        >
          Designing Experiences, Building the Future.
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={slideRight}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="md:text-[18px] text-[14px] mt-8 md:mt-10 text-white font-semibold leading-relaxed w-full max-w-[2000px]"
        >
          A developer who loves solving real-world problems through clean, efficient code, building fast, responsive, and user-focused websites with a strong eye for structure, accessibility, and performance.
        </motion.p>

        {/* Resume + Social Links */}
        <motion.div
          variants={slideUp}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-row items-start md:items-center gap-10 md:gap-40 mt-20 md:mt-16"
        >
          <button className="md:h-[50px] md:w-[161px] h-7 bg-[#38EDCA] rounded hover:bg-[#04B390] px-4">
            <a
              href="/POPOOLA OLUWAGBEMIGA.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-xl md:text-3xl font-bold"
            >
              Resume
            </a>
          </button>

          <div className="flex md:gap-8 gap-4">
            <a
              href="https://www.linkedin.com/in/oluwagbemigapopoola"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-[#38EDCA] w-7 md:w-12 h-7 md:h-12 flex items-center justify-center rounded hover:bg-[#04B390]">
                <img
                  src="/images/linkedin.png"
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
              <div className="bg-[#38EDCA] w-7 md:w-12 h-7 md:h-12 flex items-center justify-center rounded hover:bg-[#04B390]">
                <img
                  src="/images/github.png"
                  alt="GitHub"
                  className="w-5 h-5 md:w-8 md:h-8"
                />
              </div>
            </a>
          </div>
        </motion.div>
  </motion.div>
</section>
 );
};

export default HeroSection;
