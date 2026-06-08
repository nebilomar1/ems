
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const AddRole = () => {
  const [employeee, setEmployeee] = useState({
    name: '',
    email:'',
    password:'',
    role: '',
    salary:'',
    rolecategory_id: '',
    image :''
 })
 
  const [category, setCategory] = useState([])
  const navigate = useNavigate()
  useEffect( () => {
  axios.get('http://localhost:3000/auth/role_category')
  .then(result => {
    if(result.data.Status){
      setCategory(result.data.Result);
    } else {
      alert(result.data.Error)
    }
  }).catch(err => console.log(err))
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('name',employeee.name);
    formData.append('email',employeee.email);
    formData.append('password',employeee.password);
    formData.append('role',employeee.role);
    formData.append('salary',employeee.salary);
    formData.append('image',employeee.image);
    formData.append('rolecategory_id',employeee.rolecategory_id);
    axios.post('http://localhost:3000/auth/add_role', formData)
    .then(result =>{
      if(result.data.Status){
        navigate('/sidebar/role')
      } else {
          alert(result.data.Error)
      }
    })
    .catch(err => console.log(err))
    
  }
  return (
<div  className='vh-[5rem]'>

      
<div className='p-2 rounded  border mx-[5rem]' id='ahmede'>
<Link to="/sidebar/role" className='btn btn-primary mt-4 ml-4 w-30'>Back</Link>
 <h2 className='text-3xl font-bold text-center'>Add Role</h2>
  <form className=' mx-0 row g-1 ' onSubmit={handleSubmit} >
    <div className='col-12 '>
     <label for="inputName" className='form-label text-xl'>Name</label>
     
     <input type="text"  
    className='form-control rounded-1 bg-none text-xl' id='inputName'
      placeholder='Enter Name' onChange={(e) => setEmployeee({...employeee, name: e.target.value})}
    />
    </div>

    <div className='col-12 '>
     <label for="inputEmail4" className='form-label text-xl'>Email</label>
     
     <input type="email"  
    className='form-control rounded-0 text-xl' id='inputEmail4'
      placeholder='Enter Email' autoComplete="off" onChange={(e) => setEmployeee({...employeee, email: e.target.value})}
    />
    </div>

    <div className='col-12 '>
     <label for="inputPassword4" className='form-label'>Password</label>
     
     <input type="password"  
    className='form-control rounded-0 text-xl bg-none' id='inputPassword4'
      placeholder='Enter Password' onChange={(e) => setEmployeee({...employeee, password: e.target.value})}  
    />
    </div>
    <div className='col-12 '>
     <label for="inputAddress" className='form-label text-xl'>Role</label>
     
     <input type="text"  
    className='form-control rounded-0' id='inputAddress'
      placeholder='1234 Robe' autoComplete='off' onChange={(e) => setEmployeee({...employeee, role: e.target.value})} 
    />
    </div>
    <div className='col-12 '>
     <label for="inputSalary" className='form-label'>Salary</label>
     
     <input type="text"  
    className='form-control rounded-0 text-xl' id='inputSalary'
      placeholder='Enter Salary' autoComplete='off' onChange={(e) => setEmployeee({...employeee, salary: e.target.value})} 
    />
    </div>


    <div className='col-12 '>
     <label for="category" className='form-label text-xl'>Category</label>
     
     <select name="category" id="category" className='form-select'
     onChange={(e) => setEmployeee({...employeee, rolecategory_id: e.target.value})} >
     {category.map((c) => {
      return <option value={c.id}>{c.name}</option>
     })}

     </select>
    </div>

    <div className='col-12 mb-3 '>
     <label for="inputGroupFile01" className='form-label text-xl' 
      >Select Image</label>
     
     <input type="file"  
    className='form-control rounded-0 ' id='inputGroupFile01' name='image'
      placeholder='1234 Robe' onChange={(e) => setEmployeee({...employeee,  image: e.target.files[0]})}
    />
    </div>
    <div className='col-12 '>
    <button type='submit' className='btn btn-primary w-40 text-xl bg-slate-600'   >Add Employee</button>
    </div>
  </form>
</div>
</div>
  )
}

export default AddRole
