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
  className="min-h-[1500px] h-[2000px] bg-cover bg-center bg-no-repeat w-full
    bg-[url('/images/mobile.jpg')]
    md:bg-[url('/images/background.jpg')]
  "
  style={{ backgroundPosition: 'center top' }}
>


            <div className="md:py-20 px-12 md:px-78">
                <h2 className="text-[#009D66] text-3xl md:text-6xl font-extrabold md:mt-37.5 mt-30 mb-8 md:mb-10">
                ABOUT
                </h2>

            <div className="text-white text-[14px] md:text-2xl md:mt-[5px]  md:min-w-4/6 w-[280px] max-w-2xl leading-[150%] space-y-8">
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
            <div id='Portfolio' className='flex flex-col md:flex-row md:py-36 px-12 md:px-85 justify-between py-6 mt-30'>
                <div>
                    <img src="/images/workstation.jpg" alt="" className='md:w-[2300px] md:h-[365px] w-[312px] h-[186px] rounded' />
                </div>
                <div className='md:ml-20 md:mt-[2px] mt-5'>
                    <div>
                        <h1 className='text-[#009D66] md:text-5xl text-[32px] font-bold mb-2 md:mb-6'>My Skills</h1>
                        <p className='text-white text-[16px] md:text-2xl md:mb-10 mb-8 -ml-[1px]'>Technologies I’ve been working with recently</p>
                    </div>

                    <div className='md:flex grid grid-cols-4 gap-2'>
                        <div className="bg-[#009D66] md:w-20 md:h-20 w-15 h-15 flex items-center justify-center rounded-[px]">
                        <img
                        src="/Image/css.png"
                        alt="GitHub"
                        className="md:w-15 md:h-15 w-11 h-11 "
                        />
                    </div>
                    <div className="bg-white md:w-20 md:h-20 w-15 h-15 flex items-center justify-center rounded-[px]">
                        <img
                        src="/Image/html.png"
                        alt="GitHub"
                        className="md:w-13 md:h-13 w-11 h-11"
                        />
                    </div>
                    <div className="bg-[#009D66] md:w-20 md:h-20 w-15 h-15 flex items-center justify-center rounded-[] ">
                        <img
                        src="/Image/tailwindcss.png"
                        alt="GitHub"
                        className="md:w-17 md:h-11 w-13 h-7"
                        />
                    </div>
                    <div className="bg-white md:w-20 md:h-20 w-15 h-15 flex items-center justify-center rounded-[] ">
                        <img
                        src="/Image/react.png"
                        alt="GitHub"
                        className="md:w-13 md:h-13 w-10 h-9"
                        />
                    </div>
                    <div className="bg-[#009D66] md:w-20 md:h-20 w-15 h-15 flex items-center justify-center rounded-[] ">
                        <img
                        src="/Image/vscode.png"
                        alt="GitHub"
                        className="md:w-13 md:h-13 h-9 w-9"
                        />
                    </div>
                    
                    {/* second div  */}
                    {/* <div className='mt-8'> */}
                        {/* <div className='flex gap-8'> */}
                        <div className="bg-white md:w-20 md:h-20 w-15 h-15 flex items-center justify-center rounded-[px]">
                        <img
                        src="/Image/2.png"
                        alt="GitHub"
                        className="md:w-13 md:h-13 w-8 h-9"
                        />
                    </div>
                    <div className="bg-[#009D66] md:w-20 md:h-20 w-15 h-15 flex items-center justify-center rounded-[px]">
                        <img
                        src="/Image/REDUX.png"
                        alt="GitHub"
                        className="md:w-13 md:h-13 w-8 h-9"
                        />
                    </div>
                    <div className="bg-white md:w-20 md:h-20 w-15 h-15flex items-center justify-center rounded-[px]">
                        <img
                        src="/Image/saas.png"
                        alt="GitHub"
                        // changes
                        className="md:w-17 md:h-11 w-14 h-11 mx-1 mt-2"
                        />
                    </div>
                    <div className="bg-[#009D66] md:w-20 md:h-20 w-15 h-15 flex items-center justify-center rounded-[px]">
                        <img
                        src="/Image/github.png"
                        alt="GitHub"
                        className="md:w-13 md:h-13 w-8 h-8"
                        />
                    </div>
                    <div className="bg-white md:w-20 md:h-20 w-15 h-15 flex items-center justify-center rounded-[px]">
                        <img
                        src="/Image/js.png"
                        alt="GitHub"
                        className="md:w-40 md:h-13 w-30 h-10"
                        />
                    </div>
                    {/* </div> */}
                    {/* </div> */}
                    </div>
                    
                </div>
            </div>

        {/* projects */}
        <div className='py-1 px-12 md:px-78'>
            <h2 className='text-[#009D66] text-[32px] md:text-5xl font-bold mb-1 md:mb-3'>Selected Projects</h2>
            <p className='text-white text-[16px] md:text-2xl mb-5 md:mb-10 -ml-[1px]'>Some things I’ve worked on so far</p>
            <div><ProjectCard /></div>
        </div>
        </section>

    )
}
export default AboutSection;