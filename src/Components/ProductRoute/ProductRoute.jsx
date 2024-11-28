import React from 'react'
import { useContext } from 'react'
import { Auth } from '../../Context/UserLogin'
import { Navigate } from 'react-router-dom'

export default function ProductRoute({children}) {

const {UserIsLogin}=useContext(Auth)

  return UserIsLogin?children: <Navigate to={'/login'}/> 
}
