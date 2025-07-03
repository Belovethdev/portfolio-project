// import { useEffect, useState } from 'react';

// const ThemeToggle = () => {
//   const [isDark, setIsDark] = useState(() => {
//     // Check localStorage or system preference
//     if (localStorage.theme === 'dark') return true;
//     if (localStorage.theme === 'light') return false;
//     return window.matchMedia('(prefers-color-scheme: dark)').matches;
//   });

//   useEffect(() => {
//     const root = window.document.documentElement;
//     if (isDark) {
//       root.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       root.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     }
//   }, [isDark]);

//   return (
//     <button
//       onClick={() => setIsDark(!isDark)}
//       className="fixed top-4 right-4 p-2 rounded bg-gray-200 text-black dark:bg-gray-800 dark:text-white"
//     >
//       {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
//     </button>
//   );
// };

// export default ThemeToggle;
