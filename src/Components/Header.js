import React from 'react'
import { HiShoppingCart } from "react-icons/hi2";
import {NavLink} from 'react-router-dom'
function Header() {
  return (
    <nav className='w-[100%] shadow-2xl fixed z-10' style={{boxShadow:"2px 4px 20px rgb(0,0,0,0.5)"}}>
      <div className='flex flex-row justify-between text-xl font-semibold p-8 bg-slate-800 px-24 text-white'>
      <div>
        <NavLink to={'/'}><h1 className='text-3xl' style={{ fontFamily: "Comic Sans MS" }}>Shopping App</h1></NavLink>
      </div>
      <ul className='flex justify-around gap-10'>
        <li><NavLink to={"/"} className={({isActive})=>`${isActive?"text-yellow-500 border-b-4 border-b-transparent":"border-b-4 border-b-transparent hover:border-b-yellow-500 duration-500"}`}>Home</NavLink></li>
        <li><NavLink className={({isActive})=>`${isActive?"flex justify-center place-items-center gap-1 text-yellow-500 border-b-4 border-b-transparent":"flex justify-center place-items-center gap-1 border-b-4 border-b-transparent hover:border-b-yellow-500 duration-500"}`} to={"/cart"}>Cart <HiShoppingCart className='mt-1'></HiShoppingCart></NavLink></li>
      </ul>
    </div>
    </nav>
  )
}

export default Header
