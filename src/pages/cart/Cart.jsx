import React from 'react'

import CartItem from '../../components/cartItem/CartItem';
import { toast } from 'react-toastify';
import {useContextState} from './../../context/Context'

const Cart = () => {
  const {mode}=useContextState()
  const value=Math.floor((Math.random()*6)+1)

  const handleDiscount=()=>{
    toast.info("Not Available",
    {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: mode === "dark" ? "dark" : "light",
    })
  }
  return (
    <div className="mt-12 sm:mt-20  flex flex-col-reverse md:flex-row w-screen h-full px-2 sm:px-14 py-7">

      {/* My Cart */}
      <div className="w-full flex flex-col h-fit gap-4 p-4 ">
        <p className="text-blue-900 text-xl font-extrabold">My cart</p>

        {/* Product */}
        <CartItem/>
        <CartItem/>
        <CartItem/>
      </div>

      {/* Purchase Resume */}
      <div className="flex flex-col w-full md:w-2/3 h-fit gap-4 p-4">
        <p className="text-blue-900 text-xl font-extrabold">Purchase Resume</p>
        <div className="flex flex-col p-4 gap-4 text-lg font-semibold shadow-md border rounded-sm">
          <div className="flex flex-row justify-between">
            <p className="text-gray-600">Subtotal  ({value} Items)</p>
            <p className="text-end font-bold">$99.98</p>
          </div>
          <hr className="bg-gray-200 h-0.5" />
          <div className="flex flex-row justify-between">
            <p className="text-gray-600">Freight</p>
            <div>
              <p className="text-end font-bold">$3.90</p>
              <p className="text-gray-600 text-sm font-normal">Arrives on Jul 16</p>
            </div>
          </div>
          <hr className="bg-gray-200 h-0.5" />
          <div className="flex flex-row justify-between">
            <p className="text-gray-600">Discount Coupon</p>
            <button className="text-gray-500 text-base underline" onClick={handleDiscount}>Add</button>
          </div>
          <hr className="bg-gray-200 h-0.5" />
          <div className="flex flex-row justify-between">
            <p className="text-gray-600">Total</p>
            <div>
              <p className="text-end font-bold">$103.88</p>
            </div>
          </div>
          <div className=" flex flex-col sm:flex-row gap-2">
            <button className="transition-colors text-sm bg-blue-600 hover:bg-blue-700 p-2 rounded-sm w-full text-white text-hover shadow-md">
              FINISH
            </button>
            <button className="transition-colors text-sm bg-white border border-gray-600 p-2 rounded-sm w-full text-gray-700 text-hover shadow-md">
              ADD MORE PRODUCTS
            </button>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Cart