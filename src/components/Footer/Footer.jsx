
import React from 'react';
import { FaGithub,FaLinkedinIn,FaInstagram  } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import {useContextState} from '../../context/Context'
import { Link } from 'react-router-dom';

const Footer = () => {
  const {mode}=useContextState()

  return (
    <footer className={`relative pt-8 pb-6 ${mode==="dark"?"bg-slate-300":"bg-slate-200"}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-blue-700">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2 text-blue-600">
              Find us on any of these platforms, available 24x7 to help you.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 flex felx-col gap-2">
              <button className="bg-white text-slate-800 shadow-lg text-xl  h-10 w-10 flex items-center justify-center  rounded-full outline-none focus:outline-none mr-2" type="button">
                <FaThreads  />
              </button>
              <button className="bg-white text-slate-800 shadow-lg text-xl  h-10 w-10 flex  items-center justify-center  rounded-full outline-none focus:outline-none mr-2" type="button">
                <FaGithub/>
              </button>
              <button className="bg-white text-slate-800 shadow-lg text-xl  h-10 w-10  flex items-center justify-center  rounded-full outline-none focus:outline-none mr-2" type="button">
                <FaLinkedinIn/>
              </button>
              <button className=" bg-white text-slate-800 shadow-lg text-xl  h-10 w-10 flex  items-center justify-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <FaInstagram />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-md font-semibold mb-4">Useful Links</span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-blue-400 hover:text-blue-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">About Us</a>
                  </li>
                  <li>
                    <a className="text-blue-400 hover:text-blue-800 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Blog</a>
                  </li>
                  <li>
                    <a className="text-blue-400 hover:text-blue-800 font-semibold block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Github</a>
                  </li>
                  <li>
                    <a className=" text-blue-400 hover:text-blue-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Free Products</a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-slate-800 text-md font-medium mb-4">Other Resources</span>
                <ul className=" list-none">
                  <li>
                    <a className="text-blue-400 hover:text-blue-800 font-semibold block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
                  </li>
                  <li>
                    <a className="text-blue-400 hover:text-blue-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a className="text-blue-400 hover:text-blue-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
                  </li>
                  <li>
                    <a className="text-blue-400 hover:text-blue-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2024</span><a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank"> Oracle Mart by </a>
              <Link to="/">Shivam Gupta</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;



