import { motion } from 'framer-motion';
import bfImage from '/Image/background.jpg';
import ProjectCard from './ProjectCard';

const AboutSection = () => {
    const fadeUp = {
        hidden: { opacity: 0,y: 40 },
        show: {  opacity: 1,y: 0},
    };

    return (
        <section
  id="About"
  className="min-h-[2400px] bg-cover bg-no-repeat w-full
    bg-[url('/Image/background3.jpg')]
    md:bg-[url('/Image/background.jpg')]
  "
  style={{ backgroundPosition: 'center top' }}
>


            <div className="md:py-20 px-16 md:px-78">
                <h2 className="text-[#009D66] text-5xl md:text-6xl font-extrabold md:mt-37.5 mt-80 mb-10">
                ABOUT
                </h2>

            <div className="text-white text-lg md:text-2xl mt-[5px] md:min-w-4/6 w-[480px] max-w-2xl leading-relaxed space-y-8">
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
            <div id='Portfolio' className='flex md:py-36 px-6 md:px-75 justify-between mt-30'>
                <div>
                    <img src="/Image/1.jpg" alt="" className='md:w-[2300px] md:h-[250px]' />
                </div>
                <div className='ml-70 -mt-7 '>
                    <div>
                        <h1 className='text-[#009D66] text-5xl font-bold mb-6'>My Skills</h1>
                        <p className='text-white text-2xl mb-10 -ml-[1px]'>Technologies I’ve been working with recently</p>
                    </div>
                    <div className='flex gap-8'>
                        <div className="bg-[#009D66] w-20 h-20 flex items-center justify-center rounded-xl h">
                        <img
                        src="/Image/css.png"
                        alt="GitHub"
                        className="w-15 h-15"
                        />
                    </div>
                    <div className="bg-white w-20 h-20 flex items-center justify-center rounded-xl">
                        <img
                        src="/Image/html.png"
                        alt="GitHub"
                        className="w-13 h-13"
                        />
                    </div>
                    <div className="bg-[#009D66] w-20 h-20 flex items-center justify-center rounded-xl ">
                        <img
                        src="/Image/tailwindcss.png"
                        alt="GitHub"
                        className="w-17 h-11"
                        />
                    </div>
                    <div className="bg-white w-20 h-20 flex items-center justify-center rounded-xl ">
                        <img
                        src="/Image/react.png"
                        alt="GitHub"
                        className="w-13 h-13"
                        />
                    </div>
                    <div className="bg-[#009D66] w-20 h-20 flex items-center justify-center rounded-xl ">
                        <img
                        src="/Image/vscode.png"
                        alt="GitHub"
                        className="w-13 h-13"
                        />
                    </div>
                    </div>
                    {/* second div  */}
                    <div className='mt-8'>
                        <div className='flex gap-8'>
                        <div className="bg-white w-20 h-20 flex items-center justify-center rounded-xl h">
                        <img
                        src="/Image/2.png"
                        alt="GitHub"
                        className="w-13 h-13"
                        />
                    </div>
                    <div className="bg-[#009D66] w-20 h-20 flex items-center justify-center rounded-xl">
                        <img
                        src="/Image/REDUX.png"
                        alt="GitHub"
                        className="w-13 h-13"
                        />
                    </div>
                    <div className="bg-white w-20 h-20 flex items-center justify-center rounded-xl ">
                        <img
                        src="/Image/saas.png"
                        alt="GitHub"
                        className="w-17 h-11"
                        />
                    </div>
                    <div className="bg-[#009D66] w-20 h-20 flex items-center justify-center rounded-xl ">
                        <img
                        src="/Image/github.png"
                        alt="GitHub"
                        className="w-13 h-13"
                        />
                    </div>
                    <div className="bg-white w-20 h-20 flex items-center justify-center rounded-xl ">
                        <img
                        src="/Image/js.png"
                        alt="GitHub"
                        className="w-40 h-13"
                        />
                    </div>
                    </div>
                    </div>
                    
                </div>
            </div>

        {/* projects */}
        <div className='py-1 px-6 md:px-78'>
            <h2 className='text-[#009D66] text-5xl font-bold mb-3'>Selected Projects</h2>
            <p className='text-white text-2xl mb-10 -ml-[1px]'>Some things I’ve worked on so far</p>
            <div><ProjectCard /></div>
        </div>
        </section>

    )
}
export default AboutSection;