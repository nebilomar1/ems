import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

import {
  FaTh,
  FaBars,
  FaPeopleCarry,
  FaPeopleArrows,
  FaProjectDiagram,
  FaTable,
  FaTag,
  FaAt,
} from "react-icons/fa"
import { Link, Outlet } from 'react-router-dom';
const Taskmanger = () => {
    
  return (
    <div className='container-fluid'>
    <div className='row flex-nowrap'>
      <div className='col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-[#3e3e5e] h-[50rem]'>
        <div className='d-flex flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100'>
         <Link to="/taskmanger" className='d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none'>
          
          <span className='fs-5 fw-bolder d-none d-sm-inline'>Task Manager </span></Link>
         <ul className='nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items'>
          <li className='w-100'>
            <Link to="/taskmanger" className='nav-link text-white px-0 align-middle'><i className='fs-4 bi-speedometer2 ms-2'></i>
            <span className='ms-2 d-none d-sm-inline'> Dashboard </span></Link>
          </li>
          <li className='w-100'>
            <Link to="/taskmanger/givetask" ><i className='fs-4 bi-bank ms-2'></i>
            <span className='ms-2 d-none d-sm-inline'>Give Task</span></Link>
          </li>
          <li className='w-100'>
            <Link to="/taskmanger/viewtask" ><i className='fs-4 bi-bootstrap-reboot ms-2'></i>
            <span className='ms-2 d-none d-sm-inline'>view  Task</span></Link>
          </li>
          
          <li className='w-100'>
            <Link   className='nav-link text-white px-0 align-middle'>
            <i className='fs-4 bi-power ms-2'></i>
            <span className='ms-2 d-none d-sm-inline'> Logout</span></Link>
          </li>
         </ul>
        </div>
      </div>
      <div className='col p-0 m-0 '>
        <div className='p-2 d-flex justify-center shadow bg-[#484869]'>
          <h2 className='font-bold text-3xl'>
            Bale Zone Employee Managament system
          </h2>
        </div>
        <Outlet/>
      </div>
    </div>

  </div>
  )
}



export default Taskmanger
