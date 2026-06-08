import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState, useEffect } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { faCheck, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FaCheck, FaTimes } from 'react-icons/fa';
import { useTranslation } from "react-i18next";

const ID_REGEX = /^[a-zA-Z0-9._%+-]{2,22}$/;
const USER_REGEX = /^[\p{L}\p{M}\s]{3,150}$/u;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_REGEX = /^[0-9+]{6,100}$/;
const SALARY_REGEX = /^\$?[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$/;
const ADDRESS_REGEX = /^[\p{L}\p{N}\s.,#-]{3,}$/u;
const GENDER_REGEX = /^(male|female|other|dhiira|dhalaa|kan biraa|ወንድ|ሴት|ሌላ)$/;
const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;
const CV_REGEX = /\.(jpg|jpeg|png|gif|pdf)$/;
const DID_REGEX = /^[a-zA-Z0-9._%+-]{2,22}$/;

 
const AddEmployee = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [id, setId] = useState("");
  const [validId, setValidId] = useState(false);
  const [idFocus, SetIdFocus] = useState(false);

  const [user, setUser] = useState("");
  const [validUser, setValidUser] = useState(false);
  const [userFocus, SetUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, SetEmailFocus] = useState(false);

  const [phone, setPhone] = useState("");
  const [validPhone, setValidPhone] = useState(false);
  const [phoneFocus, SetPhoneFocus] = useState(false);

  const [salary, setSalary] = useState("");
  const [validSalary, setValidSalary] = useState(false);
  const [salaryFocus, SetSalaryFocus] = useState(false);


  const [address, setAddress] = useState("");
  const [validAddress, setValidAddress] = useState(false);
  const [addressFocus, SetAddressFocus] = useState(false);

  const [gender, setGender] = useState("");
  const [validGender, setValidGender] = useState(false);
  const [genderFocus, SetGenderFocus] = useState(false);

  const [date, setDate] = useState("");
  const [validDate, setValidDate] = useState(false);
  const [dateFocus, SetDateFocus] = useState(false);

  const [did, setDid] = useState("");
  const [validDid, setValidDid] = useState(false);
  const [didFocus, SetDidFocus] = useState(false);

  const [cv, setCv] = useState("");
  const [validCv, setValidCv] = useState(false);
  const [cvFocus, setCvFocus] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = ID_REGEX.test(id);
    console.log(result);
    console.log(id);
    setValidId(result);
  }, [id]);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidUser(result);
  }, [user]);

  useEffect(() => {
    const result = CV_REGEX.test(cv);
    console.log(result);
    console.log(cv);
    setValidCv(result);
  }, [cv]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PHONE_REGEX.test(phone);
    console.log(result);
    console.log(phone);
    setValidPhone(result);
  }, [phone]);

  useEffect(() => {
    const result = ADDRESS_REGEX.test(address);
    console.log(result);
    console.log(address);
    setValidAddress(result);
  }, [address]);

  useEffect(() => {
    const result = GENDER_REGEX.test(gender);
    console.log(result);
    console.log(gender);
    setValidGender(result);
  }, [gender]);

  useEffect(() => {
    const result = DATE_REGEX.test(date);
    console.log(result);
    console.log(date);
    setValidDate(result);
  }, [date]);

  useEffect(() => {
    const result = SALARY_REGEX.test(salary);
    console.log(result);
    console.log(salary);
    setValidSalary(result);
  }, [salary]);

  useEffect(() => {
    const result = DID_REGEX.test(did);
    console.log(result);
    console.log(did);
    setValidDid(result);
  }, [did]);

  const cvRef = useRef();
  const idRef = useRef();
  const salaryRef = useRef();
  const nameRef = useRef();
  const addressRef = useRef();
  const dateRef = useRef();
  const genderRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const didRef = useRef();

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  
   useEffect(() => {
    setErrMsg("");
  }, [id, user, email, phone, address, salary,cv, gender, date,did])
  

  
  const [category, setCategory] = useState([])
  const navigate = useNavigate()
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
   
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const v1 = ID_REGEX.test(id);
      const v2 = USER_REGEX.test(user);
      const v4 = EMAIL_REGEX.test(email);
      const v5 = PHONE_REGEX.test(phone);
      const v3 = SALARY_REGEX.test(salary);
      const v6 = ADDRESS_REGEX.test(address);
      const v7 = CV_REGEX.test(cv);//it is image and pdf format
      const v8 = GENDER_REGEX.test(gender);
      const v9 = DATE_REGEX.test(date);
      const v10 = DID_REGEX.test(did);
     
      if (!v1 || !v2 || !v3 || !v4 || !v5 || !v6 || !v7 || !v8 || !v9 || !v10) {
          setErrMsg("Invalid Entry");
          return;
      }
  
      try {
          const data = {
              id: id,
              user: user,
              email: email,
              phone: phone,
              salary:salary,
              address: address,
              cv: cv,
              gender: gender,
              date: date,
                did: did
          };
            
          const response = await axios.post('http://localhost:3000/auth/add_employee', data, {
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
              setErrMsg('Error in creating the account');
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
        <h1 className="pl-[20px] mt-4 ml-3  "> {t('Registered successful')} </h1>
        <Link to='/dashboard/employeee' className='btn btn-primary mt-4 ml-4 w-15'>{t('Go to View')}</Link>
      </section>
   
    ) :(
    <section className="pt-[2rem]">
      <div className="p-[2.5rem]  rounded  border mx-[10rem] bg-slate-100 ">
        <p
          ref={errRef}
          className={errMsg ? "errMsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <Link to='/dashboard/employeee' className='btn btn-primary mt-4 ml-4 w-15'>{t('Back')}</Link>
        <h1 className="text-3xl font-bold text-center">{t('REGISTERE EMPLOYEE')}</h1>
        <form className="mx-0 row g-1 " onSubmit={handleSubmit}>
          <label htmlFor="IdNo" className="form-label text-xl">
           {t('ID_NO')} :
            <span className={`inline-block ${validId ? "block" : "hidden"}`}>
              <FaCheck className="do" />
            </span>
            <span
              className={`inline-block ${validId || !id ? "hidden" : "block"}`}
            >
              <FaTimes className="doo" />
            </span>
          </label>
          <input
            type="text"
            id="IdNo"
            className="form-control rounded-0 text-xl px-2"
            ref={idRef}
            autoComplete="off"
            onChange={(e) => setId(e.target.value)}
            required
            aria-invalid={validId ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => SetIdFocus(true)}
            onBlur={() => SetIdFocus(false)}
          />
          <p
            id="uidnote"
            className={`mt-2 ${idFocus && id && !validId ? "block" : "hidden"}`}
          >
            {/* Add a conditional rendering for the icon */}
            {idFocus && id && !validId && (
              <FontAwesomeIcon icon={faInfoCircle} className="dooo" />
            )}
             {t('2 to 22 characters.')} <br />
             {t('Letters, numbers, and -+/* are allowed.')}
          </p>

          <label htmlFor="username" className="form-label text-xl">
          {t('FUll NAME')} :
            <span className={`inline-block ${validUser ? "block" : "hidden"}`}>
              <FaCheck className="do" />
            </span>
            <span
              className={`inline-block ${
                validUser || !user ? "hidden" : "block"
              }`}
            >
              <FaTimes className="doo" />
            </span>
          </label>
          <input
            type="text"
            id="username"
            className="form-control rounded-0 text-xl"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            required
            aria-invalid={validUser ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => SetUserFocus(true)}
            onBlur={() => SetUserFocus(false)}
          />
          <p
            id="uidnote"
            className={`mt-2 ${
              userFocus && user && !validUser ? "block" : "hidden"
            }`}
          >
            {/* Add a conditional rendering for the icon */}
            {userFocus && user && !validUser && (
              <FontAwesomeIcon icon={faInfoCircle} className="dooo" />
            )}
             {t('3 to 200 characters.')} <br />
             {t('Alphabet only allowed.')} 
          </p>
          
          <label htmlFor="Email" className="form-label text-xl">
          {t('email')}:
            <span className={`inline-block ${validEmail ? "block" : "hidden"}`}>
              <FaCheck className="do" />
            </span>
            <span
              className={`inline-block ${
                validEmail || !email ? "hidden" : "block"
              }`}
            >
              <FaTimes className="doo" />
            </span>
          </label>
          <input
            type="email"
            id="Email"
            className="form-control rounded-0 text-xl"
            ref={emailRef}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-invalid={validEmail ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => SetEmailFocus(true)}
            onBlur={() => SetEmailFocus(false)}
          />
          <p
            id="uidnote"
            className={`mt-2 ${
              emailFocus && email && !validEmail ? "block" : "hidden"
            }`}
          >
            {/* Add a conditional rendering for the icon */}
            {emailFocus && email && !validEmail && (
              <FontAwesomeIcon icon={faInfoCircle} className="dooo" />
            )}
            {t('Alphabet numbers, @ and dot')}  <strong> expample6@mwu.com </strong>
            {t('allowed.')}
          </p>
          <label htmlFor="phoneNo" className="form-label text-xl">
          {t('Phone Number')}:
            <span className={`inline-block ${validPhone ? "block" : "hidden"}`}>
              <FaCheck className="do" />
            </span>
            <span
              className={`inline-block ${
                validPhone || !phone ? "hidden" : "block"
              }`}
            >
              <FaTimes className="doo" />
            </span>
          </label>
          <input
            type="tel"
            id="phoneNo"
            className="form-control rounded-0 text-xl"
            ref={phoneRef}
            autoComplete="off"
            onChange={(e) => setPhone(e.target.value)}
            required
            aria-invalid={validPhone ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => SetPhoneFocus(true)}
            onBlur={() => SetPhoneFocus(false)}
          />
          <p
            id="uidnote"
            className={`mt-2 ${
              phoneFocus && phone && !validPhone ? "block" : "hidden"
            }`}
          >
            {/* Add a conditional rendering for the icon */}
            {phoneFocus && phone && !validPhone && (
              <FontAwesomeIcon icon={faInfoCircle} className="dooo" />
            )}
            {t('numbers and plus sign  exmaple')}  <strong>+2519837377 </strong> {t('allowed.')}
          </p>

          <label htmlFor="userSalary" className="form-label text-xl">
            {t('Salary')}:
            <span className={`inline-block ${validSalary ? "block" : "hidden"}`}>
              <FaCheck className="do" />
            </span>
            <span
              className={`inline-block ${
                validSalary || !salary ? "hidden" : "block"
              }`}
            >
              <FaTimes className="doo" />
            </span>
          </label>
          <input
            type="text"
            id="userSalary"
            className="form-control rounded-0 text-xl"
            ref={salaryRef}
            autoComplete="off"
            onChange={(e) => setSalary(e.target.value)}
            required
            aria-invalid={validSalary ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => SetSalaryFocus(true)}
            onBlur={() => SetSalaryFocus(false)}
          />
          <p
            id="uidnote"
            className={`mt-2 ${
              salaryFocus && salary && !validSalary ? "block" : "hidden"
            }`}
          >
            {/* Add a conditional rendering for the icon */}
            {salaryFocus && salary && !validSalary && (
              <FontAwesomeIcon icon={faInfoCircle} className="dooo" />
            )}
           {t('numbers and dollar sign  exmaple')} <strong> $2519 </strong>{t('allowed.')}
          </p>
          <label htmlFor="AddressUser" className="form-label text-xl h-8 w-40">
          {t('Address')} :
            <span
              className={`inline-block ${validAddress ? "block" : "hidden"}`}
            >
              <FaCheck className="do" />
            </span>
            <span
              className={`inline-block ${
                validAddress || !address ? "hidden" : "block"
              }`}
            >
              <FaTimes className="doo" />
            </span>
          </label>
          <input
            type="text"
            id="AddressUser"
            className="form-control rounded-0 text-xl"
            ref={addressRef}
            autoComplete="off"
            onChange={(e) => setAddress(e.target.value)}
            required
            aria-invalid={validAddress ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => SetAddressFocus(true)}
            onBlur={() => SetAddressFocus(false)}
          />
          <p
            id="uidnote"
            className={`mt-2 ${
              addressFocus && address && !validAddress ? "block" : "hidden"
            }`}
          >
            {/* Add a conditional rendering for the icon */}
            {addressFocus && address && !validAddress && (
              <FontAwesomeIcon icon={faInfoCircle} className="dooo" />
            )}
           {t('letter , numbers, minus sign and hash sign')}  <strong> </strong>
           {t('allowed.')} 
          </p>

         
          <label htmlFor="UserGender" className="form-label text-xl">
          {t('Gender')} :
            <span
              className={`inline-block ${validGender ? "block" : "hidden"}`}
            >
              <FaCheck className="do" />
            </span>
            <span
              className={`inline-block ${
                validGender || !gender ? "hidden" : "block"
              }`}
            >
              {" "}
              <FaTimes className="doo" />
            </span>
          </label>
          <input
            type="text"
            id="UserGender"
            className="form-control rounded-0 text-xl"
            ref={genderRef}
            autoComplete="off"
            onChange={(e) => setGender(e.target.value)}
            required
            aria-invalid={validDate ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => SetGenderFocus(true)}
            onBlur={() => SetGenderFocus(false)}
          />
          <p
            id="uidnote"
            className={`mt-2 ${
              genderFocus && gender && !validGender ? "block" : "hidden"
            }`}
          >
            {/* Add a conditional rendering for the icon */}
            {genderFocus && gender && !validGender && (
              <FontAwesomeIcon icon={faInfoCircle} className="dooo" />
            )}
           {t('only male, female and other')}  <strong> </strong>{t('allowed.')}
          </p>
          <label htmlFor="Photo">
          {t('CV')}  :
            <span className={`inline-block ${validCv ? "block" : "hidden"}`}>
              <FaCheck className="do" />
            </span>
            <span
              className={`inline-block ${
                validCv || !cv ? "hidden" : "block"
              }`}
            >
              {" "}
              <FaTimes className="doo" />
            </span>
          </label>
          <input
            type="file"
            id="photo"
            className="form-control rounded-0 text-xl"
            ref={cvRef}
            autoComplete="off"
            onChange={(e) => setCv(e.target.value)}
            required
            aria-invalid={validCv ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setCvFocus(true)}
            onBlur={() => setCvFocus(false)}
          />
          <p
            id="uidnote"
            className={`mt-2 ${
              cvFocus && cv && !validCv ? "block" : "hidden"
            }`}
          >
            {/* Add a conditional rendering for the icon */}
            {cvFocus && cv && !validCv && (
              <FontAwesomeIcon icon={faInfoCircle} className="dooo" />
            )}
           {t('only file extension like')}   <strong>.jpg|jpeg|png|gif|pdf </strong>
           {t('allowed.')} 
          </p>

          <label htmlFor="Date">{t('Date')}:</label>
          <input
            type="date"
            id="Date"
            className="form-control rounded-0 text-xl"
            ref={dateRef}
            autoComplete="off"
            onChange={(e) => setDate(e.target.value)}
            required
            aria-invalid={validDate ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => SetDateFocus(true)}
            onBlur={() => SetDateFocus(false)}
          />

         <div className='col-12 '>
         <label for="category" className='form-label text-xl'>{t('Department')}</label>
         
         <select name="category" id="category" className='form-select'
         onChange={(e) => setDid(e.target.value)} >

         {category.map((c) => {
          return <option value={c.did} ref={didRef}>{c.department}</option>
         })}

         </select>
        </div>


        <div className='col-12 mt-[0.5rem]'>
          <button
            disabled={
              !validId ||
              !validUser ||
              
              !validEmail ||
              !validPhone ||
              !validSalary||
              !validAddress ||
              !validCv||
              !validGender ||
              
              !validDate ||
              !validDid
             
             
               ? true
                : false
            }
            type="submit"
            className='btn btn-success w-100 rounded-0 mb-2 text-zinc-950 text-2xl' id="reeee"
          >
          <b> {t('REGISTER')} </b>
          </button>
          </div>
          </form>
          </div>
          </section>
          )};
          </>

  )
}

export default AddEmployee
