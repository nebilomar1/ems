import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../axios'


const Hero = () => {
  const [category, setCategory] = useState([])
  useEffect( () => {
  axios.get('http://localhost:3000/auth/hero')
  .then(result => {
    if(result.data.Status){
      setCategory(result.data.Result);
    } else {
      alert(result.data.Error)
    }
  }).catch(err => console.log(err))
  }, [])
  return (
    <div className='px-5 mt-2 justify-content-center'>
    <div className='d-flex justify-content-center'>
      
    </div>
    <Link to="/dashboard/vacancy" className='btn btn-success'>Add Job Vacancy</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to="/dashboard/navbare" className='btn btn-success'>Veiw registered empolyee </Link><br/>
    <h3 className='d-flex font-bold text-2xl justify-content-center'>Announcement List</h3>
    <div className='mt-3  '>
        <table className='table '>

          <thead className='d-flex  text-xl justify-content-center'>
            <tr>
              <th>ABOUT VACANCY</th>
              
            </tr>
          </thead>
          <tbody className='d-flex  text-xl justify-content-center'>
            {
              category.map(c => (
                <tr>
                  <td>{c.head}</td>
                 
                </tr>
              ))
            }
          </tbody>
          <thead className='d-flex  text-xl justify-content-center'>
            <tr>
             
              <th>BODY</th>
             
            </tr>
          </thead>
          <tbody className='d-flex  text-xl justify-content-center'>
            {
              category.map(c => (
                <tr>
                 
                  <td>{c.vacancy}</td>
                 
                </tr>
              ))
            }
          </tbody>
          <thead className='d-flex  text-xl justify-content-center'>
            <tr>
              
              <th>LINK</th>
            </tr>
          </thead>
          <tbody className='d-flex  text-xl justify-content-center'>
            {
              category.map(c => (
                <tr>
                  
                  <td>{c.register}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
     </div>
     
  )
}

export default Hero
