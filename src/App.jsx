import React from 'react'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import {
  createBrowserRouter, Outlet, RouterProvider,ScrollRestoration 
} from 'react-router-dom'
import Cart from './Components/Cart'
import { productsData } from './Api/Api'
import { ToastContainer} from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
import Products from './Components/Products'
import Login from './Pages/Login'




const Layout =()=>{
  return (
    <div>
      <Header/>
      <ScrollRestoration/>
    
      <Outlet/>
    <Footer/>
    </div>
  )
}

const router
=createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element: <Home/>,
        loader:productsData,
       
      },
     {
      path:"/products/:id",
      element:<Products/>
     },
      {
        path:"/cart",
        element: <Cart/>
      },
      {
        path:"/login",
        element: <Login/>
      },
    ]
  }
])


const App = () => {
  return (
    <div className='font-bodyFont'>
      <RouterProvider router={router}/>
      <ToastContainer/>
    </div>
  )
}

export default App