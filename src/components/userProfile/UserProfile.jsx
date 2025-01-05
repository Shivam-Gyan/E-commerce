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
    const dispatch = useDispatch()
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
        <div className="h-screen relative bg-[url(https://media.istockphoto.com/id/1286529382/photo/empty-grid-floor-for-the-development-project.jpg?s=612x612&w=0&k=20&c=4_ISIILOmmyy_0AsiGz3fL157X-RqjIdzopidllPC6U=)] bg-center bg-cover bg-no-repeat flex flex-wrap items-center px-2 justify-center">
            <div onClick={() => navigate(-1)} className='  absolute px-2 top-4 left-4 text-gray-800 cursor-pointer font-medium flex gap-3 items-center'>
                <IoArrowBack className='text-xl' />
                <span className='text-lg '>
                    Back
                </span>
            </div>
            <div className=" container lg:w-[50%] xl:w-[40%] sm:w-full md:w-2/3 bg-slate-800 bg-opacity-80 shadow-2xl transform duration-300 easy-in-out">
                <div className="px-4 h-32 bg-slate-800 bg-opacity-80 flex flex-col text-white items-center overflow-hidden">
                    <marquee className='text-center' behavior="scroll"  direction="left">
                        <h1 className='mt-2 text-3xl font-semibold'>Welcome to oracle mart </h1>
                        <h1 className='text-xl font-medium'>Buy Anyting you want</h1>
                    </marquee>
                    {/* <img className="w-full " src="https://tse1.mm.bing.net/th?id=OIP.tF3mqz6fLdNzBjRKwNruVQHaDL&pid=Api&P=0&h=180" alt="" /> */}
                </div>
                <div className=" relative flex justify-center items-center px-5 -mt-12 ">
                    <img className="h-28 w-28 aspect-square bg-white p-2 rounded-full" src="https://tse2.explicit.bing.net/th?id=OIP.IQqAakFVSW2T6n9Kibpe2AAAAA&pid=Api&P=0&h=180" alt="userImage" />
                    {/* adding image  from device  left */}
                    <MdFlipCameraIos className='absolute text-3xl text-gray-900 cursor-pointer bottom-1 right-[43%]' />
                </div>
                <div>
                    <div className="text-center px-14">
                        <h2 className="text-white text-3xl font-bold">Shivam Gupta</h2>
                        <p className="text-gray-100 cursor-pointer mt-2 hover:text-blue-500">Logged In : <span className='text-green-400 font-semibold'>shivam@gmail.com</span> </p>
                        <p className="text-gray-100 cursor-pointer mt-2 hover:text-blue-500">Status : <span className='text-green-400 font-semibold'>Active</span></p>
                        <div className="mt-2 flex justify-center gap-5">
                            <Link to={'/'} className=' px-3 pt-2 pb-1 border-b-4 border-slate-300 rounded-sm text-gray-100 text-md font-semibold'>Continue Shoping</Link>
                            <Link to={'/order'} className=' px-3 pt-2 pb-1 border-b-4 border-slate-300 rounded-sm text-gray-100 text-md font-semibold'>Order Details</Link>
                        </div>
                    </div>
                    <hr className="mt-6" />
                    <div className="flex bg-gray-50">
                        <div onClick={handleChangePassword} className="text-center w-1/2 p-4 bg-gray-800 hover:bg-gray-700 cursor-pointer">
                            <p className='flex items-center hover:text-green-400  text-white justify-center text-lg gap-2 font-semibold'><span className="font-semibold"><RxUpdate /> </span> Change Password</p>
                        </div>
                        <div className="border border-gray-600"></div>
                        <div onClick={handleLogout} className="text-center w-1/2 p-4 bg-gray-800 hover:bg-gray-700  cursor-pointer">
                            <p className='flex items-center justify-center text-lg gap-2 font-semibold text-white hover:text-red-400'> <span className="font-semibold  flex items-center text-2xl"><IoLogOut /> </span> Logout</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
