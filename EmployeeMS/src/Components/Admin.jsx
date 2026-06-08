import React  from 'react'
import { FaBars, FaDashcube } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Admin = (children) => {
    const menuItem=[
        {
            path:"/",
            name:'Dashboard',
            icon:<FaDashcube/>

        },
      
        {
            path:"/managacc",
            name:'Dashboard',
            icon:<FaDashcube/>

        },
        {
            path:"/requst",
            name:'Dashboard',
            icon:<FaDashcube/>

        },
        {
            path:"/managrole",
            name:'Dashboard',
            icon:<FaDashcube/>

        },
    ]
  return (
    <div className='container'>
 <div className="sidebar">
    <div className="top_section">
        <h1 className='logo'>logo</h1>
        <div className="bars"><FaBars/>
        </div>
    </div>
    {
        menuItem.map((item, index)=>(
            <NavLink to={item.path} key={index} className={link} activeclassName="active">
                <div className="icon">{item.icon}</div>
                <div className="link_text">{item.name}</div>

            </NavLink>
        ))
    }
 </div>
   <main>{children}</main>
    </div>
  )
}

export default Admin
