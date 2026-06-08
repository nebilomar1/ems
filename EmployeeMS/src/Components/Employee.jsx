//super
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Employee = () => {
  const [ employee, setEmployee] =useState([])
  useEffect(() => {
    
      axios.get('http://localhost:3000/auth/employee')
      .then(result => {
        if(result.data.Status){
          setEmployee(result.data.Result);
        } else {
          alert(result.data.Error)
        }
      }).catch(err => console.log(err))
     
  },[])
  return (
    <div className='px-5 mt-2'>
    <div className='d-flex justify-content-center'>
      <h3 className='font-bold text-2xl'>Employee List</h3>
    </div>
    <Link to="/sidebar/add_employeea" className='btn btn-success'>Add Employee</Link>
    


    <div className='mt-3'>
        <table className='table'>

          <thead>
            <tr>
              <th>Name</th>
              <th>image</th>
              <th>Email</th>
              <th>Address</th>
              <th>Salary</th>
              <th>Sex</th>
              <th>Action</th>

            </tr>
          </thead>
          <tbody>
            {
              employee.map(e => (
                <tr>
                  <td>{e.name}</td>
                  <td><img src={`http://localhost:3000/Images`+e.image} className="employee_image" /></td>
                  <td>{e.email}</td>
                  <td>{e.address}</td>
                  <td>{e.salary}</td>
                  <td>{e.sex}</td>
                  <td>
                    <Link to ={'/sidebar/edit_employee/'+ e.id} className='btn btn-info btn-sm me-2'>Edit</Link>
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

export default Employee
