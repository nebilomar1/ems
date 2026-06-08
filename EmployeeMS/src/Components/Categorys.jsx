import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useTranslation } from "react-i18next";

const Categorys = () => {

  const [category, setCategory] = useState([])
  useEffect( () => {
  axios.get('http://localhost:3000/auth/categorys')
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
    <div className='px-5 mt-2'>
      <div className='d-flex justify-content-center'>
        <h3 className='font-bold text-2xl'>{t('Department List')}</h3>
      </div>
      <Link to="/dashboard/add_category" className='btn btn-success'>{t('Add Department')}</Link>
      <div className='mt-3'>
        <table className='table'>

          <thead>
            <tr>
            <th>{t('Department_Id')}</th>
              <th>{t('Department')}</th>
            </tr>
          </thead>
          <tbody>
            {
              category.map(c => (
                <tr>
                  <td>{c.did}</td>
                  <td>{c.department}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>


    </div>
  )
}

export default Categorys
