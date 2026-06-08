import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
const EditEmployeee = () => {
  const { id } = useParams();
  const [employeee, setEmployeee] = useState({
    name: "",
    email: "",
    salary: "",
    address: "",
    sex:"",
    category_id: "",
  });
  const [category, setCategory] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/categorys")
      .then((result) => {
        if (result.data.Status) {
          setCategory(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:3000/auth/employeee/" + id)
      .then((result) => {
        setEmployeee({
          ...employeee,
          name: result.data.Result[0].name,
          email: result.data.Result[0].email,
          salary: result.data.Result[0].salary,
          address: result.data.Result[0].address,
          sex: result.data.Result[0].sex,
          
        });
      })
      .catch((err) => console.log(err));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:3000/auth/edit_employeee/" + id, employeee)
      .then((result) => {
        if(result.data.Status){
            navigate('/dashboard/employeee')
          } else {
              alert(result.data.Error)
          }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="vh-[5rem]">
      <Link to="/dashboard/employeee" className="btn btn-primary mt-4 ml-4 ">
        Back
      </Link>
      <div className="p-2 rounded  border mx-[5rem]" id="ahmed">
        <h2 className="text-3xl font-bold text-center">Edit Employee</h2>
        <form className=" mx-0 row g-1 " onSubmit={handleSubmit}>
          <div className="col-12 ">
            <label for="inputName" className="form-label text-xl">
              Name
            </label>

            <input
              type="text"
              className="form-control rounded-1 bg-none text-xl"
              id="inputName"
              placeholder="Enter Name"
              value={employeee.name}
              onChange={(e) =>
                setEmployeee({ ...employeee, name: e.target.value })
              }
            />
          </div>

          <div className="col-12 ">
            <label for="inputEmail4" className="form-label text-xl">
              Email
            </label>

            <input
              type="email"
              className="form-control rounded-0 text-xl"
              id="inputEmail4"
              placeholder="Enter Email"
              autoComplete="off"
              value={employeee.email}
              onChange={(e) =>
                setEmployeee({ ...employeee, email: e.target.value })
              }
            />
          </div>

          <div className="col-12 ">
            <label for="inputSalary" className="form-label">
              Salary
            </label>

            <input
              type="text"
              className="form-control rounded-0 text-xl"
              id="inputSalary"
              placeholder="Enter Salary"
              autoComplete="off"
              value={employeee.salary}
              onChange={(e) =>
                setEmployeee({ ...employeee, salary: e.target.value })
              }
            />
          </div>

          <div className="col-12 ">
            <label for="inputAddress" className="form-label text-xl">
              Address
            </label>

            <input
              type="text"
              className="form-control rounded-0"
              id="inputAddress"
              placeholder="1234 Robe"
              autoComplete="off"
              value={employeee.address}
              onChange={(e) =>
                setEmployeee({ ...employeee, address: e.target.value })
              }
            />
          </div>
          <div className='col-12 mb-3 '>
          <label className='text-2xl'>Gender :- &nbsp;&nbsp;</label>
        <label for="inputGender"  className='text-2xl'>Male
        </label>&nbsp;&nbsp;
          <input
            type="radio"
            name="gender"
            value="male"
            id='inputGender'  className='radio font-bold' 
            onChange={(e) => setEmployeee({ ...employeee, sex: e.target.value })}
          />
          &nbsp;&nbsp;
        <label for="inputGender" className='text-2xl' >  Female
        </label>&nbsp;&nbsp;
          <input
            type="radio"
            name="gender"
            value="female"
            id='inputGender' className='font-2xl' 
            onChange={(e) => setEmployeee({ ...employeee, sex: e.target.value })}
          />
        &nbsp;&nbsp;
        <label for="inputGender" className='text-2xl'> Other
        </label>
          <input
            type="radio"
            name="gender"
            value="other" className='font-2xl'
            id='inputGender' 
            onChange={(e) => setEmployeee({ ...employeee, sex: e.target.value })}
          />
         
      </div>

          <div className="col-12 ">
            <label for="category" className="form-label text-xl">
              Category
            </label>

            <select
              name="category"
              id="category"
              className="form-select" 
              onChange={(e) =>
                setEmployeee({ ...employeee, category_id: e.target.value })
              }
            >
              {category.map((c) => {
                return <option value={c.id}>{c.name}</option>;
              })}
            </select>
          </div>

          <div className="col-12 ">
            <button
              type="submit"
              className="btn btn-primary w-40 text-xl bg-slate-600"
            >
              Edit Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmployeee;
