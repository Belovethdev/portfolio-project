import { motion } from 'framer-motion';
import bfImage from '../Image/background.jpg';
import ProjectCard from './ProjectCard';

const AboutSection = () => {
    const fadeUp = {
        hidden: { opacity: 0,y: 40 },
        show: {  opacity: 1,y: 0},
    };

    return (
        <section
  id="About"
  className="min-h-[3000px] bg-cover bg-no-repeat w-full"
  style={{ backgroundImage: `url(${bfImage})`, backgroundPosition: 'center top 0%' }}
>


            <div className="md:py-40 px-6 md:px-78">
                <h2 className="text-[#009D66] text-6xl md:text-6xl font-extrabold mt-[150px] mb-10">
                ABOUT
                </h2>

           `` <div className="text-white text-lg md:text-2xl mt-[5px] max-w-2xl leading-relaxed space-y-8">
                <p>
                    Frontend Developer who specializes in modern JavaScript
                    and React.js, with 1+ year of experience crafting high performance, and
                    scalable web applications.
                </p>
                <p>
                    Skilled in Tailwind CSS, HTML5, and CSS3, with a strong
                    focus on responsive design, accessibility, and crossbrowser
                    compatibility. Passionate about transforming
                    UI/UX designs into seamless, interactive experiences
                    through clean, and maintainable code.
                                </p>
                <p>
                    Collaborative team player who bridges the gap between
                    design and backend development to deliver optimized,
                    user-centric solutions. Eager to bring technical expertise
                    and innovative problem-solving to a forward-thinking
                    engineering team.
                </p>
            </div>
            </div>
            <div className='flex py-32 px-6 md:px-75 justify-between mt-10'>
                <div>
                    <img src="src/assets/Image/1.jpg" alt="" className='md:w-[900px] ' />
                </div>
                <div className='ml-50'>
                    <div>
                        <h1 className='text-[#009D66] text-5xl font-bold mb-6'>My Skills</h1>
                        <p className='text-white text-2xl mb-10 -ml-[1px]'>Technologies I’ve been working with recently</p>
                    </div>
                    <div className='flex gap-15'>
                        <div className="bg-[#009D66] w-20 h-20 flex items-center justify-center rounded-xl h">
                        <img
                        src="src/assets/Image/css.png"
                        alt="GitHub"
                        className="w-20 h-20"
                        />
                    </div>
                    <div className="bg-white w-20 h-20 flex items-center justify-center rounded-xl">
                        <img
                        src="src/assets/Image/html.png"
                        alt="GitHub"
                        className="w-18 h-18"
                        />
                    </div>
                    <div className="bg-[#009D66] w-20 h-20 flex items-center justify-center rounded-xl ">
                        <img
                        src="src/assets/Image/tailwindcss.png"
                        alt="GitHub"
                        className="w-22 h-16"
                        />
                    </div>
                    <div className="bg-white w-20 h-20 flex items-center justify-center rounded-xl ">
                        <img
                        src="src/assets/Image/react.png"
                        alt="GitHub"
                        className="w-18 h-18"
                        />
                    </div>
                    <div className="bg-[#009D66] w-20 h-20 flex items-center justify-center rounded-xl ">
                        <img
                        src="src/assets/Image/vscode.png"
                        alt="GitHub"
                        className="w-18 h-18"
                        />
                    </div>
                    </div>
                    {/* second div  */}
                    <div className='mt-15'>
                        <div className='flex gap-15'>
                        <div className="bg-white w-25 h-25 flex items-center justify-center rounded-xl h">
                        <img
                        src="src/assets/Image/2.png"
                        alt="GitHub"
                        className="w-18 h-18"
                        />
                    </div>
                    <div className="bg-[#009D66] w-25 h-25 flex items-center justify-center rounded-xl">
                        <img
                        src="src/assets/Image/REDUX.png"
                        alt="GitHub"
                        className="w-18 h-18"
                        />
                    </div>
                    <div className="bg-white w-25 h-25 flex items-center justify-center rounded-xl ">
                        <img
                        src="src/assets/Image/saas.png"
                        alt="GitHub"
                        className="w-22 h-16"
                        />
                    </div>
                    <div className="bg-[#009D66] w-25 h-25 flex items-center justify-center rounded-xl ">
                        <img
                        src="src/assets/Image/github.png"
                        alt="GitHub"
                        className="w-18 h-18"
                        />
                    </div>
                    <div className="bg-white w-25 h-25 flex items-center justify-center rounded-xl ">
                        <img
                        src="src/assets/Image/js.png"
                        alt="GitHub"
                        className="w-35 h-18"
                        />
                    </div>
                    </div>
                    </div>
                    
                </div>
            </div>

        {/* projects */}
        <div className='py-1 px-6 md:px-78'>
            <h2 className='text-[#009D66] text-7xl font-bold mb-3'>Selected Projects</h2>
            <p className='text-white text-4xl mb-10 -ml-[1px]'>Some things I’ve worked on so far</p>
            <div><ProjectCard /></div>
        </div>
        </section>

    )
}
export default AboutSection;