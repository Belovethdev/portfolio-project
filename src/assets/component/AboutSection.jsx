import { motion } from 'framer-motion';

const AboutSection = () => {
  // Variants for fade up animation
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      id="About"
      className="relative md:py-30 px-12 md:px-46 h-full bg-cover bg-center dark:bg-black dark:text-white bg-no-repeat w-full
             bg-[url('/images/mobile3.jpg')] md:bg-[url('/images/screen.jpg')]"
      
      
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }} // animate once when 30% visible
      variants={fadeUp}
    >
        {/* Gradient overlay - only visible on md+ screens */}
  <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
    {/* <div className="w-full h-full bg-gradient-to-r from-black via-transparent to-transparent" /> */}
    <div className="w-full h-100 bg-gradient-to-b from-black/70 via-transparent to-transparent absolute top-0 left-0" />
  </div>
      <h2 className="text-[#38EDCA] text-3xl md:text-[32px] font-extrabold md:mt- md:pt-0 pt-20 md:pb-0 pb-10 md:mb-10">
        ABOUT
      </h2>

      <motion.div
        className="text-white text-[14px]  md:text-[20px] mt- md:mt-[5px] md:min-w-4/6 w-[280px] max-w-6xl leading-[180%] space-y-8"
        variants={fadeUp}
      >
        <p>
          Frontend Developer who specializes in modern JavaScript and React.js, with 2years + of experience crafting high performance, and scalable web applications.
        </p>
        <p>
          Skilled in Tailwind CSS, HTML5, and CSS3, with a strong focus on responsive design, accessibility, and crossbrowser compatibility. Passionate about transforming UI/UX designs into seamless, interactive experiences through clean, and maintainable code.
        </p>
        <p>
          Collaborative team player who bridges the gap between design and backend development to deliver optimized, user-centric solutions. Eager to bring technical expertise and innovative problem-solving to a forward-thinking engineering team.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AboutSection;