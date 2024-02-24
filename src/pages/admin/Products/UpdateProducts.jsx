import React, { useEffect, useState } from 'react'
import { useContextState } from '../../../context/Context';
import { HiPlus } from "react-icons/hi";
import Input from '../../../components/Input/Input';

const UpdateProducts = () => {
    const { mode, setShowRemoveContainer } = useContextState()
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        imageUrl: '',
        category: '',
        description: ''
    });
    const handleSubmit = () => {

    }



    return (
        <div className=' w-[20rem] sm:w-[23rem] lg:w-[28rem] relative flex flex-col text-white font-medium gap-4 py-5 px-10 bg-slate-700 text-start '>
            <div onClick={() => setShowRemoveContainer((prev) => !prev)} className=' absolute top-2 right-2  rotate-45 text-3xl'>
                <HiPlus />
            </div>

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
            <button className='bg-blue-700 hover:bg-blue-500 px-4 py-2 text-lg font-semibold text-white ' onClick={handleSubmit}>
                submit
            </button>


        </div>
    )
}

export default UpdateProducts