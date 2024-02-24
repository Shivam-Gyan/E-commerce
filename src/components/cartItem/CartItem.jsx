import React, { useCallback, useEffect, useState } from 'react'
import { IoCaretForwardOutline, IoCaretBackOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { deleteCart, updateCart } from '../../redux/CartSlice';
import { useContextState } from '../../context/Context';
import { Link } from 'react-router-dom';

const CartItem = ({ item }) => {
    const { user, isLoading, setIsLoading } = useContextState()
    const [quantity, setQuantity] = useState(item.quantity)
    const dispatch = useDispatch()

    const handleForwardClick = () => {
        setQuantity((prev) => prev >= 10 ? prev + 1 : prev + 1);
    }
    const handleBackClick = () => {
        setQuantity((prev) => prev === 1 ? prev : prev - 1);

    }
    const updateQuantity = useCallback(async() => {
        setIsLoading(true)
        const newItem = { ...item, quantity: parseInt(quantity) };
        await dispatch(updateCart({ userId: user?.uid, dataId: item.dataId, newItem }));
        setIsLoading(false)
    }, [ quantity]);


    const handleDelete = async(item) => {
        setIsLoading(true)
        const itemId = item.dataId
       await dispatch(deleteCart({ userId: user?.uid, itemId }))
        setIsLoading(false)
    }

    useEffect(() => {
        updateQuantity()
    }, [quantity])

    return (
        <div className="w-full relative mb-4 py-5 px-2 md:px-5 bg-white border-b-2  border-gray-300 shadow-lg">
            {isLoading && <div
                className="absolute top-1/2 left-1/2 bl h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-success motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span>
            </div>}

            <div className='w-full flex flex-col items-start justify-between  lg:items-center md:flex-row gap-5'>
                <div className=' flex flex-col items-start lg:items-center md:flex-row gap-5'>
                    <div className=' h-full w-52 self-center lg:mx-auto'>
                        <Link to={`/productInfo/${item.id}/${item.title}`}><img src={item?.imageUrl} className='w-48 md:w-56 self-center h-auto' alt="image" /></Link>
                    </div>
                    <div className='flex flex-col md:justify-normal lg:justify-between p-2 gap-1 '>
                        <p className=' tracking-wide text-2xl font-semibold'>{item?.title}</p>
                        <p className='w-full md:w-[80%] lg:w-[50%] whitespace-pre-wrap text-sm font-light'>{item?.description}</p>
                        <p className='text-md font-normal'>Quantity :{item.quantity}</p>
                        <span
                            onClick={() => handleDelete(item)}
                            className='px-4 w-40 text-center cursor-pointer py-1 mt-4 text-white bg-slate-800 tracking-wider'>REMOVE</span>
                    </div>
                </div>
                <div className=' w-full lg:w-auto flex justify-between lg:justify-normal  items-center gap-4 '>
                    <div className='flex gap-1 px-3 py-1 border-2 border-gray-300 items-center'>
                        <button onClick={handleBackClick} >
                            <IoCaretBackOutline />
                        </button>
                        <input className=' text-center w-7' type="text" id={item.dataId} value={quantity} readOnly />
                        <button onClick={handleForwardClick} >
                            <IoCaretForwardOutline />
                        </button>

                    </div>
                    <p className=''>{item?.price} {" "} <span className='w-full text-green-600 line-through '>( 50% OFF )</span></p>

                </div>
            </div>
        </div>

    )
}

export default CartItem