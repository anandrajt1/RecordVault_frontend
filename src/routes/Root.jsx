import React from 'react'
import { Outlet } from "react-router-dom";

import NavBar from '../components/NavBar.jsx';


function Root() {
  return (
    <>
    <NavBar/>
    
    <Outlet />
    </>
  )
}

export default Root