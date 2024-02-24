import React, { useState, useEffect } from 'react'
import { ContextProvider } from './Context'
import { DataService } from '../firebase/Database/Database';
import { toast } from 'react-toastify';

const ContextWrapper = ({ children }) => {
  const [mode, setMode] = useState('light')
  const [isLoading, setIsLoading] = useState(false)
  // remove update product container
  const [showRemoveContainer, setShowRemoveContainer] = useState(false)
  const [product, setProduct] = useState([]);
  // const [cartProduct, setCartProduct] = useState([]);

  
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#2D3748'
    } else {
      setMode('light')
      document.body.style.backgroundColor = '#fff'
    }
  }
  const user = JSON.parse(localStorage.getItem('user'))


  // ****** get product from database--------------------
  
  
  const getProductData = async () => {
    setIsLoading(true)
    try {
      await DataService.getProductFromDatabase()
      setIsLoading(false);
    } catch (error) {
      toast.error("Error while fetching product From database", {
        autoClose: 800,
      })
      setIsLoading(false)
    }
  }
  
  //--------------------------------------------------
  
  // --------when this component mount it call the getProductData()---
  useEffect(() => {
    getProductData();
    setProduct(JSON.parse(localStorage.getItem('products')))

  }, []);

  // -----------------------------------------------------------------

  return (
    <ContextProvider value={{ mode, toggleMode, isLoading,user, setIsLoading, product, setProduct, getProductData, showRemoveContainer, setShowRemoveContainer }}>
      {children}
    </ContextProvider>
  )
}

export default ContextWrapper