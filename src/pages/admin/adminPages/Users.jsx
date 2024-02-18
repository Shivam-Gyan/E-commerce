import React from 'react'
import { useContextState } from '../../../context/Context'


const Users = () => {
  const {mode}=useContextState()
  return (
    <div className='mb-7 z-20 w-full text-center text-3xl overflow-x-auto' style={{scrollbarWidth: 'none' }}>
    <div className=" relative">
      <table className="table-auto w-full border-collapse">
        <thead className='bg-[#443c68] text-[0.5rem]'>
          <tr>
            <th className="px-[0.7rem] py-[0.6rem] text-sm sm:text-lg lg:text-lg">Name</th>
            <th className="px-[0.7rem] py-[0.6rem] text-sm sm:text-lg lg:text-lg">Email</th>
            <th className="px-[0.7rem] py-[0.6rem] text-sm sm:text-lg lg:text-lg">Phone No</th>
            <th className="px-[0.7rem] py-[0.6rem] text-sm sm:text-lg lg:text-lg">status</th>
          </tr>
        </thead>
        <tbody>
           
          {[1,2,3,4,5,6,4,5,6,6,3].map((item, index) => (
            <tr key={index} className={"bg-gray-100 text-black text-xs sm:text-sm lg:text-md"}>
              <td className=" border-[#443C68] border-2 px-[0.7rem] py-[0.6rem]">Shivam</td>
              <td className="border-[#443C68] border-2 px-[0.7rem] py-[0.6rem]">Shivam@gmail.com</td>
              <td className="border-[#443C68] border-2 px-[0.7rem] py-[0.6rem]">5487848748</td>
              <td className="border-[#443C68] border-2 px-[0.7rem] py-[0.6rem]">Active</td>
            </tr>
          ))}
          
          
        </tbody>
      </table>
    </div>
    </div>
   
  )
}

export default Users