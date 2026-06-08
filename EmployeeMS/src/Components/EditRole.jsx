import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditRole = () => {
  const { id } = useParams();
  const [employeee, setEmployeee] = useState({
    name: "",
    email: "",
    role: "",
    salary: "",
    rolecategory_id: "",
  });
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/role_category")
      .then((result) => {
        if (result.data.Status) {
          setCategory(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:3000/auth/role/" + id)
      .then((result) => {
        setEmployeee({
          ...employeee,
          name: result.data.Result[0].name,
          email: result.data.Result[0].email,
          address: result.data.Result[0].role,
          salary: result.data.Result[0].salary,
          
        });
      })
      .catch((err) => console.log(err));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/auth/edit_role/" + id, employeee)
      .then((result) => {
        if (result.data.Status) {
          navigate("/sidebar/role");
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="vh-[5rem]">
      <Link to="/sidebar/role" className="btn btn-primary mt-4 ml-4 ">
        Back
      </Link>
      <div className="p-2 rounded  border mx-[5rem]" id="ahmed">
        <h2 className="text-3xl font-bold text-center">Edit Role</h2>
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
          <div className="form-group">
            <label htmlFor="inputRole" className="form-label">
              Role
            </label>
            <input
              type="text"
              id="inputRole"
              className="form-control"  value={employeee.role}
              onChange={(e) =>
                setEmployeee({ ...employeee, role: e.target.value })
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
            <label for="category" className="form-label text-xl">
              Category
            </label>

            <select
              name="category"
              id="category"
              className="form-select"
              onChange={(e) =>
                setEmployeee({ ...employeee, rolecategory_id: e.target.value })
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
              Edit Role
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditRole;
