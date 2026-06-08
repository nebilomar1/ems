import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";
const Employeee = () => {
  const [ employeee, setEmployeee] =useState([])
  useEffect(() => {
    
      axios.get('http://localhost:3000/auth/employeee')
      .then(result => {
        if(result.data.Status){
          setEmployeee(result.data.Result);
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
      <h3 className='font-bold text-2xl'>{t('Employee List')}</h3>
    </div>
    <Link to="/dashboard/add_employee" className='btn btn-success'>{t('Add Employee')}</Link>

    <div className='mt-3 '>
        <table className='table'>

          <thead>
            <tr>
              <th>Name</th>
              <th>image</th>
              <th>Email</th>
              <th>Address</th>
              <th>Salary</th>
              <th>sex</th>
              <th>Action</th>

            </tr>
          </thead>
          <tbody>
            {
              employeee.map(e => (
                <tr>
                  <td>{e.name}</td>
                  <td><img src={`http://localhost:3000/Images`+e.image} className="employee_image" /></td>
                  <td>{e.email}</td>
                  <td>{e.address}</td>
                  <td>{e.salary}</td>
                  <td>{e.sex}</td>
                  <td>
                    <Link to ={`/dashboard/edit_employeee/`+e.id} className='btn btn-info btn-sm me-2'>Edit</Link> 
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

export default Employeee
