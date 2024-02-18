import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContextState } from '../../context/Context'
import Input from '../../components/Input/Input'
import { authServices } from '../../firebase/authentication/authService';
import { useNavigate } from 'react-router';
import Structure from '../../components/Structure';

const Login = () => {
    const { mode, isLoading, setIsLoading } = useContextState()
    const navigate = useNavigate()
    const [value, setValue] = useState({
        email: "",
        password: ""
    })


    const submit = async () => {
        if (value?.email === "" || value?.password === "") {
            toast.error("Fill all fields", {
                position: "top-center",
                autoClose: 1000,
                theme: mode === "dark" ? "dark" : "light",
            })
        }
        else {
            try {
                setIsLoading(true)
                const data = await authServices.login({ email: value?.email, password: value?.password })
                localStorage.setItem('user', JSON.stringify(data))
                toast.success("Login successful",
                    {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: mode === "dark" ? "dark" : "light",
                    })
                setIsLoading(false)
                navigate('/')

            } catch (error) {
                toast.error(error.message);
                setIsLoading(false)
            }
        }
    }


    return (
        <Structure>
                  <div className=' w-10/11 lg:flex grid-cols-1 justify-center items-center transform rotate-180'>
                <div className={` text-white ${mode === "dark" ? "bg-slate-700" : "bg-slate-900"} mx-4 sm:mx-0 flex flex-col gap-20 items-center px-6 py-4 `}>
                    <div>
                        <h1 className=' text-4xl font-semibold'>Login</h1>
                        <p className='my-4 text-xl font-semibold'>Get access to your Orders, Wishlist and Recommendations</p>
                    </div>
                    <div className=' justify-end'>
                        <img src="https://www.pinclipart.com/picdir/big/212-2129001_mobile-app-development-services-business-login-illustration-png.png" className=' w-52' alt="authentication_png" />
                    </div>
                </div>
                <div className={`mx-4 sm:mx-0  flex flex-col text-slate-900 px-6 py-[0.88vw] bg-slate-300`}>
                    <div className='py-2 relative'>
                        <Input label="Email" text="email" placeholder="Enter email" className=" w-full border-b-2 px-2 py-1 border-slate-900 bg-transparent block mb-6 outline-none"
                            value={value?.name} onChange={(e) => setValue(prev => ({ ...prev, email: e.target.value }))}
                        />
                        <Input label="Password" text="password" type="password" placeholder="Enter password" className=" w-full px-2 py-2 bg-transparent outline-none block border-slate-900 border-b-2 mb-4"
                            value={value?.password} onChange={(e) => setValue(prev => ({ ...prev, password: e.target.value }))}
                        />

                        {isLoading && <div
                            className="absolute top-1/2 left-1/2 bl h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-success motion-reduce:animate-[spin_1.5s_linear_infinite]"
                            role="status">
                            <span
                                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                            >Loading...</span>
                        </div>}
                    </div>
                    <button
                        type='submit'
                        className="mb-16 sm:mb-24 justify-end w-full bg-slate-900 hover:bg-slate-600 text-white font-bold py-2 px-4"
                        onClick={submit}
                    >
                        Login
                    </button>
                    <p className="text-sm font-medium my-2 ">Create a new account?<Link to="/signup" className=' text-blue-800'> Signup</Link>.</p>
                    <p className="text-sm font-medium mb-2 ">By continuing, you agree to <span className=' text-blue-800'>Oracle's Terms of Use</span> and <span className=' text-blue-800 ' >Privacy Policy</span>.</p>
                </div>
            </div>
            </Structure>
    )
}

export default Login