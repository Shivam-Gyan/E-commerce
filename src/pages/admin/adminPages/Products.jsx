import React from 'react'
import { useContextState } from '../../../context/Context'
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";


const Products = () => {
  const { mode } = useContextState()
  return (

    <div className='mb-7 z-20 w-full text-center text-3xl overflow-auto' style={{ scrollbarWidth: 'none' }}>
      <div className=" relative ">
        <table className="table-auto w-full border-collapse">
          <thead className='bg-[#443c68] text-[0.5rem]'>
            <tr>
              <th className="px-[0.7rem] py-[0.6rem] text-sm sm:text-lg lg:text-lg">S no.</th>
              <th className="px-[0.7rem] py-[0.6rem] text-sm sm:text-lg lg:text-lg">Image</th>
              <th className="px-[0.7rem] py-[0.6rem] text-sm sm:text-lg lg:text-lg">Title</th>
              <th className="px-[0.7rem] py-[0.6rem] text-sm sm:text-lg lg:text-lg">Price</th>
              <th className="px-[0.7rem] py-[0.6rem] text-sm sm:text-lg lg:text-lg">Description</th>
              <th className="px-[0.7rem] py-[0.6rem] text-sm sm:text-lg lg:text-lg">Time</th>
              <th className="px-[0.7rem] py-[0.6rem] text-sm sm:text-lg lg:text-lg">Config Button</th>
            </tr>
          </thead>
          <tbody>

            {[1, 2, 3, 4, 5,4,5,6,67,].map((item, index) => (
              <tr key={index} className={"bg-gray-100 text-black text-xs sm:text-sm lg:text-md"}>
                <td className=" border-[#443C68] border-2 px-[0.7rem] py-[0.6rem]">1</td>
                <td className="border-[#443C68] border-2 px-[0.7rem] py-[0.6rem]">400x400</td>
                <td className="border-[#443C68] border-2 px-[0.7rem] py-[0.6rem]">wooden Pot</td>
                <td className="border-[#443C68] border-2 px-[0.7rem] py-[0.6rem] truncate">$129</td>
                <td className="border-[#443C68] border-2 px-[0.7rem] py-[0.6rem]">pots whitecolor size-23</td>
                <td className="border-[#443C68] border-2 px-[0.7rem] py-[0.6rem]">12 Aug 2023 13:25:08</td>
                <td className="border-[#443C68] border-2 px-[0.4rem] py-[0.6rem]  text-center ">
                  <div className=' w-full flex gap-5 text-xl justify-center'>
                  <FiEdit className=' cursor-pointer' />
                  <RiDeleteBin6Line className=' cursor-pointer' />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
    // <div className='mb-7 z-20 w-full text-center text-3xl overflow-auto' style={{ scrollbarWidth: 'none' }}>
    //   <div className=" relative ">
    //     <table className="table-auto w-full border-collapse">
    //       <thead className='bg-[#443c68] text-[0.5rem]'>
    //         <tr>
    //           <th className="px-[0.7rem] py-[0.6rem] text-sm sm:text-lg lg:text-lg">S no.</th>
    //           <th className="px-[0.7rem] py-[0.6rem] text-sm sm:text-lg lg:text-lg">Image</th>
    //           <th className="px-[0.7rem] py-[0.6rem] text-sm sm:text-lg lg:text-lg">Title</th>
    //           <th className="px-[0.7rem] py-[0.6rem] text-sm sm:text-lg lg:text-lg">Price</th>
    //           <th className="px-[0.7rem] py-[0.6rem] text-sm sm:text-lg lg:text-lg">Description</th>
    //           <th className="px-[0.7rem] py-[0.6rem] text-sm sm:text-lg lg:text-lg">Time</th>
    //           <th className="px-[0.7rem] py-[0.6rem] text-sm sm:text-lg lg:text-lg">Config Button</th>
    //         </tr>
    //       </thead>
    //       <tbody>

    //         {[1, 2, 3, 4, 5,4,5,6,67,].map((item, index) => (
    //           <tr key={index} className={"bg-gray-100 text-black text-xs sm:text-sm lg:text-md"}>
    //             <td className=" border-[#443C68] border-2 px-[0.7rem] py-[0.6rem]">1</td>
    //             <td className="border-[#443C68] border-2 px-[0.7rem] py-[0.6rem]">400x400</td>
    //             <td className="border-[#443C68] border-2 px-[0.7rem] py-[0.6rem]">wooden Pot</td>
    //             <td className="border-[#443C68] border-2 px-[0.7rem] py-[0.6rem] truncate">$129</td>
    //             <td className="border-[#443C68] border-2 px-[0.7rem] py-[0.6rem]">pots whitecolor size-23</td>
    //             <td className="border-[#443C68] border-2 px-[0.7rem] py-[0.6rem]">12 Aug 2023 13:25:08</td>
    //             <td className="border-[#443C68] border-2 px-[0.4rem] py-[0.6rem]  text-center ">
    //               <div className=' w-full flex gap-5 text-xl justify-center'>
    //               <FiEdit className=' cursor-pointer' />
    //               <RiDeleteBin6Line className=' cursor-pointer' />
    //               </div>
    //             </td>
    //           </tr>
    //         ))}


    //       </tbody>
    //     </table>
    //   </div>

    // </div>
  )
}

export default Products