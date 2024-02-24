import React from 'react'

const NoPage = () => {
  return (
    <div>
      <div className='w-full px-16 md:px-20 Lg:px-32 py-5'>
          <div className='flex flex-col md:flex-row gap-4  items-center justify-between'>
            <div className='flex items-center '>
              <input type="text" id='searchBox' placeholder='search here' className={`outline-none px-4 py-[.4rem] border-2 ${mode==="dark"?"border-gray-50":"border-slate-800 "}`} />
              <button className='bg-slate-800 hover:bg-slate-700 text-white font-medium text-md px-4 py-2'>search</button>
            </div>
            <div className='flex gap-2 sm:gap-4'>
             <select className='border-2 border-slate-800 px-2 py-2' onChange={(e) => setMobile(e.target.value)} name="mobile" id="mobile">
              
              {["Mobiles","vivo","oppo","redmi","Iphone"].map((item)=>(
                <option className='my-1 mx-2' key={item} value={item}>{item}</option>
              ))}
             </select>
             <select className='border-2 border-slate-800 px-2 py-2' value={clothing} onChange={(e) => setClothing(e.target.value)} name="mobile" id="clothing">
              {["Clothing","Jeans","Shirts","Shoes","Trends"].map((item)=>(
                <option key={item} value={item}>{item}</option>
              ))}
             </select>
             {/* <select className='border-2 border-slate-800 py-2' value={electronics} onChange={(e) => setElectronics(e.target.value)} name="mobile" id="electronic">
              {["Electronics","Home Appliance","SmartTv","AC & Cooler","Accesories"].map((item)=>(
                <option key={item} value={item}>{item}</option>
              ))}
             </select> */}
            </div>
          </div>

        </div>
    </div>
  )
}

export default NoPage