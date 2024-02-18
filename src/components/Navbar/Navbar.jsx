import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink,useNavigate } from 'react-router-dom';
import { useContextState } from '../../context/Context';
import { FaSun } from "react-icons/fa";
import { WiMoonAltNew } from "react-icons/wi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { TiShoppingCart } from "react-icons/ti";
import { navbarItems } from '../../Assets/assets'


const Navbar = () => {
  const navigate = useNavigate()


  const { mode, toggleMode } = useContextState();
  // for checking window width 
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // for checking menu bar open or not
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem('user'))
  const handleLogout = () => {
    localStorage.clear('user')
    toast.warning("Login to continue",
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: mode === "dark" ? "dark" : "light",
      })
    navigate('/login')
  }


  useEffect(() => {
    window.addEventListener('resize',
      () => setWindowWidth(window.innerWidth));

    return () => {
      window.removeEventListener('resize', () => setWindowWidth(window.innerWidth))
    };
  }, []);


  return (

    // main container
    <div className={`z-[999] w-full fixed top-0 ${mode === 'dark' ? "bg-gray-900" : "bg-slate-100"} py-4 px-8 flex justify-between items-center`}>

      {/* Logo conatiner */}
      <div className={` sm:ml-11 text-lg sm:text-2xl font-bold ${mode === 'dark' ? "text-white" : "text-black"}`}>
        <NavLink to={navbarItems[0]?.url}>{navbarItems[0]?.title}</NavLink>
      </div>


      {/* checking width and then displaying all NavLinks  */}
      {windowWidth > 900 && (
        <div className={` sm:ml-10 flex gap-4  ${mode === 'dark' ? "text-white" : "text-black"}`}>
          <NavLink to='/allproduct' className={({isActive})=>`font-semibold text-sm hover:text-gray-300 ${isActive?"text-blue-500":""}`}>
            All Product
          </NavLink>
          <NavLink to='/order'className={({isActive})=>`font-semibold text-sm hover:text-gray-300 ${isActive?"text-blue-500":""}`}>
            Order
          </NavLink>

          {user?.email === "shivamgupta12a@gmail.com" ?
            <NavLink to='/dashboard' className={({isActive})=>`font-semibold text-sm hover:text-gray-300 ${isActive?"text-blue-500":""}`}>
              Admin
            </NavLink> : null}

          <NavLink to='/offerzone' className={({isActive})=>`font-semibold text-sm hover:text-gray-300 ${isActive?"text-blue-500":""}`}>
            Offer Zone
          </NavLink>

          {user ?
            <button
              onClick={handleLogout} className={({isActive})=>`font-semibold text-sm hover:text-gray-300 ${isActive?"text-blue-500":""}`}>
              Logout
            </button> : null}

        </div>
      )}





      {/* profile, cart, togglemode and hemburg all are there in this container  */}
      <div className='flex justify-center items-center gap-4'>

        {user ? <>
          {/* For UserProfile NavLink */}
          {windowWidth >= 700 && <div className=' sm:inline-flex flex justify-center items-center gap-1'>
            <NavLink to={"/account"}><CgProfile className={` text-2xl lg:text-3xl  focus:outline-none ${mode === 'dark' ? "text-white" : "text-black"}`} /></NavLink>
          </div>}

          {/* For user Cart info */}
          <div className='flex items-center h-full mr-3 sm:mr-10 text-xs relative'>
            <NavLink to={'/cart'}><TiShoppingCart className={` z-20 text-2xl  focus:outline-none ${mode === 'dark' ? "text-white" : "text-black"}`} /> </NavLink>
            <span className={` z-10 absolute -top-[12px] -right-[16px] w-5 h-4 text-center font-semibold rounded-tl-lg rounded-tr-lg rounded-br-lg ${mode === 'dark' ? "bg-white text-slate-800" : "text-white bg-slate-900"}`}>
              0
            </span>
          </div>
        </> : <button className={`px-4 py-2 rounded-md font-semibold text-md hover:bg-slate-400 hover:text-slate-800 ${mode == 'dark' ? "text-slate-800 bg-slate-100" : "bg-slate-800 text-slate-100"}`}><NavLink to={'/login'}>Login</NavLink></button>}


        {/* Toggleing light and dark Mode */}
        <button className={`flex justify-center  items-center w-11 sm:w-14 rounded-3xl bg-gray-500 py-3  sm:py-4 px-3 text-xl  focus:outline-none ${mode === 'dark' ? "text-white" : "text-black"} relative `} onClick={toggleMode}>
          {mode && mode === 'light' ? <WiMoonAltNew className=' ease-in-out duration-1000  text-2xl sm:text-3xl absolute left-0 ' /> : <FaSun className=' text-lg sm:text-2xl  absolute right-1 ' />}
        </button>



        {/* responsive menu bar from mobile user */}
        {windowWidth <= 900 && (
          <div>

            {/* hemburge Toggle button  */}
            <button className={`flex outline-none items-center justify-center -mr-5 sm:mr-0`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ?
                <FaPlus className={`  ${mode === 'dark' ? "text-white" : "text-black"} duration-200 rotate-45 text-2xl sm:text-3xl `} /> :
                <GiHamburgerMenu className={`${mode === 'dark' ? "text-white" : "text-black"} duration-300 text-2xl sm:text-3xl `} />
              }
            </button>

            {/* All the lNavLinks for mobile responsive are here */}
            {isMobileMenuOpen && (
              <div className={`absolute font-semibold top-14 right-0 flex flex-col  gap-2 bg-slate-900 bg-opacity-95 w-full z-50 ${mode==="dark"?"bg-slate-600":""}`}>
                <div className={`flex flex-col gap-1 justify-center items-center px-10 py-2 text-white hover:bg-gray-200 hover:text-slate-800 w-full `}>

                  {/* special case for profile menu toggling */}
                  {windowWidth < 700 &&
                    <>
                      <NavLink to={'/'}><CgProfile className={`text-5xl focus:outline-none `} /></NavLink>
                      <NavLink to={navbarItems[5]?.url} className={`text-[11px] font-semibold`} >{navbarItems[5]?.title}</NavLink>
                    </>
                  }
                </div>

                {/* NavLinks are here */}

                <NavLink to='/allproduct' className={({isActive})=>` block min-w-full text-center px-10 py-2 text-white hover:bg-white  hover:text-slate-800 ${isActive?"text-green-500":""}`} >
                  All Product
                </NavLink>
                <NavLink to='/order' className={({isActive})=>` block min-w-full text-center px-10 py-2 text-white hover:bg-white  hover:text-slate-800 ${isActive?"text-green-500":""}`}>
                  Order
                </NavLink>
                {user?.email === "shivamgupta12a@gmail.com" ? <NavLink to='/dashboard' className={({isActive})=>` block min-w-full text-center px-10 py-2 text-white hover:bg-white  hover:text-slate-800 ${isActive?"text-green-500":""}`}>
                  Admin
                </NavLink> : null}
                <NavLink to='/offerzone' className={({isActive})=>` block min-w-full text-center px-10 py-2 text-white hover:bg-white  hover:text-slate-800 ${isActive?"text-green-500":""}`}>
                  Offer Zone
                </NavLink>
                {user ?
                  <button
                    onClick={handleLogout} className={` block min-w-full text-center px-10 py-2 text-white hover:bg-white  hover:text-slate-800 mb-2`}>
                    Logout
                  </button> : null}
              </div>
            )}
          </div>
        )}
      </div>


    </div>
  );
}

export default Navbar;
