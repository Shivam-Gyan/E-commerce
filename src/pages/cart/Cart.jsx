import React, { useEffect, useRef, useState } from 'react'
import CartItem from '../../components/cartItem/CartItem';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { HiPlus } from "react-icons/hi";
import { IoArrowBack } from "react-icons/io5";
import { useContextState } from './../../context/Context'
import { MdOutlineArrowUpward, MdOutlineArrowDownward } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../components/Input/Input'
import { RiLogoutBoxRLine } from "react-icons/ri";
import { clearCart, fetchCart } from '../../redux/CartSlice';
import { DataService } from '../../firebase/Database/Database';

const Cart = () => {
  const { mode, user } = useContextState()
  const [summary, setSummary] = useState(false)
  const careItem=useSelector(state=>state.cart.carts)
  const [checkoutModel, setCheckoutModel] = useState(false)
  const [value, setValue] = useState({
    name:"",
    address:'',
    pincode:"",
    phone:""
  })
  const naviagte = useNavigate();
  const cartItem = useSelector(state => state.cart.carts)
  const dispatch = useDispatch()
  const [totalAmount, setTotalAmount] = useState(0);
  const shipping = cartItem.length === 0 ? 0 : parseInt(100);
  const grandTotal = cartItem.length === 0 ? 0 : shipping + totalAmount;


  const handleDiscount = () => {
    toast.info("Not Available",
      {
        position: "top-right",
        autoClose: 1000,
        theme: mode === "dark" ? "dark" : "light",
      })
  }
  const handleCheckoutModel=async()=>{
     // validation 
     if (value.name === "" || value.address == "" || value.pincode == "" || value.phone == "") {
      return toast.error("All fields are required", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    }
    const addressInfo = {
     value,
      date: new Date().toLocaleString(
        "en-US",
        {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }
      )
    }

    var options = {
      key: "rzp_test_GkPF5XxoEEKKLQ",
      key_secret: "JtJ4SMKh2nOO0YVxRsKSTG5p",
      amount: parseInt(grandTotal * 100),
      currency: "INR",
      order_receipt: 'order_rcptid_' + value.name,
      name: "E-Bharat",
      description: "for testing purpose",
      handler: function (response) {
        // console.log(response)
        toast.success('Payment Successful')
        const paymentId = response.razorpay_payment_id
        // store in firebase 
        const orderInfo = {
          careItem,
          addressInfo,
          date: new Date().toLocaleString(
            "en-US",
            {
              month: "short",
              day: "2-digit",
              year: "numeric",
            }
          ),
          email: user.email,
          userid: user.uid,
          paymentId
        }

       storeFirebase(orderInfo)
      },

      theme: {
        color: "#3399cc"
      }


    };
    emptyCart()
    
    var pay = new window.Razorpay(options);
    pay.open();
    setValue({
      name:"",
      address:'',
      pincode:"",
      phone:""
    })
    setCheckoutModel(prev=>!prev)
    
    
  }
  // store in firebase order
  const storeFirebase=async(orderInfo)=>{
    try {
      await DataService.order(orderInfo)
    } catch (error) {
      console.log(error)
      toast.error('error in order')
    }
  } 
   // after payment 
  const emptyCart=async()=>{
   try {
    await dispatch(clearCart())
   } catch (error) {
    console.log("error in empty cart")   }
  }


  useEffect(() => {
    let temp = 0;
    cartItem.forEach((cartItem) => {
      temp = temp + parseInt(cartItem.price) * parseInt(cartItem.quantity)
    })
    setTotalAmount(temp);
  }, [cartItem])



  useEffect(() => {
    if (user) dispatch(fetchCart(user?.uid))

  }, [])

  return (

    <div className=' relative flex flex-col w-full h-[82vh] lg:h-[91vh]'>
      <div className=' py-1 border-b-[0.5px] border-gray-200 '>
        <h1 className='w-full text-center text-3xl text-slate-800'>Shopping Cart</h1>
      </div>
      <div className='py-2 px-3 md:px-8 lg:px-28 overflow-hidden'>

        {/* Scrollable container */}
        {cartItem && cartItem.length === 0 ?
          <div className={`flex justify-center flex-col items-center `}>
            <div onClick={() => naviagte(-1)} className='text-gray-400 cursor-pointer font-medium flex gap-3 items-center'>
              <IoArrowBack className='text-2xl' />
              <span className='text-lg text-gray-400'>
                Continue Shopping
              </span>
            </div>
            <img src='https://go.picsnippets.com/hosted/images/ac/97a7e657b64475a09d370eb77d176a/cart_gif.gif' alt='empty cart fill it' className=' w-[65%] lg:w-[30%] h-auto ' /></div>
          : <div className={`pb-10 overflow-y-auto h-[76vh]  `} style={{ scrollbarWidth: "none" }}>
            {cartItem?.map((item) => (
              <CartItem key={item.dataId} item={item} />
            ))
            }

          </div>}

      </div>

      {/* checkout Model */}
      {checkoutModel &&
        <div className='z-30 w-full h-screen absolute flex justify-center items-center bg-slate-700 bg-opacity-35'>
          <div className= 'relative px-10 py-4 bg-white w-[85%] sm:w-3/4 md:w-[50%] lg:w-[40%]'>
          <div onClick={() => setCheckoutModel((prev) => !prev)} className=' absolute top-2 right-2  rotate-45 text-3xl'>
                <HiPlus />
            </div>
            <Input label="Name"  type="text" placeholder="Enter name" className=" w-full px-2 py-2 bg-transparent outline-none block border-slate-900 border-b-2 mb-4"
              value={value?.name} onChange={(e) => setValue(prev => ({ ...prev, name: e.target.value }))}
            />
            <Input label="Address"  type="text" placeholder="Enter address" className=" w-full px-2 py-2 bg-transparent outline-none block border-slate-900 border-b-2 mb-4"
              value={value?.address} onChange={(e) => setValue(prev => ({ ...prev, address: e.target.value }))}
            />
            <Input label="Phone no."  type="text" placeholder="Enter phone no." className=" w-full px-2 py-2 bg-transparent outline-none block border-slate-900 border-b-2 mb-4"
              value={value?.phone} onChange={(e) => setValue(prev => ({ ...prev, phone: e.target.value }))}
            />
            <Input label="Pincode"  type="text" placeholder="Enter pincode" className=" w-full px-2 py-2 bg-transparent outline-none block border-slate-900 border-b-2 mb-4"
              value={value?.pincode} onChange={(e) => setValue(prev => ({ ...prev, pincode: e.target.value }))}
            />
            <div className='w-full flex justify-center'>
            <button onClick={handleCheckoutModel} className=' px-4 py-2 bg-slate-800 text-white text-lg font-medium'>Procced</button>

            </div>
          </div>
        </div>}

      {/* summary page of cart total  */}
      <div className={` z-20 absolute bg-gray-100 flex flex-col gap-10 bottom-0 right-0 w-full py-3 px-3 sm:px-10 md:px-[5rem] lg:px-[7rem] xl:px-32 2xl:px-40 border-t-2 border-gray-400 `}>

        {summary ?
          <>
            <div onClick={() => setSummary((prev) => !prev)} className='cursor-pointer px-3 py-2 bg-slate-800 rounded-sm text-white text-2xl absolute top-1 left-[45%] lg:left-1/2'>
              <MdOutlineArrowDownward className=' ' />
            </div>
            <div className='relative mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4  '>
              <div className='flex gap-8 sm:gap-[4rem] md:gap-[5rem] lg:gap-[3rem] xl:gap-[7.3rem] justify-between px-2 py-3 border-2 border-gray-300 bg-white text-slate-800'>
                <p className='text-md font-semibold'>Discount</p>
                <p className=' truncate'>Rs.0</p>
              </div>
              <div className='flex gap-8 sm:gap-[4rem] md:gap-[5rem] lg:gap-[3rem] xl:gap-[7.3rem] justify-between px-2 py-3 border-2 border-gray-300 bg-white text-slate-800'>
                <p className='text-md font-semibold'>Delivery</p>
                <p className=' truncate'>Rs.{shipping}</p>
              </div>
              <div className='flex gap-8 sm:gap-[4rem] md:gap-[5rem] lg:gap-[3rem] xl:gap-[7.3rem] justify-between px-2 py-3 border-2 border-gray-300 bg-white text-slate-800'>
                <p className='text-md font-semibold'>SubTotal</p>
                <p className='' >Rs.{totalAmount}</p>
              </div>
              <div className='flex gap-8 sm:gap-[4rem] md:gap-[5rem] lg:gap-[4rem] xl:gap-[7.3rem] justify-between px-2 py-3 border-2 border-gray-300 bg-white text-slate-800'>
                <p className='text-md font-semibold'>Total</p>
                <p className=' truncate'>Rs.{grandTotal}</p>
              </div>
            </div>

            <div className='flex justify-between items-center gap-4 flex-col md:flex-row  '>
              <button onClick={() => setCheckoutModel((prev) => !prev)} className='flex w-[80%] sm:w-1/2 lg:w-auto  px-5 py-2 justify-between items-center gap-8 bg-slate-800 text-white font-medium '>
                <p >Check Out</p>
                <RiLogoutBoxRLine />
              </button>
              <div className='flex justify-center   text-white font-medium '>
                <input type="text" placeholder='Enter promo code ' className=' text-slate-900 text-start outline-none border-2 border-gray-400 px-4 py-2' />
                <span onClick={handleDiscount} className='px-3 py-2 bg-slate-800 font-medium '>Discount</span>
              </div>
            </div>
            <div onClick={() => naviagte(-1)} className='text-gray-400 cursor-pointer font-medium flex gap-3 items-center'>
              <IoArrowBack className='text-2xl' />
              <span className='text-lg text-gray-400'>
                Continue Shopping
              </span>
            </div>
          </> :
          <div className={`text-center mb-6 lg:mb-0 flex justify-center flex-col items-center  `}>
            <div onClick={() => setSummary((prev) => !prev)} className=' cursor-pointer w-12  px-3 py-2  bg-slate-800 rounded-sm text-white text-2xl '>
              {!summary && <MdOutlineArrowUpward />}
            </div>
            <h1 className='text-xl font-semibold text-slate-800 tracking-wide font-mono'>Tap summary</h1>
          </div>}
      </div>
    </div>

  )
}

export default Cart