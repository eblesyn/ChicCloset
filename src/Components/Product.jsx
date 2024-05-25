import React from 'react'
import ProductCart from './ProductCart'

const Product = ({products}) => {
  
  
  return (
    <div className='py-10'>

<div className='flex flex-col items-center gap-4'>
    <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>Shopping Everyday</h1>
    <span className='w-20 h-[3px] bg-black'></span>
    <p className='max-w-[700px] text-gray-600 text-center'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat delectus sed aperiam adipisci nulla quis, odio aspernatur ad porro libero placeat animi, sapiente doloremque! Quisquam ut odit fugiat blanditiis doloribus?
    </p>
</div>

<div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10'>
    {
      products.map((item)=>(
        <ProductCart key={item.id} products={item}/>
      ))
    }

</div>


    </div>
  )
}

export default Product