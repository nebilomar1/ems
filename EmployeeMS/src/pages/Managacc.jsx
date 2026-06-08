import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { faCheck, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const NAME_REGEX = /^[\p{L}\p{M}\s]{3,150}$/u;
const PHONE_REGEX = /^[0-9+]{6,100}$/;
const ADDRESS_REGEX = /^[\p{L}\p{N}\s.,#-]{3,}$/u;
const INFO_REGEX = /^[\p{L}\p{M}\s./1-9]{50,2000}$/u;
const GENDER_REGEX = /^(male|female|other|dhiira|dhalaa|kan biraa|ወንድ|ሴት|ሌላ)$/;
const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;
const CV_REGEX = /\.(jpg|jpeg|png|gif|pdf)$/;

const Managacc = () => {
  const nameRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const infoRef = useRef();
  const genderRef = useRef();
  const dateRef = useRef();
  const cvRef = useRef();
  const errRef = useRef();

  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);
  const [nameFocus, SetNameFocus] = useState(false);

  const [info, setInfo] = useState("");
  const [validInfo, setValidInfo] = useState(false);
  const [infoFocus, SetInfoFocus] = useState(false);

  const [phone, setPhone] = useState("");
  const [validPhone, setValidPhone] = useState(false);
  const [phoneFocus, SetPhoneFocus] = useState(false);

  const [address, setAddress] = useState("");
  const [validAddress, setValidAddress] = useState(false);
  const [addressFocus, SetAddressFocus] = useState(false);

  const [gender, setGender] = useState("");
  const [validGender, setValidGender] = useState(false);
  const [genderFocus, SetGenderFocus] = useState(false);

  const [date, setDate] = useState("");
  const [validDate, setValidDate] = useState(false);
  const [dateFocus, SetDateFocus] = useState(false);

  const [cv, setCv] = useState("");
  const [validCv, setValidCv] = useState(false);
  const [cvFocus, setCvFocus] = useState(false);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  useEffect(() => {
    const result = NAME_REGEX.test(name);
    console.log(result);
    console.log(name);
    setValidName(result);
  }, [name]);

  useEffect(() => {
    const result = CV_REGEX.test(cv);
    console.log(result);
    console.log(cv);
    setValidCv(result);
  }, [cv]);

  useEffect(() => {
    const result = INFO_REGEX.test(info);
    console.log(result);
    console.log(info);
    setValidInfo(result);
  }, [info]);

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

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setErrMsg("");
  }, [name, phone, address, info, gender, date,  cv]);

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    const v1 = NAME_REGEX.test(name);
    const v2 = PHONE_REGEX.test(phone);
    const v3 = ADDRESS_REGEX.test(address);
    const v4 = INFO_REGEX.test(info);
    const v5 = GENDER_REGEX.test(gender);
    const v6 = DATE_REGEX.test(date);
    const v7 = CV_REGEX.test(cv);//it is image and pdf format
   
    
   
    if (!v1 || !v2 || !v3 || !v4 || !v5 || !v6 || !v7 ) {
        setErrMsg("Invalid Entry");
        return;
    }

    try {
        const data = {
            name:name,
           phone: phone,
           address: address,
           info:info,
            gender: gender,
            date: date,
            cv: cv,
             
        };
          
        const response = await axios.post('http://localhost:3000/auth/managacc', data, {
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
      {success ? (
        <section>
          <h1 className="pl-[20px] mt-4 ml-3  ">
            {" "}
            {t("Registered successful")}{" "}
          </h1>
          <Link to="/dashboards" className="btn btn-primary mt-4 ml-4 w-15">
            {t("Go to View")}
          </Link>
        </section>
      ) : (
        <section className="pt-[2rem]">
          <div className="p-[2.5rem]  rounded  border mx-[5rem] bg-slate-100 ">
            <p
              ref={errRef}
              className={errMsg ? "errMsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <select onChange={(e) => i18n.changeLanguage(e.target.value)} className="text-[#5a5a4b]"> 
      {languages.map((language) => (
       
        <option value={language.code} key={language.code} className="text-[#5a5a4b]">
          {language.name}
        </option>
      ))}
    </select>
            <Link to="/dashboards" className="btn btn-primary mt-4 ml-4 w-15">
              {t("Back")}
            </Link>
            <h1 className="text-3xl font-bold text-center">
              {t("")} New Employee register
            </h1>
            <form className="mx-0 row g-1 " onSubmit={handleSubmit}>
              <label htmlFor="username" className="form-label text-xl">
                {t("FUll NAME")} :
                <span
                  className={`inline-block ${validName ? "block" : "hidden"}`}
                >
                  <FaCheck className="do" />
                </span>
                <span
                  className={`inline-block ${
                    validName || !name ? "hidden" : "block"
                  }`}
                >
                  <FaTimes className="doo" />
                </span>
              </label>
              <input
                type="text"
                id="username"
                className="form-control rounded-0 text-xl"
                ref={nameRef}
                autoComplete="off"
                onChange={(e) => setName(e.target.value)}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => SetNameFocus(true)}
                onBlur={() => SetNameFocus(false)}
              />
              <p
                id="uidnote"
                className={`mt-2 ${
                  nameFocus && name && !validName ? "block" : "hidden"
                }`}
              >
                {/* Add a conditional rendering for the icon */}
                {nameFocus && name && !validName && (
                  <FontAwesomeIcon icon={faInfoCircle} className="dooo" />
                )}
                {t("3 to 200 characters.")} <br />
                {t("Alphabet only allowed.")}
              </p>

              <label htmlFor="phoneNo" className="form-label text-xl">
                {t("Phone Number")}:
                <span
                  className={`inline-block ${validPhone ? "block" : "hidden"}`}
                >
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
                {t("numbers and plus sign  exmaple")}{" "}
                <strong>+2519837377 </strong> {t("allowed.")}
              </p>

              <label
                htmlFor="AddressUser"
                className="form-label text-xl h-8 w-40"
              >
                {t("Address")} :
                <span
                  className={`inline-block ${
                    validAddress ? "block" : "hidden"
                  }`}
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
                {t("letter , numbers, minus sign and hash sign")}{" "}
                <strong> </strong>
                {t("allowed.")}
              </p>

              <label htmlFor="vacancy" className="form-label text-xl">
                {t("")}Provide information about your self and your experience :
                <span
                  className={`inline-block ${validInfo ? "block" : "hidden"}`}
                >
                  <FaCheck className="do" />
                </span>
                <span
                  className={`inline-block ${
                    validInfo || !info ? "hidden" : "block"
                  }`}
                >
                  <FaTimes className="doo" />
                </span>
              </label>
              <textarea
                id="vacancy"
                className="form-control rounded-1 h-[200px] text-xl"
                ref={infoRef}
                autoComplete="off"
                onChange={(e) => setInfo(e.target.value)}
                required
                aria-invalid={validInfo ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => SetInfoFocus(true)}
                onBlur={() => SetInfoFocus(false)}
              />
              <p
                id="uidnote"
                className={`mt-2 ${
                  infoFocus && info && !validInfo ? "block" : "hidden"
                }`}
              >
                {/* Add a conditional rendering for the icon */}
                {infoFocus && info && !validInfo && (
                  <FontAwesomeIcon icon={faInfoCircle} className="dooo" />
                )}
                {t("")} 50 to 2000 characters. <br />
                {t("Alphabet only allowed.")}
              </p>
              <label htmlFor="UserGender" className="form-label text-xl">
                {t("Gender")} :
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
                {t("only male, female and other")} <strong> </strong>
                {t("allowed.")}
              </p>

              <label htmlFor="Date">{t("")}Graduation Year:</label>
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

              <label htmlFor="Photo">
                {t("CV")} :
                <span
                  className={`inline-block ${validCv ? "block" : "hidden"}`}
                >
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
                {t("only file extension like")}{" "}
                <strong>.jpg|jpeg|png|gif|pdf </strong>
                {t("allowed.")}
              </p>

              <div className="col-12 mt-[0.5rem]">
                <button
                  disabled={
                    !validName ||
                    !validPhone ||
                    !validInfo ||
                    !validAddress ||
                    !validCv ||
                    !validGender ||
                    !validDate
                      ? true
                      : false
                  }
                  type="submit"
                  className="btn btn-success w-100 rounded-0 mb-2 text-zinc-950 text-2xl"
                  id="reeee"
                >
                  <b> {t("REGISTER")} </b>
                </button>
              </div>
            </form>
          </div>
        </section>
      )}
      ;
    </>
  );
};

export default Managacc;
