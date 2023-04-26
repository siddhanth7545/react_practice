import React from 'react'
import Home from './Ridee/Home'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navi from './Ridee/Navi';
import Login from './Ridee/Login';



const First = () => {
  return (
    <>
    
     <Router>
        <Navi/>
       
         <Routes>
             <Route path='/' element={<Home/>} /> 
             <Route path='/Login' element={<Login />} /> 
          
         </Routes>
     </Router>
    </>
  )
}

export default First