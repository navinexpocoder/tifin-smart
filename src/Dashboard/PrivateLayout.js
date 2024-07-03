import React from 'react'
import { Navigate, Outlet ,useNavigate } from 'react-router-dom'


function PrivateLayout() {
  
  const token = localStorage.getItem("authToken")
  
  if(token){
    return <Outlet/>
  }else{
    return <Navigate to="/sign-in"/>
  }
 

}

export default PrivateLayout