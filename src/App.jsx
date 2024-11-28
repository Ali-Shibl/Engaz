import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import AuthProviderContext from './Context/UserLogin'
import AuthProductRoute from './Components/ProductRoute/AuthProductRoute'
import ProductRoute from './Components/ProductRoute/ProductRoute'
import Account from './Pages/Account/Account'

export default function App() {

let routers= createBrowserRouter([
  
  {path:'', element:<Layout/>,children:[

    {index:true ,element:<Navigate to={'/login'}/>},

    {path:'login' ,element:<AuthProductRoute><Login/></AuthProductRoute>},
    

    {path:'home' ,element:<ProductRoute><Home/></ProductRoute>},
    {path:'account',element:<ProductRoute><Account/></ProductRoute>}

  ]}
])



  return (
    <AuthProviderContext>
   <RouterProvider router={routers}/>
   </AuthProviderContext>
  )
}
