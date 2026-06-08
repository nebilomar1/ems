import React from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState, useEffect,  } from "react";
import {
  FaTh,
  FaBars,
  FaPeopleCarry,
  FaPeopleArrows,
  FaProjectDiagram,
  FaTable,
  FaTag,
  FaAt,
  FaCheck,
  FaTimes,
  FaInfoCircle,
} from "react-icons/fa";
import { faCheck, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import axios from '../axios';
import { useTranslation } from "react-i18next";

const ID_REGEX = /^[a-zA-Z0-9._%+-]{2,22}$/;
const USER_REGEX = /^[\p{L}\p{M}\s]{3,150}$/u;
const TYPE_REGEX = /^(HR manager|Finance|Admin|Task manager|Employee)$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_REGEX = /^[0-9+]{3,100}$/;
const ADDRESS_REGEX = /^[\p{L}\p{N}\s.,#-]{3,}$/u;
const PHOTO_REGEX = /\.(jpg|jpeg|png|gif)$/;
const GENDER_REGEX = /^(male|female|other|dhiira|dhalaa|kan biraa|ወንድ|ሴት|ሌላ)$/;
const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[0-9])(?=.*[!@#$%]).{4,24}$/;
 //const ADDROLEE_URL = '/add_rolee';
 
const AddRolee = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [id, setId] = useState("");
  const [validId, setValidId] = useState(false);
  const [idFocus, SetIdFocus] = useState(false);

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, SetUserFocus] = useState(false);

  const [type, setType] = useState("");
  const [validType, setValidType] = useState(false);
  const [typeFocus, SetTypeFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, SetEmailFocus] = useState(false);

  const [phone, setPhone] = useState("");
  const [validPhone, setValidPhone] = useState(false);
  const [phoneFocus, SetPhoneFocus] = useState(false);

  const [address, setAddress] = useState("");
  const [validAddress, setValidAddress] = useState(false);
  const [addressFocus, SetAddressFocus] = useState(false);

  const [photo, setPhoto] = useState("");
  const [validPhoto, setValidPhoto] = useState(false);
  const [photoFocus, setPhotoFocus] = useState(false);

  const [gender, setGender] = useState("");
  const [validGender, setValidGender] = useState(false);
  const [genderFocus, SetGenderFocus] = useState(false);

  const [date, setDate] = useState("");
  const [validDate, setValidDate] = useState(false);
  const [dateFocus, SetDateFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, SetPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, SetMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

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
    const result = TYPE_REGEX.test(type);
    console.log(result);
    console.log(type);
    setValidType(result);
  }, [type]);

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
    const result = PHOTO_REGEX.test(photo);
    console.log(result);
    console.log(photo);
    setValidPhoto(result);
  }, [photo]);

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
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [id, user, type, email, phone, address, photo, gender, date, pwd]);
  const [validUser, setValidUser] = useState(false);

  const idRef = useRef();
  const typeRef = useRef();
  const nameRef = useRef();
  const addressRef = useRef();
  const photoRef = useRef();
  const dateRef = useRef();
  const genderRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const pwdRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const v1 = ID_REGEX.test(id);
    const v2 = USER_REGEX.test(user);
    const v3 = TYPE_REGEX.test(type);
    const v4 = EMAIL_REGEX.test(email);
    const v5 = PHONE_REGEX.test(phone);
    const v6 = ADDRESS_REGEX.test(address);
    const v7 = PHOTO_REGEX.test(photo);
    const v8 = GENDER_REGEX.test(gender);
    const v9 = DATE_REGEX.test(date);
    const v10 = PWD_REGEX.test(pwd);
   
    if (!v1 || !v2 || !v3 || !v4 || !v5 || !v6 || !v7 || !v8 || !v9 || !v10) {
        setErrMsg("Invalid Entry");
        return;
    }

    try {
        const data = {
            id: id,
            user: user,
            type: type,
            email: email,
            phone: phone,
            address: address,
            photo: photo,
            gender: gender,
            date: date,
            pwd: pwd
        };
          
        const response = await axios.post('http://localhost:3000/auth/add_rolee', data, {
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
        <h1 className="pl-[20px] mt-4 ml-3  "> {t('Account create Successful')}</h1>
        <Link to='/sidebar/role' className='btn btn-primary mt-4 ml-4 w-15'>{t('Go to View')}</Link>
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
        <Link to="/sidebar/role" className='btn btn-primary mt-4 ml-4 w-15'>{t('Back')}</Link>
        <h1 className="text-3xl font-bold text-center">{t('CREATE ACCOUNT')}</h1>
        
        <form className="mx-0 row g-1" onSubmit={handleSubmit}>
      
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
          {t('6 to 22 characters.')} <br />
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
            aria-invalid={validName ? "false" : "true"}
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
          <label htmlFor="UserType" className="form-label text-xl">
          {t('USER_TYPE')}  :
            <span className={`inline-block ${validType ? "block" : "hidden"}`}>
              <FaCheck className="do" />
            </span>
            <span
              className={`inline-block ${
                validType || !type ? "hidden" : "block"
              }`}
            >
              <FaTimes className="doo" />
            </span>
          </label>
          <input
            type="text"
            id="UserType"
            className="form-control rounded-0 text-xl"
            ref={typeRef}
            autoComplete="off"
            onChange={(e) => setType(e.target.value)}
            required
            aria-invalid={validType ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => SetTypeFocus(true)}
            onBlur={() => SetTypeFocus(false)}
          />
          <p
            id="uidnote"
            className={`mt-2 ${
              typeFocus && type && !validType ? "block" : "hidden"
            }`}
          >
            {/* Add a conditional rendering for the icon */}
            {typeFocus && type && !validType && (
              <FontAwesomeIcon icon={faInfoCircle} className="dooo" />
            )}
            {t('Make user type only this')} <b> {t('')}HR manager , Finance, Admin, Task manager,Supervisor,Secertry and Employee </b>
          </p>
          <label htmlFor="Email" className="form-label text-xl">
          {t('email')} :
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
          {t('Phone Number')} :
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
           {t('numbers and dollar sign  exmaple')} <strong> +2519837377 </strong>{t('allowed.')}
          </p>
          <label htmlFor="AddressUser" className="form-label text-xl h-8 w-40">
          {t('Address')}:
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
           {t('letter , numbers, minus sign and hash sign')} <strong> </strong>
           {t('allowed.')} 
          </p>

          <label htmlFor="Photo">
          {t('IMAGE')}  :
            <span className={`inline-block ${validPhoto ? "block" : "hidden"}`}>
              <FaCheck className="do" />
            </span>
            <span
              className={`inline-block ${
                validPhoto || !photo ? "hidden" : "block"
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
            ref={photoRef}
            autoComplete="off"
            onChange={(e) => setPhoto(e.target.value)}
            required
            aria-invalid={validPhoto ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setPhotoFocus(true)}
            onBlur={() => setPhotoFocus(false)}
          />
          <p
            id="uidnote"
            className={`mt-2 ${
              photoFocus && photo && !validPhoto ? "block" : "hidden"
            }`}
          >
            {/* Add a conditional rendering for the icon */}
            {photoFocus && photo && !validPhoto && (
              <FontAwesomeIcon icon={faInfoCircle} className="dooo" />
            )}
           {t('only file extension like')}   <strong>.jpg|jpeg|png|gif </strong>
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
          {t('only male, female and other')}   <strong> </strong>{t('allowed.')}
          </p>

          <label htmlFor="Date">{t('Birth Date')} :</label>
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

          <label htmlFor="password" className="form-label text-xl">
           {t('Password')} :
            <span className={`inline-block ${validPwd ? "block" : "hidden"}`}>
              <FaCheck className="do" />
            </span>
            <span
              className={`inline-block ${
                validPwd || !pwd ? "hidden" : "block"
              }`}
            >
              {" "}
              <FaTimes className="doo" />
            </span>
          </label>
          <input
            type="password"
            id="password"
            className="form-control rounded-0 text-xl"
            ref={pwdRef}
            autoComplete="off"
            onChange={(e) => setPwd(e.target.value)}
            required
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => SetPwdFocus(true)}
            onBlur={() => SetPwdFocus(false)}
          />
          <p
            id="uidnote"
            className={`mt-2 ${
              pwdFocus && pwd && !validPwd ? "block" : "hidden"
            }`}
          >
            {/* Add a conditional rendering for the icon */}
            {pwdFocus && pwd && !validPwd && (
              <FontAwesomeIcon icon={faInfoCircle} className="dooo" />
            )}
           {t('8 to 24 characters.')} 
            <br />
            {t('Must include uppercase and lowercase letter,a number and a special character.')} 
             exmaple <strong>Oro@1212 </strong>{t('allowed.')}
          </p>
          <label htmlFor="confirm_pwd" className="form-label text-xl">
          {t('Confirm Password')} :
            <span className={`inline-block ${validMatch ? "block" : "hidden"}`}>
              <FaCheck className="do" />
            </span>
            <span
              className={`inline-block ${
                validMatch || !matchPwd ? "hidden" : "block"
              }`}
            >
              {" "}
              <FaTimes className="doo" />
            </span>
          </label>
          <input
            type="password"
            id="confirm_pwd"
            className="form-control rounded-0 text-xl"
            autoComplete="off"
            onChange={(e) => setMatchPwd(e.target.value)}
            required
            aria-invalid={validMatch ? "false" : "true"}
            aria-describedby="confirmnote"
            onFocus={() => SetMatchFocus(true)}
            onBlur={() => SetMatchFocus(false)}
          />
          <p
            id="confirmnote"
            className={`mt-2 ${
              matchFocus && matchPwd && !validMatch ? "block" : "hidden"
            }`}
          >
            {/* Add a conditional rendering for the icon */}
            {matchFocus && matchPwd && !validMatch && (
              <FontAwesomeIcon icon={faInfoCircle} className="dooo" />
            )}
            <br />
            {t('password is not match')}
          </p>
          <div className='col-12 mt-[0.5rem]'>
          <button
            disabled={
              !validId ||
              !validUser ||
              !validType ||
              !validEmail ||
              !validPhone ||
              !validAddress ||
              !validPhoto ||
              !validGender ||
              !validDate ||
              !validPwd ||
              !validMatch
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
    
  );
};

export default AddRolee;
