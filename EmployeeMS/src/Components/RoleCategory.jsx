import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const RoleCategory = () => {
    const [rolecategory, setroleCategory] = useState([])
  useEffect( () => {
  axios.get('http://localhost:3000/auth/role_category')
  .then(result => {
    if(result.data.Status){
      setroleCategory(result.data.Result);
    } else {
      alert(result.data.Error)
    }
  }).catch(err => console.log(err))
  }, [])
  return (
    <div className='px-5 mt-2'>
      <div className='d-flex justify-content-center'>
        <h3 className='font-bold text-2xl'>Category Role List</h3>
      </div>
      <Link to="/sidebar/addrole_category" className='btn btn-success'>Add Role Category</Link>
      <div className='mt-3'>
        <table className='table'>

          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {
              rolecategory.map(c => (
                <tr>
                  <td>{c.name}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>


    </div>
  )
}

export default RoleCategory
