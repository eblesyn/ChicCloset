import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from "react-toastify";
import CartItem from './CartItem';

const Cart = () => {
  const productData = useSelector((state) => state.chic.productData);
  const userInfo = useSelector((state) => state.chic.userInfo);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let price = 0;
    productData.forEach((item) => {
      price += item.price * item.quantity;
    });
    setTotal(price.toFixed(2));
  }, [productData]);

  const handleCheckout = () => {
    if (userInfo) {
      // Proceed to checkout process
      toast.success("Proceeding to checkout");
    } else {
      toast.error("Please sign in to Checkout");
    }
  };

  return (
    <div>
      <div className='max-w-screen-xl mx-auto py-20 flex'>
        <CartItem />
        <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
          <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
            <h2 className='text-2xl font-medium'>Cart Totals</h2>
            <p className='flex items-center gap-4 text-base'>
              Subtotal
              <span className='font-titleFont font-bold text-lg'>$ {total}</span>
            </p>
            <p className='flex items-start gap-4 text-base'>
              Shipping
              <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, asperiores.</span>
            </p>
          </div>
          <p className='font-titleFont font-semibold flex justify-between mt-6'>
            Total <span className='text-xl font-bold'>$ {total}</span>
          </p>
          <button
            onClick={handleCheckout}
            className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300'
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    
  
    </div>
  );
};

export default Cart;
