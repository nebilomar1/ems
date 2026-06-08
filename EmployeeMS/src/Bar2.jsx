import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';
import './styles.css'
import './Style.css'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Managrole from './pages/Managrole'
import Admin from './Components/Admin';
import Managacc from './pages/Managacc';
import Requst from './pages/Requst';
import Dashboards from './pages/Dashboards';

const Bar2 = () => {
  return (
<BrowserRouter>
   <Admin>
     <Routes>
    
        <Route path='/' element={<Dashboards/>}/>
        <Route path='adim/dashboards'element={<Dashboards/>}/>
        <Route path='/managacc'element={<Managacc/>}/>
        <Route path='/requst'element={<Requst/>}/>
        <Route path='/managrole'element={<Managrole/>}/>
        </Routes>
    </Admin>
 </BrowserRouter>
  )
}

export default Bar2
