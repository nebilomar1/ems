import React, { useState } from "react";
import "../index.css";
import axios from "axios";
import {
  FaBars,
  FaBriefcase,
  FaHome,
  FaLock,
  FaPhone,
  FaServicestack,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Languageoption from "../Components/language-dropdown";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
const Login = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  // risponsive dhaf qofa fayyadaa kan oli kun

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/auth/adminlogin", values)
      .then((result) => {
        if (result.data.loginStatus) {
          navigate("/dashboard");
        } else {
          setError(result.data.Error);
        }
      })
      .catch((err) => console.log());
  };

  //language
  const { t, i18n } = useTranslation();
  const languages = [
    { code: "en", name: "English" },
    { code: "om", name: "Afaan Oromo" },
    { code: "am", name: "አማርኛ" },
  ];
  return (
    <div>
      <div className="bg-[#005999]">
        <div className="flex justify-between items-center h-13 max-w-[1240px] mx-auto px-4 text-white  bg-[#b0b0e6]">
        <hl className="w-full text-3xl font-bold text-[#fff]">Emp</hl>
          <select onChange={(e) => i18n.changeLanguage(e.target.value)} className="text-[#5a5a4b]"> 
      {languages.map((language) => (
       
        <option value={language.code} key={language.code} className="text-[#5a5a4b]">
          {language.name}
        </option>
      ))}
    </select>
          <ul className="hidden md:flex ">
            <li className="p-4">
              <a href="home" id="roba">
                <FaHome />
                {t("home")}
              </a>
            </li>

            <li className="p-4">
              <a href="service" id="roba">
                <FaServicestack />
               {t('service')} 
              </a>
            </li>
            <li className="p-4">
              <a href="contact" id="roba">
                <FaPhone />
                {t('contact')} 
              </a>
            </li>
            <li className="p-4">
              <a href="about" id="roba">
                <FaUser />
                {t('about')}  
              </a>
            </li>
            <li className="p-4  ">
              <a href="dashboards" id="roba">
                <FaBriefcase />
               {t('')}Announcement
              </a>
            </li>
            <li className="p-4">
              <a href="login" id="roba">
                <FaLock />
                {t('login')} 
              </a>
            </li>
          </ul>
          <div onClick={handleNav} className="block md:hidden">
            {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
          </div>
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900  bg-[#000300] ease-in-out duration-500"
                : "fixed left-[-100%]"
            }
          >
            <hl className=" hw-full text-3xl font-bold text-[#00df9a] m-4">
              Emp
            </hl>
            <ul className="uppercase p-4">
              <li className="p-4 border-b border-gray-600">
                <a href="home" id="roba">
                  <FaHome />
                 {t('home')} 
                </a>
              </li>
              <li className="p-4 border-b border-gray-600">
                <a href="service" id="roba">
                  <FaServicestack />
                  {t('service')}
                </a>
              </li>
              <li className="p-4 border-b border-gray-600">
                <a href="contact" id="roba">
                  <FaPhone />
                  {t('contact')} 
                </a>
              </li>
              <li className="p-4 border-b border-gray-600">
                <a href="about" id="roba">
                  <FaUser />
                  {t('about')}
                </a>
              </li> 
              <li className="p-4  border-b border-gray-600">
              <a href="dashboards" id="roba">
                <FaBriefcase />
               {t('')}Announcement
              </a>
            </li>

              <li className="p-4 border-b border-gray-600">
                <a href="login" id="roba">
                  <FaLock />
                  {t('login')} 
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="p-2 d-flex justify-content-center align-items-center vh-100 loginPage">
        <div className="p-4 rounded w-90 border loginForm">
          <div className="text-warning">{error && error}</div>
          <h2>{t('login page')}</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3" id="ree">
              <label htmlFor="email">
                <strong>{t('email')}:</strong>
              </label>

              <input
                type="email"
                name="email"
                autoComplete="off"
                placeholder="Enter Email"
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
                className="form-control rounded-0"
              />
            </div>
            <div className="mb-3" id="reee">
              <label htmlFor="password">
                <strong>{t('password')}:</strong>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
                className="form-control rounded-0"
              />
            </div>
            <button className="btn btn-success w-100 rounded-0 mb-2" id="reeee">
            {t('login')}
            </button>
            <div className="mb-1">
              <input type="checkbox" name="tick" id="tick" className="me-2" />
              <label htmlFor="Password">
                <strong>{t('you are agree with terms & condition')}</strong>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
