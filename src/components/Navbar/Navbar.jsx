import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';
import { useContextState } from '../../context/Context';
// import { FaSun } from "react-icons/fa";
// import { WiMoonAltNew } from "react-icons/wi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { TiShoppingCart } from "react-icons/ti";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../../redux/CartSlice';


const Navbar = () => {
  const cartItem = useSelector(state => state.cart.carts)
  const dispatch = useDispatch()
  const { mode, toggleMode,getProductData } = useContextState();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'))


  useEffect(() => {
    if (user) dispatch(fetchCart(user?.uid))

    getProductData();
    window.addEventListener('resize',
      () => setWindowWidth(window.innerWidth));

    return () => {
      window.removeEventListener('resize', () => setWindowWidth(window.innerWidth))
    };
  }, []);


  return (
    // main container
    <div className={`z-[999] w-full sticky top-0 ${mode === 'dark' ? "bg-gray-900" : "bg-slate-100"} py-4 px-8 flex flex-wrap justify-between items-center`}>

      {/* Logo conatiner */}
      <div className={` sm:ml-11 text-lg sm:text-2xl font-bold ${mode === 'dark' ? "text-white" : "text-black"}`}>
        <NavLink to={'/'}>ORACLE MART</NavLink>
      </div>


      {/* checking width and then displaying all NavLinks  */}
      {windowWidth > 900 && (
        <div className={` sm:ml-10 flex gap-5  ${mode === 'dark' ? "text-white" : "text-black"}`}>
          <NavLink to='/allproduct' className={({ isActive }) => `uppercase tracking-wide font-medium  text-sm hover:text-gray-300 ${isActive ? "text-blue-500" : ""}`}>
            All Product
          </NavLink>
          <NavLink to='/order' className={({ isActive }) => `uppercase tracking-wide font-medium  text-sm hover:text-gray-300 ${isActive ? "text-blue-500" : ""}`}>
            Order
          </NavLink>

          {user?.email === "shivamgupta12a@gmail.com" ?
            <NavLink to='/dashboard' className={({ isActive }) => `uppercase tracking-wide font-medium  text-sm hover:text-gray-300 ${isActive ? "text-blue-500" : ""}`}>
              Admin
            </NavLink> : null}

          <NavLink to='/offerzone' className={({ isActive }) => `uppercase tracking-wide font-medium text-sm hover:text-gray-300 ${isActive ? "text-blue-500" : ""}`}>
            Offer Zone
          </NavLink>
        </div>
      )}





      {/* profile, cart, togglemode and hemburg all are there in this container  */}
      <div className='flex justify-center items-center gap-4'>

        {user ? <>
          {/* For UserProfile NavLink */}
          {<div className=' sm:inline-flex flex justify-center items-center gap-1'>
            <NavLink to={"/userprofile"}><CgProfile className={` text-2xl lg:text-3xl  focus:outline-none ${mode === 'dark' ? "text-white" : "text-black"}`} /></NavLink>
          </div>}

          {/* For user Cart info */}
          <div className='flex items-center h-full mr-3 sm:mr-10 text-xs relative'>
            <NavLink to={'/cart'}><TiShoppingCart className={` z-20 text-2xl  focus:outline-none ${mode === 'dark' ? "text-white" : "text-black"}`} /> </NavLink>
            <span className={` z-10 absolute -top-[12px] -right-[16px] w-5 h-4 text-center font-semibold rounded-tl-lg rounded-tr-lg rounded-br-lg ${mode === 'dark' ? "bg-white text-slate-800" : "text-white bg-slate-900"}`}>
              {cartItem ? cartItem?.length : "0"}
            </span>
          </div>
        </> : <NavLink to={'/login'} className={`px-4 py-2 rounded-md font-semibold text-md hover:bg-slate-400 hover:text-slate-800 ${mode == 'dark' ? "text-slate-800 bg-slate-100" : "bg-slate-800 text-slate-100"}`}>Login</NavLink>}


        {/* Toggleing light and dark Mode */}
        {/* <button className={`flex justify-center  items-center w-11 sm:w-14 rounded-3xl bg-gray-500 py-3  sm:py-4 px-3 text-xl  focus:outline-none ${mode === 'dark' ? "text-white" : "text-black"} relative `} onClick={toggleMode}>
          {mode && mode === 'light' ? <WiMoonAltNew className=' ease-in-out duration-1000  text-2xl sm:text-3xl absolute left-0 ' /> : <FaSun className=' text-lg sm:text-2xl  absolute right-1 ' />}
        </button> */}
        {windowWidth >= 1000 && <div className='flex items-center '>
          <input type="text" id='searchBox' placeholder='search here' className={`outline-none px-4 py-[.4rem] border-2 ${mode === "dark" ? "border-gray-50" : "border-slate-800 "}`} />
          <button className='bg-slate-800 hover:bg-slate-700 text-white font-medium text-md px-4 py-2'>search</button>
        </div>}



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
              <div className={`absolute font-semibold top-[3.7rem] md:top-[4rem] right-0 flex flex-col  gap-2 bg-slate-900  w-3/4 sm:w-1/2 h-screen z-50 ${mode === "dark" ? "bg-slate-600" : ""}`}>
                <div className={`flex flex-col gap-1 justify-center items-center px-10 py-2 text-white hover:bg-gray-200 hover:text-slate-800 w-full `}>

                
                </div>

                {/* NavLinks are here */}

                <NavLink to='/allproduct' className={({ isActive }) => `uppercase block min-w-full text-center px-10 py-2 text-white hover:bg-white  hover:text-slate-800 ${isActive ? "text-green-500" : ""}`} >
                  All Product
                </NavLink>
                <NavLink to='/order' className={({ isActive }) => ` uppercase block min-w-full text-center px-10 py-2 text-white hover:bg-white  hover:text-slate-800 ${isActive ? "text-green-500" : ""}`}>
                  Order
                </NavLink>
                {user?.email === "shivamgupta12a@gmail.com" ? <NavLink to='/dashboard' className={({ isActive }) => ` uppercase block min-w-full text-center px-10 py-2 text-white hover:bg-white  hover:text-slate-800 ${isActive ? "text-green-500" : ""}`}>
                  Admin
                </NavLink> : null}
                <NavLink to='/offerzone' className={({ isActive }) => ` uppercase  block min-w-full text-center px-10 py-2 text-white hover:bg-white  hover:text-slate-800 ${isActive ? "text-green-500" : ""}`}>
                  Offer Zone
                </NavLink>
              </div>
            )}
          </div>
        )}
      </div>
      {windowWidth < 1000 && <div className='w-full mt-4 flex justify-center items-center '>
          <input type="text" id='searchBox' placeholder='search here' className={`outline-none px-4 py-[.4rem] border-2 ${mode === "dark" ? "border-gray-50" : "border-slate-800 "}`} />
          <button className='bg-slate-800 hover:bg-slate-700 text-white font-medium text-md px-4 py-2'>search</button>
        </div>}


    </div>
  );
}

export default Navbar;
