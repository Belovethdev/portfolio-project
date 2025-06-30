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
      className="md:py-50 px-12 md:px-78 h-full bg-cover bg-center bg-no-repeat w-full
      bg-[url('/images/mobile.jpg')] md:bg-[url('/images/background.jpg')]"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }} // animate once when 30% visible
      variants={fadeUp}
    >
      <h2 className="text-[#009D66] text-3xl md:text-6xl font-extrabold md:mt-37.5 md:pt-0 pt-20 md:pb-0 pb-10 mb- md:mb-10">
        ABOUT
      </h2>

      <motion.div
        className="text-white text-[14px]  md:text-2xl mt-10 md:mt-[5px] md:min-w-4/6 w-[280px] max-w-2xl leading-[180%] space-y-8"
        variants={fadeUp}
      >
        <p>
          Frontend Developer who specializes in modern JavaScript and React.js, with 1+ year of experience crafting high performance, and scalable web applications.
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

export default AboutSection