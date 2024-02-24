import React, { useCallback, useEffect, useState } from 'react'
import Input from '../../../components/Input/Input';
import { HiPlus } from "react-icons/hi";
import { useContextState } from '../../../context/Context';
import { DataService } from '../../../firebase/Database/Database';
import { Timestamp } from 'firebase/firestore';
import { toast } from 'react-toastify';

const AddProducts = ({ setShowAddContainer }) => {
    const { mode, setIsLoading, isLoading, getProductData} = useContextState()
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        imageUrl: "",
        category: "",
        description: "",
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }
        )
    });


    const addProduct = async () => {

        if (formData?.title == "" || formData?.price == "" || formData?.imageUrl == "" || formData?.category == "" || formData?.description == "") {
            return toast.error('Please fill all fields', {
                autoClose: 800,
                theme: mode === "dark" ? "dark" : "light",
            })
        }
        setIsLoading(true)
        try {
            await DataService.addProduct(formData)
            toast.success("Product Add successfully", {
                autoClose: 1000,
                theme: mode === "dark" ? "dark" : "light",
            })
            getProductData()
            setShowAddContainer(false)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
        setFormData("")
    }


    useEffect(()=>{
        getProductData()
    },[])


    return (
        <div className=' w-[20rem] sm:w-[24rem] lg:w-[28rem] relative flex flex-col text-white font-medium gap-4 py-5 px-10 bg-slate-700 text-start '>
            <div onClick={() => setShowAddContainer((prev) => !prev)} className=' absolute top-2 right-2  rotate-45 text-3xl'>
                <HiPlus />
            </div>

            {/* Loading component */}
            {isLoading && <div
                className="absolute top-1/2 left-1/2 bl h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-success motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span>
            </div>}



            <Input label="Title" placeholder="Enter email" className=" w-full border-b-2 px-2 py-1 border-slate-300 bg-transparent block  outline-none"
                value={formData?.title} onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
            />
            <Input label="Price" placeholder="Enter price" className=" w-full border-b-2 px-2 py-1 border-slate-300 bg-transparent block outline-none"
                value={formData?.price} onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
            />
            <Input label="ImageUrl" placeholder="Image of Product" className=" w-full border-b-2 px-2 py-1 border-slate-300 bg-transparent block  outline-none"
                value={formData?.imageUrl} onChange={(e) => setFormData(prev => ({ ...prev, imageUrl: e.target.value }))}
            />
            <Input label="Category " placeholder="Category" className=" w-full border-b-2 px-2 py-1 border-slate-300 bg-transparent block  outline-none"
                value={formData?.category} onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
            />
            <label htmlFor="description">Description:</label>
            <textarea
                className=' w-full bg-gray-300 text-slate-800 outline-none p-2 border-2 boder-gray-600 '
                id='description'
                name="description"
                placeholder="Description"
                value={formData?.description}
                onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
            />
            <button className='bg-blue-700 hover:bg-blue-500 px-4 py-2 text-lg font-semibold text-white ' onClick={addProduct}>
                submit
            </button>


        </div>
    )
}

export default AddProducts