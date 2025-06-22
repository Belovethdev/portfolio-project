import { motion } from 'framer-motion';
import bgImage from '../Image/bcc.jpg';

// git remote add origin https://github.com/Belovethdev/my-portfolio.git
// git branch -M main
// git push -u origin main

const HeroSection = () => {
    const fadeUp = {
        hidden: { opacity: 0,y: 40 },
        show: {  opacity: 1,y: 0},
    };
    return(
        
        <section className="w-[375px] h-[588px]  bg-center bg-cover relative bg-no-repeat md:bg-no-repeat md:bg-center md:bg-cover md:w-[1840px] md:h-[4500px] "
      style={{backgroundImage: `url(${bgImage})` }}>
            <motion.div
                id="home"
                initial="hidden"
                whileInView="show"
                transition={{ staggerChildren: 1.5 }}
                viewport={{ once: true }} 
                className='min-h-screen flex flex-col px-30 pt-80 ml-2'
            >
                <motion.h1
                    variants={fadeUp}
                    transition={{   duration: 0.8, delay: 0.5 }}
                    className='text-[90px] text-[#009D66] font-bold mb'
                >
                    Hello.
                    
                </motion.h1>
                <motion.p
                    variants={fadeUp}
                    transition={{  duration: 0.8, delay: 0.5 }}
                    className='text-[220px] w-[1100px] text-white font-bold tracking-[0%] leading-[80%]'
                >
                   I’m a web Developer
                    
                </motion.p>
                <motion.p
                    variants={fadeUp}
                    transition={{  duration: 0.8, delay: 0.5 }}
                    className='text-[90px] w-[px] my-18 text-[#009D66] font- tracking-[0%] leading-[90%]'
                >
                   I build things for web
                    
                </motion.p>
                <div className='flex justify-between gap- w-[600px] mt-[30px]'>
                    <motion.button
                    variants={fadeUp}
                    transition={{   duration: 0.8, delay: 0.5 }}>
                        <a href="/POPOOLA OLUWAGBEMIGA.pdf"
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-black bg-[#009D66] px-10 py-3 text-center rounded-[50px] hover:bg-green-800 text-4xl tracking-[0%] leading-[] font-bold'>Resume</a>
                    </motion.button>
                    <motion.div 
                        variants={fadeUp}
                    transition={{   duration: 0.8, delay: 0.5 }}
                        className='flex gap-10'>
                        <a href="https://www.linkedin.com/in/oluwagbemigapopoola" target="_blank" rel="noopener noreferrer">
                            <div className='bg-[#009D66] w-20 h-20 items-center flex justify-center rounded-2xl hover:bg-green-800'>
                            <img src="src/assets/Image/linkedin.png" alt="LinkedIn" className='w-10 h-10' />
                            </div>
                        </a>

                        <a href="https://github.com/Belovethdev" target="_blank" rel="noopener noreferrer">
                            <div className='bg-[#009D66] w-20 h-20 items-center flex justify-center rounded-2xl hover:bg-green-800'>
                            <img src="src/assets/Image/github.png" alt="GitHub" className='w-10 h-10' />
                            </div>
                        </a>
                    </motion.div>
                </div>

                <div id="About" className='relative top-100'>
                    <h2 className='text-[#009D66] text-9xl font-bold'>About</h2>
                </div>
                
            </motion.div>
        </section>
        
        
    )
}
export default HeroSection;