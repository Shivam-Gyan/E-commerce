import React, { useState,useEffect } from 'react'
import { ContextProvider } from './Context'
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from '../firebase/Database/Database';
// import { DataService } from '../firebase/Database/Database';

import { Timestamp, addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';

const ContextWrapper = ({ children }) => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const [mode, setMode] = useState('light')
  const [isLoading, setIsLoading] = useState(false)
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#6b7280'
    } else {
      setMode('light')
      document.body.style.backgroundColor = '#fff'
    }
  }
  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )

  })

  const addProduct = async () => {

    if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
      return toast.error('Please fill all fields')
    }
    const productRef = collection(db, "products")
    setIsLoading(true)
    try {
      await addDoc(productRef, products)
      toast.success("Product Add successfully")
      getProductData()
      closeModal()
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
    setProducts("")
  }

  const [product, setProduct] = useState([]);

  // ****** get product
  const getProductData = async () => {
    setIsLoading(true)
    try {
      const q = query(
        collection(db, "products"),
        orderBy("time"),
        // limit(5)
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productsArray)
        setIsLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getProductData();
  }, []);


  return (
    <ContextProvider value={{ mode, toggleMode, isLoading, setIsLoading, products, setProducts,addProduct }}>
      {children}
    </ContextProvider>
  )
}

export default ContextWrapper