import React, { useState } from "react";
import "../index.css";
import {
  FaBars,
  FaBriefcase,
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGitSquare,
  FaHome,
  FaInstagramSquare,
  FaLock,
  FaPhone,
  FaServicestack,
  FaTimes,
  FaTwitterSquare,
  FaUser,
} from "react-icons/fa";
import Languageoption from "../Components/language-dropdown";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
const Service = () => {
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
        <div className="flex justify-between items-center h-13 max-w-[1240px] mx-auto px-4 text-white bg-[#828299]">
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
      <div className="service-container">
      <h2 className="homh">
          {t("Welcome to the Bale Zone  Education Bureau Website!")}
        </h2>
        <p className="homp">{t('primary aims of services provided by  Bale zone  Education Bureau is to ensure equitable access to quality education for all individuals, regardless of their background or circumstances.')}</p>
      </div>
      <div className="ok">
        <h2><b className="text-3xl">{t('The services we provide')}</b></h2>
      </div>
      <div className="w-full  py-[10rem] px-4 bg-white">
        <div className="max-w-[1240px] mt-[-140px] mx-auto grid md:grid-cols-3 gap-8">
          <div className="w-full shadow-xl flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <h3 className="text-2xl font-bold bg-gray-100 text-center py-0 border">
              {t('Education Policy Development')}
            </h3>
            <p className="text-center text-xl font-italic">
              {t('Formulating guidelines on inclusive education policies.')}
              
            </p>

            <h3 className="text-2xl font-bold bg-gray-100 text-center py-0 border">
            {t('Curriculum Standardization')}
            </h3>
            <p className="text-center text-xl font-italic">
            {t('Aligning educational content, learning objectives, and assessments across schools to ensure consistency and quality in the curriculum.')}
            </p>

            <h3 className="text-2xl font-bold bg-gray-100 text-center py-0 border">
            {t('Teacher Training Programs')}
            </h3>
            <p className="text-center text-xl font-italic">
            {t('Providing professional development opportunities for educators to enhance their teaching skills and keep up with best practices.')} 
            </p>
          </div>

          <div className="w-full shadow-xl bg-gray-100 flex-col p-4 my-4 md:my-0 rounded-lg hover:scale-105 duration-300">
            <h3 className="text-2xl font-bold bg-white text-center py-0 border">
            {t('Quality Assurance Mechanisms')} 
            </h3>
            <p className="text-center text-xl font-italic">
            {t('Implementing processes to monitor and evaluate the effectiveness of educational programs, schools, and teaching practices.')}
              
            </p>

            <h3 className="text-2xl font-bold bg-white text-center py-0 border">
            {t('Education Funding and Budgeting')}
            </h3>
            <p className="text-center text-xl font-italic">
            {t('Managing education budgets, securing funding, and allocating resources to support educational initiatives and programs.')} 
            </p>

            <h3 className="text-2xl font-bold bg-white text-center py-0 border">
            {t('Research and Innovation in Education')}
            </h3>
            <p className="text-center text-xl font-italic">
            {t('Engaging in research activities and promoting innovative practices to enhance teaching methods, learning outcomes, and educational policies.')} 
            </p>
          </div>

          <div className="w-full shadow-xl  flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <h3 className="text-2xl font-bold bg-gray-100 text-center py-0 border">
            {t('Community Outreach Initiatives')}
            </h3>
            <p className="text-center text-xl font-italic">
            {t('Engaging with the community through programs, events, and partnerships to promote education, raise awareness, and foster collaboration.')}
              
            </p>

            <h3 className="text-2xl font-bold  bg-gray-100 text-center py-0 border">
            {t('Technology Integration in Education')} 
            </h3>
            <p className="text-center text-xl font-italic">
            {t('Incorporating technology tools and resources into the educational process to enhance teaching, learning, and student engagement.')} 
            </p>

            <h3 className="text-2xl font-bold bg-gray-100 text-center py-0 border">
            {t('Special Education Services')} 
            </h3>
            <p className="text-center text-xl font-italic">
            {t('Offering specialized instruction, accommodations, and services to meet the unique needs of students with disabilities or special educational requirements.')} 
            </p>
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

export default Service;
/*
,
<FaFacebookSquare/>,
<FaInstagramSquare/>,
<FaTwitterSquare/>,
<FaGitSquare/>,
<FaDribbbleSquare/>*/
