import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import { MdProductionQuantityLimits } from "react-icons/md";
import { Link } from 'react-router-dom';
import { RiCoinsLine } from "react-icons/ri";
import { useContextState } from '../../../context/Context';

const OtherInfo = () => {
    const {product}=useContextState()
    return (
        <div className='w-full text-slate-800 font-semibold grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 overflow-auto pb-6 gap-2 ' style={{ scrollbarWidth: 'none' }}>
            <div className='  w-full flex gap-2 justify-center items-center'>
                <Link to={'/dashboard/Users'} className='w-1/2 px-8 py-6 hover:bg-blue-300 rounded-lg bg-gray-200 flex flex-col  justify-center items-center'>
                    <FaUser size={100} className=' text-slate-800' />
                    <p className='text-lg font-bold text-slate-800 truncate'>Active users </p>
                    <h1>20</h1>
                </Link>
                <Link to={'/dashboard/Orders'} className='w-1/2 px-8 py-6 hover:bg-blue-300 rounded-lg bg-gray-200 flex flex-col justify-center items-center'>
                    <FaBoxArchive size={100} className=' text-slate-800' />
                    <p className='text-lg font-bold text-slate-800 truncate'>Total orders </p>
                    <h1>20</h1>
                </Link>
            </div>
            <div className='  w-full flex gap-2 justify-center items-center'>
                <Link to={'/dashboard/Products'} className='w-1/2  px-8 py-6 hover:bg-blue-300 rounded-lg bg-gray-200 flex flex-col justify-center items-center'>
                    <MdProductionQuantityLimits size={100} className=' text-slate-800' />
                    <p className='text-lg font-bold text-slate-800 truncate'> Products</p>
                    <h1 >{product?product.length:0}</h1>
                </Link>
                <div to={''} className='w-1/2 px-8 py-6 hover:bg-blue-300 rounded-lg bg-gray-200 flex flex-col justify-center items-center'>
                    <RiCoinsLine size={100} className=' text-slate-800' />
                    <p className='text-lg font-bold text-slate-800 truncate'>Collections </p>
                    <h1>$2000</h1>
                </div>
            </div>
        </div>
    )
}

export default OtherInfo