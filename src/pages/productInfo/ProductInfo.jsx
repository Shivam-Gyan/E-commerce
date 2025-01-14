import React from 'react'
import { useParams } from 'react-router'
import { useContextState } from '../../context/Context';
import { BsFillPatchCheckFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/CartSlice';
import { toast } from 'react-toastify';


function ProductInfo() {
    const { product } = useContextState()

    const { id,productname } = useParams();

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
            await dispatch(addCart({ userId:user.uid, addItem }))
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
        <section className="text-gray-600 body-font overflow-hidden">
            {product?.map((item) => (
                item?.id === id && <div key={item.id} className="container px-5 py-32 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className='w-full lg:w-auto flex justify-center items-center'>
                            <img
                                alt="ecommerce"
                                className="lg:w-[400px] max-w-[350px] max-h-[350px] lg:max-h-[400px] object-cover object-center rounded"
                                src={item?.imageUrl}
                            />
                        </div>
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 flex items-center tracking-widest">
                                Authorized <BsFillPatchCheckFill className='text-green-500 text-md lg:text-xl' />
                            </h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                {productname}
                            </h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4 text-indigo-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4 text-indigo-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4 text-indigo-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4 text-indigo-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4 text-indigo-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <span className="text-gray-600 ml-3">4 Reviews</span>
                                </span>

                            </div>
                            <p className="leading-relaxed border-b-2 mb-5 pb-5">
                                {item?.description}
                            </p>

                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">
                                    Rs.{item?.price}
                                </span>
                                <button onClick={() => handleClick(item)} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                    Add To Cart
                                </button>
                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    <svg
                                        fill="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default ProductInfo