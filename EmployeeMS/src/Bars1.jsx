
import React from 'react';
import {useTranslation}from 'react-i18next';
import i18next from 'i18next';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';
import './styles.css'
import './Style.css'
import 'i18next-browser-languagedetector'
import About from './pages/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbars from './Components/Navbars';
import Login from './pages/Login';
import Home from './pages/Home';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Dashboard from './Components/Dashboard';
import Bars from './Bars';
import Homes from './Components/Homes';
import Employeee from './Components/Employeee';

import Profiles from './Components/Profiles';
import Categorys from './Components/Categorys';
import AddCategory from './Components/AddCategory';
import AddEmployee from './Components/AddEmployee';
import Sidebar from './Components/Sidebar';
import Employee from './Components/Employee';
import Category from './Components/Category';
import AddCategorys from './Components/AddCategorys';
import AddEmployeea from './Components/AddEmployeea';
import Role from './Components/Role';
import Profile from './Components/Profile';
import AddRole from './Components/AddRole';
import AddroleCategory from './Components/AddroleCategory';
import RoleCategory from './Components/RoleCategory';
import AddRolee from './Components/AddRolee';
import EditEmployeee from './Components/EditEmployeee';
import Edit_employee from './Components/Edit_employee';
import EditRole from './Components/EditRole';
import Taskmanger from './Components/Taskmanger';
import Givetask from './Components/Givetask';
import VeiwTask from './Components/VeiwTask';
import Financemanager from './Components/Financemanager';
import Viewatte from './Components/Viewatte';
import Approvesalary from './Components/Approvesalary';
import Managacc from './pages/Managacc';
import Dashboards from './pages/Dashboards';
import Admin from './Components/Admin';
import Requst from './pages/Requst';
import Bar2 from './Bar2';
import Hero from './Components/Hero' 
import Vacancy from './Components/Vacancy';
import Navbare from './Components/Navbare';

const Bars1 = () => {
  return (
<BrowserRouter>
    
        <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/dashboards' element={<Dashboards/>}/>
        <Route path='/login' element={<Login/>}/>
               
         <Route path='/managacc' element={<Managacc/>}></Route>

        <Route path='/sidebar' element={<Sidebar/>}>
        <Route path='' element={<Homes/>}/>
        <Route path='/sidebar/employee' element={<Employee/>}/>
        <Route path='/sidebar/category' element={<Category/>}/>
        <Route path='/sidebar/role' element={<Role/>}/>
        <Route path='/sidebar/profile' element={<Profile/>}/>
        <Route path='/sidebar/add_categorys' element={<AddCategorys/>}/>
        <Route path='/sidebar/add_employeea' element={<AddEmployeea/>}/>
        <Route path='/sidebar/edit_role/:id' element={<EditRole/>}/>
        <Route path='/sidebar/addrole_category' element={<AddroleCategory/>}/>
        <Route path='/sidebar/role_category' element={<RoleCategory/>}/>
        <Route path='/sidebar/add_rolee' element={<AddRolee/>}/>
        <Route path='/sidebar/edit_employee/:id' element={<Edit_employee/>}/>
        </Route>
    
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='' element={<Homes/>}></Route>
          <Route path='/dashboard/employeee' element={<Employeee/>}></Route>
          <Route path='/dashboard/categorys' element={<Categorys/>}></Route>
          <Route path='/dashboard/profiles' element={<Profiles/>}></Route>
          <Route path='/dashboard/add_category' element={<AddCategory/>}></Route>
          <Route path='/dashboard/add_employee' element={<AddEmployee/>}></Route>
          <Route path='/dashboard/edit_employeee/:id' element={<EditEmployeee/>}></Route>
          <Route path='/dashboard/hero' element={<Hero/>}></Route>
          <Route path='/dashboard/vacancy' element={<Vacancy/>}></Route>
          <Route path='/dashboard/navbare' element={<Navbare/>}></Route>
          
        </Route>
        <Route path='/taskmanger' element={<Taskmanger/>}>
        <Route path='/taskmanger/givetask' element={<Givetask/>}></Route>
          <Route path='/taskmanger/viewtask' element={<VeiwTask/>}></Route>
        </Route>
        <Route path='/financemanager' element={<Financemanager/>}>
        <Route path='/financemanager/viewatte' element={<Viewatte/>}></Route>
          <Route path='/financemanager/approvesalary' element={<Approvesalary/>}></Route>
        </Route>
        <Route path='/bar2' element={<Bar2/>}/>
        </Routes>
   
    </BrowserRouter>
  )
}

export default Bars1
/*    */