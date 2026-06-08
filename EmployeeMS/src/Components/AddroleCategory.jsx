//super
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
const AddroleCategory = () => {
    const [category, setCategory] = useState()
    const navigate = useNavigate()
    const handleSubmit = (e) =>{
        e.preventDefault()
       axios.post('http://localhost:3000/auth/addrole_category', {category})
        .then(result => {
            if(result.data.Status){
              navigate('/sidebar/role_category')
            } else {
                alert(result.data.Error)
            }
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='p-2 d-flex justify-content-center align-items-center h-100 '>
      
      <div className='p-4 rounded w-90 border ' id="catgoo">
      <Link to="/sidebar/role_category" className='btn btn-primary mt-4 ml-4 w-30'>Back</Link>
       <h2 className='text-3xl font-bold'>Add Category</h2>
        <form onSubmit={handleSubmit} >
          <div className='mb-3' id="ree">
           <label htmlFor="category"><strong>Category:</strong></label>
           
           <input type="text" name='category'  placeholder='Enter Category' 
          onChange={(e) => setCategory(e.target.value)} className='form-control rounded-0'/>
          
          </div>
          
          <button className='btn btn-success w-100 rounded-0 mb-2' id="reeee">Add Category</button>
          
        </form>
      </div>
   </div>
  )
}

export default AddroleCategory
