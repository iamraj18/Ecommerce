import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
export default function PrivateComponent() {
 
    const auth=localStorage.getItem("user");
    return (auth ? <Outlet/> : <Navigate to="/signUp"/>)
    //console.log(auth.valueOf(name));
    
}
