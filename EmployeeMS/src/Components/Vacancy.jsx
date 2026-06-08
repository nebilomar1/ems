import React, { useRef, useState , useEffect } from 'react'
import { useTranslation } from "react-i18next";
import { faCheck, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FaCheck, FaTimes } from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from 'axios'
import { Link } from 'react-router-dom';
const HEAD_REGEX = /^[\p{L}\p{M}\s]{3,150}$/u;
const VACANCY_REGEX = /^[\p{L}\p{M}\s./1-9]{50,2000}$/u;
const REGISTER_REGEX = /^[\p{L}\p{M}\s]{3,150}$/u;
const Vacancy = () => {

    const headRef = useRef();
    const vacancyRef= useRef();
    const registerRef= useRef();
    const errRef = useRef();

  const [head, setHead] = useState("");
  const [validHead, setValidHead] = useState(false);
  const [headFocus, SetHeadFocus] = useState(false);

  const [vacancy, setVacancy] = useState("");
  const [validVacancy, setValidVacancy] = useState(false);
  const [vacancyFocus, SetVacancyFocus] = useState(false);

  const [register, setRegister] = useState("");
  const [validRegister, setValidRegister] = useState(false);
  const [registerFocus, SetRegisterFocus] = useState(false);

  useEffect(() => {
    headRef.current.focus();
  }, []);

  useEffect(() => {
    const result = HEAD_REGEX.test(head);
    console.log(result);
    console.log(head);
    setValidHead(result);
  }, [head]);

  useEffect(() => {
    const result = VACANCY_REGEX.test(vacancy);
    console.log(result);
    console.log(vacancy);
    setValidVacancy(result);
  }, [vacancy]);

  useEffect(() => {
    const result = REGISTER_REGEX.test(register);
    console.log(result);
    console.log(register);
    setValidRegister(result);
  }, [register]);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setErrMsg("");
  }, [head, vacancy,register])
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const v1 = HEAD_REGEX.test(head);
    const v2 = VACANCY_REGEX.test(vacancy);
    const v3 = REGISTER_REGEX.test(register);
    
   
    if (!v1 || !v2 || !v3) {
        setErrMsg("Invalid Entry");
        return;
    }

    try {
        const data = {
            head: head,
            vacancy: vacancy,
            register:register
            
        };
          
        const response = await axios.post('http://localhost:3000/auth/vacancy', data, {
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
        <h1 className="pl-[20px] mt-4 ml-3  ">{t('')}vacancy add successful </h1>
        <Link to='/dashboard/hero' className='btn btn-primary mt-4 ml-4 w-15'>{t('Go to View')}</Link>
        
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
        <Link to="/dashboard/hero" className='btn btn-primary mt-4 ml-4 w-15'>{t('Back')}</Link>
        <h1 className="text-3xl font-bold text-center">{t('')}Add Job Vacancy</h1>
        
        <form className="mx-0 row g-1" onSubmit= {handleSubmit}>
      
          <label htmlFor="IdNo" className="form-label text-xl">
          {t('')}Header:
            <span className={`inline-block ${validHead ? "block" : "hidden"}`}>
              <FaCheck className="do" />
            </span>
            <span
              className={`inline-block ${validHead || !head ? "hidden" : "block"}`}
            >
              <FaTimes className="doo" />
            </span>
          </label>
          <input
            type="text"
            id="IdNo"
            className="form-control rounded-0 text-xl px-2"
            ref={headRef}
            autoComplete="off"
            onChange={(e) => setHead(e.target.value)}
            required
            aria-invalid={validHead ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => SetHeadFocus(true)}
            onBlur={() => SetHeadFocus(false)}
          />
          <p
            id="uidnote"
            className={`mt-2 ${headFocus && head && !validHead ? "block" : "hidden"}`}
          >
            {/* Add a conditional rendering for the icon */}
            {headFocus && head && !validHead && (
              <FontAwesomeIcon icon={faInfoCircle} className="dooo" />
            )}
           {t('2 to 22 characters.')}  <br />
           {t('Letters, numbers, and -+/* are allowed.')}
          </p>

          <label htmlFor="vacancy" className="form-label text-xl">
          {t('')}Job Vacancy :
            <span className={`inline-block ${validVacancy ? "block" : "hidden"}`}>
              <FaCheck className="do" />
            </span>
            <span
              className={`inline-block ${
                validVacancy || !vacancy ? "hidden" : "block"
              }`}
            >
              <FaTimes className="doo" />
            </span>
          </label>
          <textarea
  id="vacancy"
  className="form-control rounded-1 h-[200px] text-xl"
  ref={vacancyRef}
  autoComplete="off"
  onChange={(e) => setVacancy(e.target.value)}
  required
  aria-invalid={validVacancy ? "false" : "true"}
  aria-describedby="uidnote"
  onFocus={() => SetVacancyFocus(true)}
  onBlur={() => SetVacancyFocus(false)}
/>
          <p
            id="uidnote"
            className={`mt-2 ${
              vacancyFocus && vacancy && !validVacancy ? "block" : "hidden"
            }`}
          >
            {/* Add a conditional rendering for the icon */}
            {vacancyFocus && vacancy && !validVacancy && (
              <FontAwesomeIcon icon={faInfoCircle} className="dooo" />
            )}
           {t('')} 50 to 2000 characters. <br />
           {t('Alphabet only allowed.')}  
          </p>
          <label htmlFor="username" className="form-label text-xl">
          {t('')}Click link :
            <span className={`inline-block ${validRegister ? "block" : "hidden"}`}>
              <FaCheck className="do" />
            </span>
            <span
              className={`inline-block ${
                validRegister || !register ? "hidden" : "block"
              }`}
            >
              <FaTimes className="doo" />
            </span>
          </label>
          <input
            type="text"
            id="username"
            className="form-control rounded-3 text-xl"
            ref={registerRef}
            autoComplete="off"
            onChange={(e) => setRegister(e.target.value)}
            required
            aria-invalid={validRegister ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => SetRegisterFocus(true)}
            onBlur={() => SetRegisterFocus(false)}
          />
          <p
            id="uidnote"
            className={`mt-2 ${
              registerFocus && register && !validRegister ? "block" : "hidden"
            }`}
          >
            {/* Add a conditional rendering for the icon */}
            {registerFocus && register && !validRegister && (
              <FontAwesomeIcon icon={faInfoCircle} className="dooo" />
            )}
           {t('')} 3 to 2000 characters. <br />
           {t('Alphabet only allowed.')}  
          </p>
          <div className='col-12 mt-[0.5rem]'>
          <button
            disabled={
              !validHead ||
              !validVacancy||
              !validRegister 
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

export default Vacancy
