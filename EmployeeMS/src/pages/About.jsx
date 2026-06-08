import React, { useState } from "react";
import "../index.css";
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
import Languageoption from "../Components/language-dropdown";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
const About = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
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
        <div className="flex justify-between items-center h-13 max-w-[1240px] mx-auto px-4 text-white  bg-[#393949]">
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
            <li className="p-4 ">
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
      <div className="about-container">
      <h2 className="homh">
          {t("Welcome to the Bale Zone  Education Bureau Website!")}
        </h2>
        <p className="homp">To promating</p>
      </div>
      <div className="foot">
        <h2>this is footer</h2>
      </div>
    </div>
  );
};

export default About;
