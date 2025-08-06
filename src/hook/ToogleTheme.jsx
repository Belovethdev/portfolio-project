import React, { useEffect, useState } from 'react'

const ToogleTheme = () => {
    const [isDark, setIsDark] = useState(()=>{
        if(typeof window !== "undefined") {
            return (
                localStorage.theme === "dark" ||
                (!localStorage.theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
            )

        }
         return false;
    })

    useEffect(()=>{
        const root = document.documentElement
        if(isDark){
            root.classList.add("dark")
            localStorage.theme = "dark"
        }else{
            root.classList.remove("dark")
            localStorage.theme ="light"
        }
    })
  return (
    <div>
        <button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-4 right-4 p-2 rounded bg-white text-black dark:bg-gray-950 dark:text-white"
    >
      {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
    </div>
  )
}

export default ToogleTheme;