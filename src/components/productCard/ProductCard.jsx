import React, { useState } from 'react'
import { RiShareForwardFill } from "react-icons/ri";
import { useContextState } from '../../context/Context';
import { HiPlus } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductCard = () => {
    const { mode } = useContextState()
    const [showTruncate, setShowTruncate] = useState(true)
    const [productCard, setProductCard] = useState(false)

    
    // add to cart 
    const handleClick = () => {
        toast.success("Item added to cart", {
            position: "top-center",
            autoClose: 500,
            theme: mode === "dark" ? "dark" : "light",
        })
    }

    const image = 'http://pluspng.com/img-png/shoes-png-sneaker-png-transparent-image-2500.png'

    return (
        <div className={`relative container p-2  rounded-lg font-semibold`}>

            {productCard ?
                <div className={` main-container relative flex flex-col w-52 md:w-56 lg:w-64  overflow-hidden rounded-lg text-slate-700 ${mode === "dark" ? " bg-gray-200" : "bg-white"}`}>
                    <div className='image-container overflow-hidden h-28 flex justify-center items-center lg:h-32 aspect-square  '>
                        <img src={image} alt="" className='aspect-square w-20 lg:w-28' />
                    </div>
                    <div className='absolute top-1 md:top-2 right-1'>
                        <HiPlus onClick={()=>setProductCard((prev)=>!prev)} className='p-1 transform rotate-45 text-slate-500  text-3xl' />
                        <Link to={'/productInfo/1'} >
                            <RiShareForwardFill className='p-1 text-slate-500  text-3xl' />
                        </Link>
                    </div>
                    <div className='flex flex-col gap-1 justify-center px-2 pb-2'>
                        <div className='text-center mb-1'>
                            <p className='text-xl font-medium '>Title</p>
                            <p className={`w-full px-1 overflow-hidden ${showTruncate ? "truncate" : " whitespace-pre-wrap"}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur ipsa maiores nulla vel doloremque laudantium delectus molestiae molestias illo nobis?</p>
                            <span className='text-blue-600 cursor-pointer' onClick={() => setShowTruncate((prev) => !prev)}>{showTruncate ? "...more" : "...less"}</span>
                            <p className='text-md font-medium '>Rs.100 <span className='text-green-500 ml-[0.35rem] text-lg line-through'>(50 off)</span></p>
                        </div>
                        {<button onClick={handleClick} className='bg-blue-600 hover:bg-blue-400 flex rounded-sm gap-2 items-center justify-center text-white text-md font-semibold px-2 py-1'>
                            Add to cart
                        </button>}
                    </div>
                </div> :
                <div className={`main-container relative flex flex-col w-40 md:w-44 lg:w-48  overflow-hidden rounded-lg text-slate-700 ${mode === "dark" ? " bg-gray-200" : "bg-white"}`}>
                    <div className='image-container overflow-hidden h-28 flex justify-center items-center lg:h-32 aspect-square  '>
                        <img onClick={() => setProductCard((prev) => !prev)} src={image} alt="" className='aspect-square w-20 lg:w-28' />
                    </div>
                    <div className='absolute top-1 md:top-2 right-1'>
                        <Link to={'/productInfo/1'} >
                            <RiShareForwardFill className='p-1 text-slate-500  text-3xl' />
                        </Link>
                    </div>
                    <div className='flex flex-col gap-1 justify-center px-2 pb-2'>
                        <div className='text-center mb-1'>
                            <p className='text-xl font-medium '>Title</p>
                            <p className='text-md font-medium '>Rs.100 <span className='text-green-500 ml-[0.35rem] text-lg line-through'>(50 off)</span></p>
                        </div>
                        {<button onClick={handleClick} className='bg-blue-600 hover:bg-blue-400 flex rounded-sm gap-2 items-center justify-center text-white text-md font-semibold px-2 py-1'>
                            Add to cart
                        </button>}
                    </div>

                </div>}

        </div>
    )
}


export default ProductCard