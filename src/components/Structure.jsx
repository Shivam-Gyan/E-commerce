import React from 'react'

const Structure = ({children}) => {
  return (
    <div className=' w-full mt-20 xl:my-auto xl:h-screen z-40 py-8 flex justify-center items-center bg-[url(https://www.getadmiral.com/hubfs/hero-bg.png)] bg-center bg-cover bg-no-repeat transform rotate-180 '   >
    {children}
    </div>
  )
}

export default Structure