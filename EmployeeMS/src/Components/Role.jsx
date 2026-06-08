//super
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";

const Role = () => {
  const [ role, setRole] =useState([])
  useEffect(() => {
    
      axios.get('http://localhost:3000/auth/role')
      .then(result => {
        if(result.data.Status){
          setRole(result.data.Result);
        } else {
          alert(result.data.Error)
        }
      }).catch(err => console.log(err))
     
  },[])

  const { t, i18n } = useTranslation();
const languages = [
  { code: "en", name: "English" },
  { code: "om", name: "Afaan Oromo" },
  { code: "am", name: "አማርኛ" },
];
  return (
    <div className='px-5 mt-2'>
    <div className='d-flex justify-content-center'>
      <h3 className='font-bold text-2xl'>{t('Account List')}</h3>
    </div>
    <Link to="/sidebar/add_rolee" className='btn btn-success'>{t('Add Account')}</Link>


    <div className='mt-3'>
        <table className='table'>

          <thead>
            <tr>
              <th>Name</th>
              <th>image</th>
              <th>Email</th>
              <th>Role</th>
              
              <th>Salary</th>
              <th>Action</th>

            </tr>
          </thead>
          <tbody>
            {
              role.map(e => (
                <tr>
                  <td>{e.name}</td>
                  <td><img src={`http://localhost:3000/Images`+e.image} className="role_image" /></td>
                  <td>{e.email}</td>
                  <td>{e.role}</td>
                  
                  <td>{e.salary}</td>
                  <td>
                    <Link to ={'/sidebar/edit_role/'+ e.id} className='btn btn-info btn-sm me-2'>Edit</Link>
                    <button className='btn btn-warning btn-sm'>Delete</button>
                    </td> 
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      </div>
  )
}

export default Role
