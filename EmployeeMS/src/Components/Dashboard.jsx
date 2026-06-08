import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Employee from '../pages/Employee';
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
import { useTranslation } from "react-i18next";
const Dashboard = () => {
  const { t, i18n } = useTranslation();
  const languages = [
    { code: "en", name: "English" },
    { code: "om", name: "Afaan Oromo" },
    { code: "am", name: "አማርኛ" },
  ];
  return (
    <div className='container-fluid'>
      <div className='row flex-nowrap'>
        
        <div className='col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-[#3e3e5e] h-[80rem]'>
          <div className='d-flex flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100'>
           <Link to="/dashboard" className='d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none'>
            
            <span className='fs-5 fw-bolder d-none d-sm-inline'>{t('HR Manager')} </span></Link>
           <ul className='nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items'>
            <li className='w-100'>
              <Link to="/dashboard" className='nav-link text-white px-0 align-middle'><i className='fs-4 bi-speedometer2 ms-2'></i>
              <span className='ms-2 d-none d-sm-inline'>{t('Dashboard')}  </span></Link>
            </li>
            <li className='w-100'>
              <Link to="/dashboard/employeee" ><i className='fs-4 bi-people ms-2'></i>
              <span className='ms-2 d-none d-sm-inline'>{t('Manage Employee')}</span></Link>
            </li>
            <li className='w-100'>
              <Link to="/dashboard/categorys"  className='nav-link text-white px-0 align-middle'>
                <i className='fs-4 bi-columns ms-2'></i>
               <span className='ms-2 d-none d-sm-inline' >{t('Department')} </span></Link>
            </li>
            <li className='w-100'>
              <Link to="/dashboard/hero" className='nav-link text-white px-0 align-middle'>
              <i className='bi bi-briefcase fs-4 ms-2'></i>

              <span className='ms-2 d-none d-sm-inline'>{t('')}Job Vacancy</span></Link>
            </li>
            <li className='w-100'>
              <Link to="/dashboard/profiles" className='nav-link text-white px-0 align-middle'>
              <i className='fs-4 bi-person ms-2'></i>
              <span className='ms-2 d-none d-sm-inline'>{t('Profile')}</span></Link>
            </li>
            <li className='w-100'>
              <Link   className='nav-link text-white px-0 align-middle'>
              <i className='fs-4 bi-power ms-2'></i>
              <span className='ms-2 d-none d-sm-inline'>{t('Logout')}</span></Link>
            </li>
           </ul>
          </div>
        </div>
        <div className='col p-0 m-0 '>
          <div className='p-2 d-flex justify-center shadow bg-[#484869]'>
          <select onChange={(e) => i18n.changeLanguage(e.target.value)} className="text-[#5a5a4b]"> 
      {languages.map((language) => (
       
        <option value={language.code} key={language.code} className="text-[#5a5a4b]">
          {language.name}
        </option>
      ))}
    </select>
            <h2 className='font-bold text-3xl'>
             {t('Bale Zone Education bureau Employee Managament system')} 
            </h2>
          </div>
          <Outlet/>
        </div>
      </div>

    </div>
  
  )
}

export default Dashboard
