import React, { useEffect, useState } from 'react';
import SwiperSlider from '../../components/SwiperSlider/SwiperSlider';
import { offers, Mobileoffers } from '../../Assets/assets';
import ProductCard from '../../components/productCard/ProductCard';
import { useContextState } from '../../context/Context';
import { useDispatch,useSelector } from 'react-redux';

const Home = () => {
  const {product} = useContextState();

  return (
    <div>
      <SwiperSlider offers={offers} Mobileoffers={Mobileoffers} autoSlide={true} autoSlideInterval={2000} />

      {/* Sponsored products */}
      <h1 className='ml-4 mt-7 mb-4 text-[1.2rem] text-center font-medium text-slate-800'>Mobiles & Electronic</h1>
      <div
        className="flex w-full py-7  justify-start  border-gray-400 overflow-x-auto whitespace-nowrap "
        style={{ overflowX: 'auto', scrollbarWidth: 'none' }}
      >
        {product?.map((item, index) => (
          (item.category==="mobile" ||item.category==="electronic") &&
          <ProductCard key={index} item={item} />
          ))}

      </div>
      <div className='h-6'></div>
          <h1 className='ml-4 mb-4 text-center text-[1.5rem] font-medium text-slate-800'>Clothing</h1>
          <div
        className="flex w-full py-7  justify-start border-gray-400 overflow-x-auto whitespace-nowrap "
        style={{ overflowX: 'auto', scrollbarWidth: 'none' }}
      >
        {product?.map((item, index) => (
            (item.category==="clothingJeans" || item.category==="clothingShirt" ||item.category==="shoe")  &&
          <ProductCard key={index} item={item} />
        ))}

      </div>
      <div className='h-6'></div>
          <h1 className='ml-4 mb-4 text-center text-[1.5rem] font-medium text-slate-800'>Snacks</h1>
          <div
        className="flex w-full py-7  justify-start   border-gray-400 overflow-x-auto whitespace-nowrap "
        style={{ overflowX: 'auto', scrollbarWidth: 'none' }}
      >
        {product?.map((item, index) => (
            (item.category==="snacks")  &&
          <ProductCard key={index} item={item} />
        ))}

      </div>
    </div>
  );
};

export default Home;
