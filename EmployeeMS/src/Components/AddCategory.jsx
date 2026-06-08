import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState, useEffect } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { faCheck, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FaCheck, FaTimes } from 'react-icons/fa';
import { useTranslation } from "react-i18next";


const DID_REGEX = /^[a-zA-Z0-9._%+-]{2,22}$/;
const DEPARTMENT_REGEX = /^[a-zA-Z]{3,150}$/;


  


const AddCategory = () => {

  const userRef = useRef();
  const errRef = useRef();

  const [did, setDid] = useState("");
  const [validDid, setValidDid] = useState(false);
  const [didFocus, SetDidFocus] = useState(false);

  const [department, setDepartment] = useState("");
  const [validDepartment, setValidDepartment] = useState(false);
  const [departmentFocus, SetDepartmentFocus] = useState(false);

  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, []);
  useEffect(() => {
    const result =DID_REGEX.test(did);
    console.log(result);
    console.log(did);
    setValidDid(result);
  }, [did]);

  useEffect(() => {
    const result = DEPARTMENT_REGEX.test(department);
    console.log(result);
    console.log(department);
    setValidDepartment(result);
  }, [department]);

  const didRef = useRef();
  const departmentRef = useRef();

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  
   useEffect(() => {
    setErrMsg("");
  }, [did, department])
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const v1 = DID_REGEX.test(did);
    const v2 = DEPARTMENT_REGEX.test(department);
    
   
    if (!v1 || !v2) {
        setErrMsg("Invalid Entry");
        return;
    }

    try {
        const data = {
            did: did,
            department: department,
            
        };
          
        const response = await axios.post('http://localhost:3000/auth/add_category', data, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        });
         
        console.log(response.data);

        if (response.data && response.data.message) {
            setSuccess(true); // Set success state
            setErrMsg(''); // Clear any previous error message
            
            // Redirect to sidebar/role after successful insertion

            
        } else {
            setErrMsg('Error in add department');
        }

    } catch (err) {
        if (err.response && err.response.data.error) {
            setErrMsg(err.response.data.error); // Set error message from server response
        } else {
            setErrMsg('No Server Response');
        }
        errRef.current.focus();
    }
};
const { t, i18n } = useTranslation();
const languages = [
  { code: "en", name: "English" },
  { code: "om", name: "Afaan Oromo" },
  { code: "am", name: "አማርኛ" },
];

  return (
    
       
    <>
    
    {success ?(
      <section>
        <h1 className="pl-[20px] mt-4 ml-3  ">{t('department add successful')} </h1>
        <Link to='/dashboard/categorys' className='btn btn-primary mt-4 ml-4 w-15'>{t('Go to View')}</Link>
      </section>
   
    ) :(
    <section className="pt-[2rem]">
      <div className="p-[2.5rem]  rounded  border mx-[10rem] bg-slate-100">
        <p
          ref={errRef}
          className={errMsg ? "errMsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <Link to="/dashboard/categorys" className='btn btn-primary mt-4 ml-4 w-15'>{t('Back')}</Link>
        <h1 className="text-3xl font-bold text-center">{t('Add Department')}</h1>
        
        <form className="mx-0 row g-1" onSubmit= {handleSubmit}>
      
          <label htmlFor="IdNo" className="form-label text-xl">
          {t('Department_Id')}:
            <span className={`inline-block ${validDid ? "block" : "hidden"}`}>
              <FaCheck className="do" />
            </span>
            <span
              className={`inline-block ${validDid || !did ? "hidden" : "block"}`}
            >
              <FaTimes className="doo" />
            </span>
          </label>
          <input
            type="text"
            id="IdNo"
            className="form-control rounded-0 text-xl px-2"
            ref={didRef}
            autoComplete="off"
            onChange={(e) => setDid(e.target.value)}
            required
            aria-invalid={validDid ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => SetDidFocus(true)}
            onBlur={() => SetDidFocus(false)}
          />
          <p
            id="uidnote"
            className={`mt-2 ${didFocus && did && !validDid ? "block" : "hidden"}`}
          >
            {/* Add a conditional rendering for the icon */}
            {didFocus && did && !validDid && (
              <FontAwesomeIcon icon={faInfoCircle} className="dooo" />
            )}
           {t('2 to 22 characters.')}  <br />
           {t('Letters, numbers, and -+/* are allowed.')}
          </p>

          <label htmlFor="username" className="form-label text-xl">
          {t('Department')} :
            <span className={`inline-block ${validDepartment ? "block" : "hidden"}`}>
              <FaCheck className="do" />
            </span>
            <span
              className={`inline-block ${
                validDepartment || !department ? "hidden" : "block"
              }`}
            >
              <FaTimes className="doo" />
            </span>
          </label>
          <input
            type="text"
            id="username"
            className="form-control rounded-0 text-xl"
            ref={departmentRef}
            autoComplete="off"
            onChange={(e) => setDepartment(e.target.value)}
            required
            aria-invalid={validDepartment ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => SetDepartmentFocus(true)}
            onBlur={() => SetDepartmentFocus(false)}
          />
          <p
            id="uidnote"
            className={`mt-2 ${
              departmentFocus && department && !validDepartment ? "block" : "hidden"
            }`}
          >
            {/* Add a conditional rendering for the icon */}
            {departmentFocus && department && !validDepartment && (
              <FontAwesomeIcon icon={faInfoCircle} className="dooo" />
            )}
           {t('3 to 200 characters.')}  <br />
           {t('Alphabet only allowed.')}  
          </p>
          <div className='col-12 mt-[0.5rem]'>
          <button
            disabled={
              !validDid ||
              !validDepartment 
                ? true
                : false
            }
            type="submit"
            className='btn btn-success w-100 rounded-0 mb-2 text-zinc-950 text-2xl' id="reeee"
          >
          <b> {t('REGISTER')}</b>
          </button>
          </div>
        </form>
        <p> Already registered? <br/>
        <span className="line"></span>
        </p>
      </div>
    </section>
     )};
    </>
    
 
  )
}

export default AddCategory
