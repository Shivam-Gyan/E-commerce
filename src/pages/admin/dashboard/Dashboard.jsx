import React, { useEffect, useState } from 'react'
import { useContextState } from '../../../context/Context'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { HiUsers } from "react-icons/hi2";
import { FaCartArrowDown } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { FaCircleInfo } from "react-icons/fa6";


const Dashboard = () => {
  const [value, setValue] = useState("Other Info")
  const navigate=useNavigate()
  const { mode } = useContextState()
  const handleClick = (e) => {
    setValue(e.target.innerText)
  }
  useEffect(() => {
    navigate("/dashboard/Other-info");
  },[]);

  return (

    <div className='h-[100%] bg-slate-300  transform rotate-180 '>

      <div className=' h-screen lg:h-[700px] px-4 py-20 w-full flex flex-col text-center lg:flex-row gap-5 transform rotate-180'>
        {/* left panel */}
        <div className={` w-full lg:w-40 py-10 lg:my-5  flex flex-row flex-wrap sm:flex-nowrap lg:flex-col lg:justify-start gap-5 md:gap-10  items-center text-center rounded-md ${mode === "dark" ? 'bg-slate-900 text-white' : "bg-slate-700 text-slate-200"}`}>
          <div className=' mx-auto md:mx-0  w-full px-5 flex flex-row justify-center  lg:flex-col gap-7 lg:gap-4 lg:mb-52  font-semibold'>
            <NavLink onClick={handleClick} to={'/dashboard/Users'} className={({ isActive }) => `flex gap-2 items-center hover:text-blue-300 ${isActive ? "text-blue-300" : ""} `} ><HiUsers /> Users</NavLink>
            <NavLink onClick={handleClick} to={'/dashboard/Orders'} className={({ isActive }) => `flex gap-2 items-center hover:text-blue-300 ${isActive ? "text-blue-300" : ""} `}><IoBag /> Orders</NavLink>
            <NavLink onClick={handleClick} to={'/dashboard/Products'} className={({ isActive }) => `flex gap-2 items-center hover:text-blue-300 ${isActive ? "text-blue-300" : ""} `}><FaCartArrowDown /> Products</NavLink>
          </div>
          <div className='w-full md:pr-6 lg:pr-5 font-semibold'>
            <NavLink onClick={handleClick} to={'/dashboard/Other-info'} className={({ isActive }) => `flex justify-center sm:justify-end gap-2 items-center hover:text-blue-300 ${isActive ? "text-blue-300" : ""} `}><FaCircleInfo /> Other Info</NavLink>
          </div>
        </div>

        {/* right panel */}
        <div className={`my-5 rounded-md w-full h-[85%] lg:h-full px-4 flex flex-col ${mode === "dark" ? 'bg-slate-900 text-white' : "bg-slate-700 text-slate-200"} `}>

          <h1 className=' py-4 text-center text-3xl flex flex-col '> Admin Dashboard <br />({value})
            <div className=' self-end mr-5'>

              {value === "Products" ?
                <button className=' mt-4 md:mt-2 lg:mt-0 px-4 py-2 rounded-md text-sm font-medium bg-blue-700 hover:bg-blue-600'>add Products</button> :
                ""}
            </div>
          </h1>
          <Outlet />
        </div>

      </div>
    </div>


    // <div className='h-full  bg-[url(https://www.getadmiral.com/hubfs/hero-bg.png)] bg-center bg-cover bg-no-repeat transform rotate-180 '>

    //   <div className=' h-full lg:h-[700px] px-4 py-20 w-full flex flex-col text-center lg:flex-row gap-5 transform rotate-180'>
    //     {/* left panel */}
    //     <div className={` w-full lg:w-40 py-10 lg:my-5  flex flex-row flex-wrap sm:flex-nowrap lg:flex-col lg:justify-start gap-5 md:gap-10  items-center text-center rounded-md ${mode === "dark" ? 'bg-slate-900 text-white' : "bg-slate-700 text-slate-200"}`}>
    //       <div className=' mx-auto md:mx-0  w-full px-5 flex flex-row justify-center  lg:flex-col gap-7 lg:gap-4 lg:mb-52  font-semibold'>
    //         <NavLink onClick={handleClick} to={'/dashboard/Users'} className={({ isActive }) => `flex gap-2 items-center hover:text-blue-300 ${isActive ? "text-blue-300" : ""} `} ><HiUsers /> Users</NavLink>
    //         <NavLink onClick={handleClick} to={'/dashboard/Orders'} className={({ isActive }) => `flex gap-2 items-center hover:text-blue-300 ${isActive ? "text-blue-300" : ""} `}><IoBag /> Orders</NavLink>
    //         <NavLink onClick={handleClick} to={'/dashboard/Products'} className={({ isActive }) => `flex gap-2 items-center hover:text-blue-300 ${isActive ? "text-blue-300" : ""} `}><FaCartArrowDown /> Products</NavLink>
    //       </div>
    //       <div className='w-full md:pr-6 lg:pr-5 font-semibold'>
    //         <NavLink onClick={handleClick} to={'/dashboard/Other-info'} className={({ isActive }) => `flex justify-center sm:justify-end gap-2 items-center hover:text-blue-300 ${isActive ? "text-blue-300" : ""} `}><FaCircleInfo /> Other Info</NavLink>
    //       </div>
    //     </div>

    //     {/* right panel */}
    //     <div className={`my-5 rounded-md w-full h-full px-4 flex flex-col ${mode === "dark" ? 'bg-slate-900 text-white' : "bg-slate-700 text-slate-200"} `}>

    //       <h1 className=' py-4 text-center text-3xl flex flex-col '> Admin Dashboard <br />({value})
    //         <div className=' self-end mr-5'>

    //           {value === "Products" ?
    //             <button className=' mt-4 md:mt-2 lg:mt-0 px-4 py-2 rounded-md text-sm font-medium bg-blue-700 hover:bg-blue-600'>add Products</button> :
    //             ""}
    //         </div>
    //       </h1>


    //       <Outlet />
    //     </div>

    //   </div>
    // </div>
  )
}

export default Dashboard