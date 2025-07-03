import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from "../component/NavBar";
import FooterSection from '../component/FooterSection';

const MainLayout = () => {
    return (
        <>
        <NavBar />
        <Outlet/>
        {/* <FooterSection/> */}
        </>
    )
}
export default MainLayout;


// import React, { useEffect, useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import Navbar from '../component/NavBar';
// import FooterSection from '../component/FooterSection';

// const MainLayout = () => {
//   const [darkMode, setDarkMode] = useState(() => {
//     if (localStorage.theme === 'dark') return true;
//     if (localStorage.theme === 'light') return false;
//     return window.matchMedia('(prefers-color-scheme: dark)').matches;
//   });

//   useEffect(() => {
//     const root = window.document.documentElement;
//     if (darkMode) {
//       root.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       root.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     }
//   }, [darkMode]);

//   return (
//     <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen transition-colors duration-300">
//       <Navbar />
      
//       {/* Toggle Button (you can style or move it) */}
//       <div className="fixed top-4 right-4 z-50">
//         <button
//           onClick={() => setDarkMode(prev => !prev)}
//           className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-800 text-sm"
//         >
//           {darkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
//         </button>
//       </div>

//       {/* Routed Page Content */}
//       <Outlet />

//       <FooterSection />
//     </div>
//   );
// };

// export default MainLayout;
