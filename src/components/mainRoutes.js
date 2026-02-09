import React from 'react'
import { Route,Routes } from "react-router-dom";
import Booking from "../views/Booking";
import Assests from "../views/Assests";
import Dashboard from "../views/Dashboard";
import Sell from "../views/Sell";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";
import Calender from '../views/Calender';
import Services from '../views/Services';

function mainRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/booking" element={<Booking/>}></Route>
        <Route path="/assests" element={<Assests/>}></Route>
        <Route path="/sell" element={<Sell/>}></Route>
        <Route path="/calender" element={<Calender/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        
        <Route path="/sign_in" element={<SignIn/>}></Route>
        <Route path="/sign_up" element={<SignUp/>}></Route>
    </Routes>
  )
}

export default mainRoutes