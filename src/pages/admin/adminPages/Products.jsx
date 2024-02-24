import React from 'react'
import { useContextState } from '../../../context/Context'
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";


const Products = () => {
  const { mode, setShowRemoveContainer,product } = useContextState()
  return (

    <div className='mb-7 z-20 w-full text-center text-3xl overflow-auto' style={{ scrollbarWidth: 'none' }}>
      <div className=" relative ">
        <table className="table-auto w-full border-collapse">
          <thead className='bg-[#443c68] text-[0.5rem] sticky -top-[0.1rem]'>
            <tr>
              <th className="px-[0.7rem] py-[0.6rem] text-sm sm:text-lg lg:text-lg">S no.</th>
              <th className="px-[0.7rem] py-[0.6rem] text-sm sm:text-lg lg:text-lg">Image</th>
              <th className="px-[0.7rem] py-[0.6rem] text-sm sm:text-lg lg:text-lg">Title</th>
              <th className="px-[0.7rem] py-[0.6rem] text-sm sm:text-lg lg:text-lg">Price</th>
              <th className="px-[0.7rem] py-[0.6rem] text-sm sm:text-lg lg:text-lg">Description</th>
              <th className="px-[0.7rem] py-[0.6rem] text-sm sm:text-lg lg:text-lg">Category</th>
              <th className="px-[0.7rem] py-[0.6rem] text-sm sm:text-lg lg:text-lg">Stocks</th>
              <th className="px-[0.7rem] py-[0.6rem] text-sm sm:text-lg lg:text-lg">Date</th>
              <th className="px-[0.7rem] py-[0.6rem] text-sm sm:text-lg lg:text-lg">Config Button</th>
            </tr>
          </thead>
          <tbody>

            {product.map((item, index) => (
              <tr key={index} className={"bg-gray-100 text-black text-xs sm:text-sm lg:text-md"}>
                <td className=" border-[#443C68] border-2 px-[0.7rem] py-[0.6rem]">{index+1}</td>
                <td className="border-[#443C68] w-14 h-auto border-2 px-[0.7rem] py-[0.6rem]">
                  <img src={item?.imageUrl} alt={item?.title} className=' w-14 h-auto' />
                </td>
                <td className="border-[#443C68] border-2 px-[0.7rem] py-[0.6rem]">{item?.title}</td>
                <td className="border-[#443C68] border-2 px-[0.7rem] py-[0.6rem]">Rs.{item?.price}</td>
                <td className="border-[#443C68] border-2 px-[0.7rem] py-[0.6rem]">{item?.description}</td>
                <td className="border-[#443C68] border-2 px-[0.7rem] py-[0.6rem]">{item?.category}</td>
                <td className="border-[#443C68] border-2 px-[0.7rem] text-green-600 py-[0.6rem]">in stock</td>
                <td className="border-[#443C68] border-2 px-[0.7rem] py-[0.6rem]">{item?.date}</td>
                <td className="border-[#443C68] border-2 px-[0.4rem] py-[0.6rem]  text-center ">
                  <div className=' w-full flex gap-5 text-xl justify-center'>
                    <FiEdit onClick={() => setShowRemoveContainer((prev) => !prev)} className=' cursor-pointer' />
                    <RiDeleteBin6Line className=' cursor-pointer' />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
 
  )
}

export default Products