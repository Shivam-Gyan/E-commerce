import React from 'react'
import { GrAddCircle } from "react-icons/gr";
import { GrSubtractCircle } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartItem = () => {
    return (
        <div className="flex flex-col p-4 text-lg font-semibold shadow-md border rounded-sm">
            <div className="flex flex-col md:flex-row gap-3 justify-between">
                {/* Product Information */}
                <div className="flex flex-row gap-6 items-center">
                    <div className="w-28 h-28">
                        <img className="w-full h-full" src="https://static.netshoes.com.br/produtos/tenis-adidas-coreracer-masculino/09/NQQ-4635-309/NQQ-4635-309_zoom1.jpg?ts=1675445414&ims=544x" alt="Adidas Coreracer Men's Shoes" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-xl text-gray-800 font-semibold">Brand Name</p>
                        <p className="text-xs text-gray-600 font-semibold">Description</p>
                    </div>
                </div>
                {/* Price Information */}
                <div className="self-center  text-center">
                    <div className='self-center flex flex-row items-center text-center'>
                        <p className="text-gray-600 font-normal text-sm line-through">$99.99</p>
                        <span className="text-emerald-500 ml-2">(-50% OFF)</span>
                    </div>
                    <p className="text-gray-800 font-normal text-xl">$49.99</p>
                </div>
                {/* Remove Product Icon */}

            </div>

            {/* change quantity */}
            <div className="flex flex-col sm:flex-row sm:gap-20 self-center gap-4">
                <div className='flex flex-row self-center gap-1 mt-2'>
                    <button className=" self-center text-slate-600   ">
                        <GrSubtractCircle />
                    </button>
                    <input type="text" readOnly="readonly" value="1" className="w-8 h-8 text-center text-gray-900 text-sm outline-none border border-gray-300 rounded-sm" />
                    <button className=" self-center   text-slate-600 ">
                        <GrAddCircle />
                    </button>
                </div>
                <div className="self-center">
                    <button className=' px-6  py-2 flex gap-2 items-center bg-blue-700 hover:bg-blue-800 text-white'>
                        delete <RiDeleteBin6Line />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartItem