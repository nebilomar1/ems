import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Employee from './pages/Employee';
import Viewemployee from './pages/Viewemployee';
import Assignproject from './pages/Assignproject';
import Projectstatus from './pages/Projectstatus';
import Approveleave from './pages/Approveleave';
import Attendance from './pages/Attendance';


import Viewattendance from './pages/Viewattendance';
import Profile from './pages/Profile';


import './App.css';
import Sidebar from './Components/Sidebar';
import Dashboards from './pages/Dashboards';
import Managacc from './pages/Managacc';
import Requst from './pages/Requst';
const Bars = () => {
    
  return (
    <BrowserRouter>
    <Admin>
     <Routes>
    
        <Route path='/' element={<Dashboards/>}/>
        <Route path='/dashboards'element={<Dashboards/>}/>
        <Route path='/managacc'element={<Managacc/>}/>
        <Route path='/requst'element={<Requst/>}/>
        
        


      </Routes>
    </Admin>
 </BrowserRouter>
  )
}

export default Bars
