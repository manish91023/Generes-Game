

import React, { useContext, useEffect, useState } from 'react'
import logo from './../assets/Images/console.png'
import { HiMagnifyingGlass, HiSun } from "react-icons/hi2";
import { FaMoon, FaSun } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { ThemeContext } from '../Context/ThemeContext';



const Header = () => {
    const [toggle, setToggle] = useState(false)
    const {theme,setTheme}=useContext(ThemeContext)

    useEffect(()=>{
        console.log("theme",theme)
    })
    return (
        <div className='flex items-center p-3'>
            <img src={logo} alt="logo" width={50} height={50} />
            <div className='flex bg-slate-200 p-2 w-full items-center rounded-full mx-5'>
                <HiMagnifyingGlass />
                <input placeholder='Search Games' className=' bg-transparent outline-none' type="text" />
            </div>
            <div>
                {theme=='light' ? <FaMoon
                 onClick={()=>{setTheme('dark');localStorage.setItem('theme','dark')}}
                 className='text-[35px] bg-slate-200 text-black rounded-full p-1 cursor-pointer' /> : <FiSun 
                 onClick={()=>{setTheme('light');localStorage.setItem('theme','light')}}
                 className='text-[35px] bg-slate-200 text-black rounded-full p-1 cursor-pointer' />}
            </div>
        </div>
    )
}

export default Header