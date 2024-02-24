import React from 'react'
import { RiShareForwardFill } from "react-icons/ri";
import { useContextState } from '../../context/Context';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch} from 'react-redux';
import { addCart} from '../../redux/CartSlice';

const ProductCard = ({ item }) => {
    const { mode,setIsLoading, user } = useContextState()
    const dispatch = useDispatch()

    // add to cart 
    const handleClick = async (item) => {
        
        setIsLoading(true)
        try {
            const addItem = {
                id: item?.id,
                title: item?.title,
                price: item?.price,
                description: item?.description,
                date: new Date().getTime(),
                imageUrl: item?.imageUrl,
                quantity: 1
            }

            const userId = user.uid;
            await dispatch(addCart({ userId, addItem }))
            toast.success("Item added to cart", {
                position: "top-center",
                autoClose: 500,
                theme: mode === "dark" ? "dark" : "light",
            })

            setIsLoading(false)

        } catch (error) {
            toast.error('add to cart failed')
            setIsLoading(false)
        }
    }
    return (
        <div className={`relative p-2 z-30  rounded-lg font-semibold`}>
            <div className={`main-container border-[1px] border-gray-200 flex flex-col w-40 md:w-44 lg:w-48 shadow-lg overflow-hidden rounded-sm text-slate-700 ${mode === "dark" ? " bg-gray-200" : "bg-white"}`}>

                <div className='image-container overflow-hidden h-28 flex justify-center items-center lg:h-32 aspect-square  '>
                    <Link to={`/productInfo/${item.id}/${item.title}`} >
                        <img src={item && item.imageUrl} alt={item && item.title} className='aspect-square w-20 lg:w-28' />
                    </Link>
                </div>
                {/* <div className='absolute top-1 md:top-2 right-1'>
                    <Link to={`/productInfo/${item.id}/${item.title}`} >
                        <RiShareForwardFill className='p-1 text-slate-500  text-3xl' />
                    </Link>
                </div> */}
                <div className='flex flex-col gap-1 justify-center px-2 pb-2'>
                    <div className='text-center mb-1'>
                        <p className='text-lg font-medium truncate '>{item?.title}</p>
                        <p className='text-sm font-medium '>Rs.{item?.price} <span className='text-green-500 ml-[0.35rem] text-lg line-through'>(50 off)</span></p>
                    </div>
                    {<button onClick={() => handleClick(item)} className='bg-blue-600 hover:bg-blue-400 flex rounded-sm gap-2 items-center justify-center text-white text-md font-semibold px-2 py-1'>
                        Add to cart
                    </button>}
                </div>
            </div>
        </div>
    )
}


export default ProductCard