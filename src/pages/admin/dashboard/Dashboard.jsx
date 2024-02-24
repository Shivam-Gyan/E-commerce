import React, { useEffect, useState } from 'react'
import { useContextState } from '../../../context/Context'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { HiUsers } from "react-icons/hi2";
import { FaCartArrowDown } from "react-icons/fa";
import { IoArrowBack, IoBag } from "react-icons/io5";
import { FaCircleInfo } from "react-icons/fa6";
import AddProducts from '../Products/AddProducts';
import UpdateProducts from '../Products/UpdateProducts';


const Dashboard = () => {
  const [value, setValue] = useState("Other Info")
  const { mode, showRemoveContainer} = useContextState()
  const [showAddContainer, setShowAddContainer] = useState(false)
  const navigate = useNavigate()


  const handleClick = (e) => {
    setValue(e.target.innerText)
  }

  useEffect(() => {
    navigate("/dashboard/Other-info");
  },[]);

  return (

    <div className='h-[100%] bg-slate-300  transform rotate-180 '>

      <div className=' h-screen relative lg:h-[700px] px-4 py-5 w-full flex flex-col text-center lg:flex-row gap-5 transform rotate-180'>
      

        {/* Add Product from to add in the form  */}
        {showAddContainer &&
          <div className='w-full cursor-pointer h-screen flex justify-center items-center bg-slate-500 bg-opacity-90 z-[99] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ' >

            <AddProducts setShowAddContainer={setShowAddContainer} />
          </div>}
        {showRemoveContainer &&
          <div className='w-full cursor-pointer h-screen flex justify-center items-center bg-slate-500 bg-opacity-90 z-[99] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ' >
            <UpdateProducts />
          </div>}



        {/* left panel */}
        <div className={` w-full lg:w-40 h-3/4 py-10 lg:my-5  flex flex-row flex-wrap sm:flex-nowrap lg:flex-col lg:justify-start gap-5 md:gap-10  items-center text-center rounded-md ${mode === "dark" ? 'bg-slate-900 text-white' : "bg-slate-700 text-slate-200"}`}>
          <div className=' mx-auto md:mx-0  w-full px-5 flex flex-row justify-center  lg:flex-col gap-7 lg:gap-4 lg:mb-52  font-semibold'>
            <NavLink onClick={handleClick} to={'/dashboard/Users'} className={({ isActive }) => `flex gap-2 items-center hover:text-blue-300 ${isActive ? "text-blue-300" : ""} `} ><HiUsers /> Users</NavLink>
            <NavLink onClick={handleClick} to={'/dashboard/Orders'} className={({ isActive }) => `flex gap-2 items-center hover:text-blue-300 ${isActive ? "text-blue-300" : ""} `}><IoBag /> Orders</NavLink>
            <NavLink onClick={handleClick} to={'/dashboard/Products'} className={({ isActive }) => `flex gap-2 items-center hover:text-blue-300 ${isActive ? "text-blue-300" : ""} `}><FaCartArrowDown /> Products</NavLink>
          </div>
          <div className='w-full relative md:pr-6 lg:pr-5 font-semibold'>
            <NavLink onClick={handleClick} to={'/dashboard/Other-info'} className={({ isActive }) => `flex justify-center sm:justify-end gap-2 items-center hover:text-blue-300 ${isActive ? "text-blue-300" : ""} `}><FaCircleInfo /> Other Info</NavLink>
            <div onClick={() => navigate('/')} className=' w-auto lg:w-full justify-center pt-4 px-2 text-white hover:text-blue-300  text- cursor-pointer font-medium flex gap-2 items-center'>
              <IoArrowBack className='text-xl' />
              <span className='text-lg hover:text-blue-300 '>
                Back
              </span>
            </div>
          </div>
        </div>

        {/* right panel */}
        <div className={`my-5 rounded-md w-full h-[75%] lg:h-[80%] px-4 flex flex-col ${mode === "dark" ? 'bg-slate-900 text-white' : "bg-slate-700 text-slate-200"} `}>

          <h1 className=' py-4 text-center text-3xl flex flex-col '> Admin Dashboard <br />({value})
            <div className=' self-end mr-5'>

              {value === "Products" ?
                <button onClick={() => setShowAddContainer((prev) => !prev)} className=' mt-4 md:mt-2 lg:mt-0 px-4 py-2 rounded-sm text-sm font-medium bg-blue-700 hover:bg-blue-600'>add Products</button> :
                ""}
            </div>
          </h1>

          <Outlet/>
        </div>

      </div>
    </div>



  )
}

export default Dashboard