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
    <section className="relative md:px-50 w-full min-h-screen overflow-hidden">
      {/* Mobile Background */}
      <div className="absolute inset-0 md:hidden bg-[url('/images/background2.jpg')] bg-cover bg-center bg-no-repeat" />

      {/* Desktop Background */}
      <div className="absolute inset-0 hidden md:block  bg-[url('/images/back.jpg')] bg-cover bg-center bg-no-repeat" />

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
        className="relative z-10 flex flex-col justify-center md:items-start w-full h-screen px-12 md:px-[78px] pt-40 md:pt-[220px]"
      >
        {/* Heading */}
        <motion.h1
          variants={slideRight}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-3xl md:text-[90px] text-[#009D66] text-left font-bold mb- md:mb-0"
        >
          Hello.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={slideRight}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-[40px] md:text-[64px] text-white font-bold text-left mt-2 leading-tight w-full max-w-[900px]"
        >
          I build things for the web
        </motion.p>

        {/* Description */}
        <motion.p
          variants={slideRight}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="md:text-[20px] text-[14px] mt-8 md:mt-10 text-white font-light leading-relaxed w-full max-w-[600px]"
        >
          A developer who loves solving real-world problems through clean, efficient code, building fast, responsive, and user-focused websites with a strong eye for structure, accessibility, and performance.
        </motion.p>

        {/* Resume + Social Links */}
        <motion.div
          variants={slideUp}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="flex flex-row items-start md:items-center gap-10 md:gap-20 mt-10 md:mt-16"
        >
          <button className="h-9.5 bg-[#009D66] rounded hover:bg-green-800 px-6">
            <a
              href="/POPOOLA OLUWAGBEMIGA.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-xl md:text-3xl font-bold"
            >
              Resume
            </a>
          </button>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/oluwagbemigapopoola"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-[#009D66] w-9 md:w-12 h-9 md:h-12 flex items-center justify-center rounded hover:bg-green-800">
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
              <div className="bg-[#009D66] w-9 md:w-12 h-9 md:h-12 flex items-center justify-center rounded hover:bg-green-800">
                <img
                  src="/Image/github.png"
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
