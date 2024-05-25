import React from 'react'
import Banner from '../Components/Banner'
import Product from '../Components/Product'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


const Home = () => {
  const[products, setProducts] =useState([])
const data = useLoaderData();
useEffect(()=> {
  setProducts(data.data)

},[data])
  return (
    <div>
      <Banner/>
       <Product  products={products}/>
    </div>
  )
}

export default Home