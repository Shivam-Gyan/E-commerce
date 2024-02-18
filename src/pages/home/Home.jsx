import React, { useState } from 'react';
import SwiperSlider from '../../components/SwiperSlider/SwiperSlider';
import { offers, Mobileoffers } from '../../Assets/assets';
import ProductCard from '../../components/productCard/ProductCard';
import { useContextState } from '../../context/Context';
import { useDispatch,useSelector } from 'react-redux';
import {addToCart,deleteFromCart} from '../../redux/CartSlice'

const Home = () => {
  const { mode } = useContextState();
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart)

  return (
    <div>
      <SwiperSlider offers={offers} Mobileoffers={Mobileoffers} autoSlide={true} autoSlideInterval={2000} />

      {/* Sponsored products */}
      <div
        className="flex w-full bg-gray-500 justify-start overflow-x-auto whitespace-nowrap "
        style={{ overflowX: 'auto', scrollbarWidth: 'none' }}
      >
        {[1, 2, 3, 2, 24, 24, 3, 4].map((_, index) => (
          <ProductCard key={index} />
        ))}

      </div>
    </div>
  );
};

export default Home;
