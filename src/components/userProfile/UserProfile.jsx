import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoArrowBack, IoLogOut } from "react-icons/io5";
import { RxUpdate } from "react-icons/rx";
import { toast } from 'react-toastify';
import { useContextState } from '../../context/Context';
import { MdFlipCameraIos } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/CartSlice';

const UserProfile = () => {
    const { mode } = useContextState()
    const dispatch=useDispatch()
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.clear('user')
        dispatch(clearCart())
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

    const handleChangePassword = () => {
        console.log(isActive)
      setIsActive(!isActive);
    };

    return (
        <div className="h-screen relative bg-[url(https://www.getadmiral.com/hubfs/hero-bg.png)] bg-center bg-cover bg-no-repeat   flex flex-wrap items-center px-2 justify-center rotate-180">
            <div onClick={() => navigate(-1)} className='rotate-180 border-2 border-gray-400 hover:border-slate-700 absolute px-2 bottom-[10%] right-[20%] text-gray-400 cursor-pointer font-medium flex gap-3 items-center'>
              <IoArrowBack className='text-xl' />
              <span className='text-lg text-gray-400'>
                Back
              </span>
            </div>
            <div className="rotate-180 container lg:w-[50%] xl:w-[40%] sm:w-full md:w-2/3 bg-white shadow-2xl transform duration-300 easy-in-out">
                <div className=" h-32 flex items-center overflow-hidden">
                    <img className="w-full " src="https://tse1.mm.bing.net/th?id=OIP.tF3mqz6fLdNzBjRKwNruVQHaDL&pid=Api&P=0&h=180" alt="" />

                </div>
                <div className=" relative flex justify-center items-center px-5 -mt-12 ">
                    <img className="h-28 w-28 aspect-square bg-white p-2 rounded-full" src="https://tse2.explicit.bing.net/th?id=OIP.IQqAakFVSW2T6n9Kibpe2AAAAA&pid=Api&P=0&h=180" alt="userImage" />
                    {/* adding image  from device  left */}
                    <MdFlipCameraIos className='absolute text-3xl text-gray-700 cursor-pointer bottom-1 right-[43%]' />
                </div>
                <div>
                    <div className="text-center px-14">
                        <h2 className="text-gray-800 text-3xl font-bold">Shivam Gupta</h2>
                        <p className="text-gray-400 cursor-pointer mt-2 hover:text-blue-500">Logged In : <span className='text-green-600 font-semibold'>shivam@gmail.com</span> </p>
                        <p className="text-gray-400 cursor-pointer mt-2 hover:text-blue-500">Status : <span className='text-green-600 font-semibold'>Active</span></p>
                        <div className="mt-2 flex justify-center gap-5">
                           <Link to={'/'} className=' px-3 pt-2 pb-1 border-b-4 border-slate-800 rounded-sm text-gray-500 text-md font-semibold'>Continue Shoping</Link>
                           <Link to={'/order'} className=' px-3 pt-2 pb-1 border-b-4 border-slate-800 rounded-sm text-gray-500 text-md font-semibold'>Order Details</Link>
                        </div>
                    </div>
                    <hr className="mt-6" />
                    <div className="flex bg-gray-50">
                        <div onClick={handleChangePassword} className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                            <p className='flex items-center text-green-600 justify-center text-lg gap-2 font-semibold'><span className="font-semibold"><RxUpdate /> </span> Change Password</p>
                        </div>
                        <div className="border"></div>
                        <div onClick={handleLogout} className="text-center w-1/2 p-4 hover:bg-gray-100  cursor-pointer">
                            <p className='flex items-center justify-center text-lg gap-2 font-semibold text-red-600'> <span className="font-semibold  flex items-center text-2xl"><IoLogOut /> </span> Logout</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
