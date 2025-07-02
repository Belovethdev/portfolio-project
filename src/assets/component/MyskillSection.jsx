import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
const MyskillSection = () => {
    const fadeUp = {
        hidden: { opacity: 0,y: 40 },
        show: {  opacity: 1,y: 0},
    };
    return (
        <div id='Portfolio' className='flex flex-col md:grid md:grid-cols-2 md:py-28 px-12 md:px-46 justify-between md:items-center md:gap-15 w-full py-6 mt- bg-black'>
                <div className='mt-15'>
                    <img src="/images/workstation.jpg" alt="" className='md:w-full md:h-[330px] w-[312px] h-[186px] rounded' />
                </div>
                <div className='md:ml-30 md:pt-10 mt-5'>
                    <div>
                        <h1 className='text-[#009D66] md:text-[32px] text-[32px] font-bold mb-1 md:mb-4'>My Skills</h1>
                        <p className='text-white text-[18px] md:text-[20px] md:mb-10 mb-8 -ml-[1px]'>Technologies I’ve been working with recently</p>
                    </div>
                    <div className='grid grid-cols-4 md:grid-cols-5 gap-5 md:gap-8'>
                    {/* <div className='md:flex grid grid-cols-4 gap-6'> */}
                        <div className="bg-[#009D66] md:w-20 md:h-20 w-13 h-13 flex items-center justify-center rounded-[px]">
                        <img
                        src="/Image/css.png"
                        alt="GitHub"
                        className="md:w-15 md:h-15 w-11 h-11 "
                        />
                    </div>
                    <div className="bg-white md:w-20 md:h-20 w-13 h-13 flex items-center justify-center rounded-[px]">
                        <img
                        src="/Image/html.png"
                        alt="GitHub"
                        className="md:w-13 md:h-13 w-11 h-11"
                        />
                    </div>
                    <div className="bg-[#009D66] md:w-20 md:h-20 w-13 h-13 flex items-center justify-center rounded-[] ">
                        <img
                        src="/Image/tailwindcss.png"
                        alt="GitHub"
                        className="md:w-17 md:h-11 w-13 h-7"
                        />
                    </div>
                    <div className="bg-white md:w-20 md:h-20 w-13 h-13 flex items-center justify-center rounded-[] ">
                        <img
                        src="/Image/react.png"
                        alt="GitHub"
                        className="md:w-13 md:h-13 w-10 h-9"
                        />
                    </div>
                     <div className="bg-white md:w-20 md:h-20 w-13 h-13 flex items-center justify-center rounded-[px]">
                        <img
                        src="/Image/2.png"
                        alt="GitHub"
                        className="md:w-13 md:h-13 w-8 h-9"
                        />
                    </div>
                    
                    {/* second div  */}
                    {/* <div className='mt-8'> */}
                        {/* <div className='flex gap-8'> */}
                        <div className="bg-[#009D66] md:w-20 md:h-20 w-13 h-13 flex items-center justify-center rounded-[] ">
                        <img
                        src="/Image/vscode.png"
                        alt="GitHub"
                        className="md:w-13 md:h-13 h-9 w-9"
                        />
                    </div>
                    <div className="bg-white md:w-20 md:h-20 w-13 h-13 flex items-center justify-center rounded-[px]">
                        <img
                        src="/Image/saas.png"
                        alt="GitHub"
                        // changes
                        className="md:w-17 md:h-11 w-12 h-11 mx-1 mt-1"
                        />
                    </div>
                    <div className="bg-[#009D66] md:w-20 md:h-20 w-13 h-13 flex items-center justify-center rounded-[px]">
                        <img
                        src="/Image/REDUX.png"
                        alt="GitHub"
                        className="md:w-13 md:h-13 w-8 h-9"
                        />
                    </div>
                    <div className="bg-[#009D66] md:w-20 md:h-20 w-13 h-13 flex items-center justify-center rounded-[px]">
                        <img
                        src="/Image/github.png"
                        alt="GitHub"
                        className="md:w-13 md:h-13 w-8 h-8"
                        />
                    </div>
                    <div className="bg-white md:w-20 md:h-20 w-13 h-13 flex items-center justify-center rounded-[px]">
                        <img
                        src="/Image/js.png"
                        alt="GitHub"
                        className="md:w-40 md:h-13 w-30 h-10"
                        />
                    </div>
                    {/* </div> */}
                    {/* </div> */}
                    {/* </div> */}
                    </div>
                </div>
        
            </div>
    )
}
    export default MyskillSection;