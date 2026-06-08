import React, { useState } from "react";
import "../index.css";
import {
  FaBars,
  FaHome,
  FaLock,
  FaPhone,
  FaServicestack,
  FaTimes,
  FaUser,
  FaFacebook,
  FaTelegram,
  FaComment,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaGitSquare,
  FaDribbbleSquare,
  FaBriefcase,
} from "react-icons/fa";
import Languageoption from "../Components/language-dropdown";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
const Contact = () => {
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
        <div className="flex justify-between items-center h-13 max-w-[1240px] mx-auto px-4 text-white bg-[#0f0f1a]">
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
      <div>
        <div className="contact-container">
        <h2 className="homh">
          {t("Welcome to the Bale Zone  Education Bureau Website!")}
        </h2>
          <p className="homp"></p>
        </div>
        <div className="oko">
          <h2 className="text-3xl"> {t('Contact Information')}</h2>
        </div>
      </div>

      <div>
        <div className="w-full  py-[10rem]  px-2 bg-white">
          <div className="max-w-[1240px] mt-[-150px] mx-auto grid md:grid-cols-2 gap-8 ">
            <div className="w-full shadow-xl  bg-slate-600 flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <h2 className="text-2xl font-bold text-center py-0 border">
                {t('Message Contact')}
                </h2>
                <p className="text-left text-xl font-italic text-[#fff] ">
                {t('Contact Us for message using Email and sms')} 
                </p>
                <p className="text-left text-xl font-bold text-[#fff] ">
                  <FaHome />
                  {t('email')}  :- dine62611@gmail.com
                </p>
                <p className="text-left text-xl font-bold text-[#fff] ">
                  <FaComment />
                  {t('sms')}:- 54634
                </p>
              </div>
              <div className="w-full shadow-xl  bg-slate-600 flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <h2 className="text-2xl font-bold text-center py-0 border">
                  {" "}
                  {t('Contact on online page')} 
                </h2>
                <p className="text-left text-xl font-italic text-[#fff] mb-2 ">
                {t('Contact Us using Telegram and Facebook')} 
                </p>
                <p className="text-left text-xl font-bold text-[#fff] mb-2">
                  {t('click the link below for contact us by Facebook')}
                  <a href="" className="robaa">
                    <FaFacebook />
                    &nbsp; &nbsp; {t('Facebook')} 
                  </a>
                </p>
                <p className="text-left text-xl font-bold text-[#fff] ">
                {t('click the link below for contact us by Telegram')}
                  <a href="" className="robaa">
                    <FaTelegram />
                    &nbsp; &nbsp;  {t('Telegram')}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full  py-[10rem] mt-[-200px] px-2 bg-white">
            <div className="max-w-[1240px] mt-[-150px] mx-auto grid md:grid-cols-2 gap-8 ">
              <div className="w-full shadow-xl bg-slate-600 flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <h2 className="text-2xl font-bold text-center py-0 border">
                {t('Contact Company leaders')}
                  
                </h2>
                <p className="text-left text-xl font-italic text-[#fff] ">
                {t('Contact office Phone numbers')} 
                </p>
                <p className="text-left text-xl font-bold text-[#fff] ">
                {t('TO Manager office')} 
                </p>
                <p className="text-left text-xl font-bold text-[#fff] ">
                  <FaPhone />
                  {t('Phone Number')} :- +251975320223
                </p>
                <p className="text-left text-xl font-bold text-[#fff] ">
                {t('TO vaice Manager office')} 
                </p>
                <p className="text-left text-xl font-bold text-[#fff] ">
                  <FaPhone />
                  {t('Phone Number')} :- +251963326261
                </p>
              </div>

              <div className="w-full shadow-xl bg-slate-600 flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <h2 className="text-2xl font-bold text-center py-0 border">
                {t('Office location')}  
                </h2>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1795.9674318370107!2d39.99974327555358!3d7.102460695364935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17ca01f26c9b02cf%3A0x3629d9e01ba35302!2sBale%20Zone%20Administration%20office!5e0!3m2!1sen!2set!4v1708885863247!5m2!1sen!2set"
                  className="w-full shadow-xl  flex-col p-4 my-4 rounded-lg"
                ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[2rem]  mt-[-150px] py-[10rem] px-4 bg-black">
        <div className="max-w-[1240px] mt-[-180px] mx-auto grid md:grid-cols-5 gap-8 text-white  ">
          <div className="w-[150%] shadow-xl flex-col p-4 my-4 rounded-lg   bg-black">
            <div>
              <h1 className="w-full text-3xl font-bold text-[#fff]">Emp</h1>
              <p className="py-4">
                to identify suitable candidates for various position
              </p>
              <div className=" flex justify-between md:w-[75%]">
                <FaFacebookSquare size={30} />
                <FaInstagramSquare size={30} />
                <FaTwitterSquare size={30} />
                <FaGitSquare size={30} />
                <FaDribbbleSquare size={30} />
              </div>
            </div>
          </div>
          <div className="w-full shadow-xl flex-col p-4 my-4 rounded-lg   ">
            <div className="lg:col-span-3 flex justify-between  bg-black">
              <ul>
                <h6 className="font-medium text-gray-400">Solutins</h6>
                <li className="py-2 text-sm">Analytical</li>
                <li className="py-2 text-sm">marketing</li>
                <li className="py-2 text-sm">commerce</li>
                <li className="py-2 text-sm">Insights</li>
              </ul>
            </div>
          </div>

          <div className="w-full shadow-xl flex-col p-4 my-4 rounded-lg ">
            <div className="lg:col-span-3 flex justify-between  bg-black">
              <ul>
                <h6 className="font-medium text-gray-400">Support</h6>
                <li className="py-2 text-sm">Pricing</li>
                <li className="py-2 text-sm">Documentation</li>
                <li className="py-2 text-sm">Guides</li>
                <li className="py-2 text-sm">API Status</li>
              </ul>
            </div>
          </div>

          <div className="w-full shadow-xl flex-col p-4 my-4 rounded-lg ">
            <div className="lg:col-span-3 flex justify-between  bg-black">
              <ul>
                <h6 className="font-medium text-gray-400">Company</h6>

                <li className="py-2 text-sm">Blog</li>
                <li className="py-2 text-sm">Jobs</li>
                <li className="py-2 text-sm">Press</li>
                <li className="py-2 text-sm">Careers</li>
              </ul>
            </div>
          </div>

          <div className="w-full shadow-xl flex-col p-4 my-4 rounded-lg ">
            <div className="lg:col-span-3 flex justify-between bg-black">
              <ul>
                <h6 className="font-medium text-gray-400">legal</h6>
                <li className="py-2 text-sm justify-between text-center">
                  Claim
                </li>
                <li className="py-2 text-sm justify-between">Policy</li>
                <li className="py-2 text-sm justify-between">Terms</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-[#fff]  bg-black">
          <h1 className="text-center">Copyriht2024</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
