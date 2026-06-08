import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../axios'
import { useTranslation } from "react-i18next";
const Navbare = () => {
  const [category, setCategory] = useState([])
  useEffect( () => {
  axios.get('http://localhost:3000/auth/navbare')
  .then(result => {
    if(result.data.Status){
      setCategory(result.data.Result);
    } else {
      alert(result.data.Error)
    }
  }).catch(err => console.log(err))
  }, [])

  const { t, i18n } = useTranslation();
  const languages = [
    { code: "en", name: "English" },
    { code: "om", name: "Afaan Oromo" },
    { code: "am", name: "አማርኛ" },
  ];
  return (
    
    <div className='mt-3'>
    <table className='table'>

      <thead>
        <tr>
        <th>{t('')}NAME</th>
          <th>{t('')}PHONE</th>
          <th>{t('')}ADDRESS</th>
          <th>{t('')}INFORMATION</th>
          <th>{t('')}GENDER</th>
          <th>{t('')}DATE GRADUATION</th>
          <th>{t('')}CV</th>
         
        </tr>
        <tr></tr>
      </thead>

      <tbody>
        {
          category.map(c => (
            <tr>
              <td>{c.name}</td>
              <td>{c.phone}</td>
              <td>{c.address}</td>
              <td>{c.info}</td>
              <td>{c.gender}</td>
              <td>{c.date}</td>
              <td><img src={`http://localhost:3000/Images`+c.cv} className="employee_image" /></td>
              
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>

    
  )
}

export default Navbare
