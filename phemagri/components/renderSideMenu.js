import {FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaLinkedin} from 'react-icons/fa'
import { useContext, useState } from 'react'
import {HiChevronRight, HiX} from 'react-icons/hi'

const renderSideMenu = (isNavOpen, setIsNavOpen, loginContext) => {

    const [isDropDown, setIsDropDown] = useState(false)
    const userToLogin = useContext(loginContext)
    

    function toggleDropDown() {
       setIsDropDown(!isDropDown)
    }

    function handleNavClose(){
        setIsNavOpen(false)
    }

    return (
        <div className={`${isNavOpen ? 'h-full w-[80%] bg-dark-green transition duration-500 ease-in translate-x-0' : 'hidden'}`}>
       {/* Close */}
        <button onClick={handleNavClose} className="w-full px-10 text-gray-100 flex justify-end pt-5"><HiX className="w-5 h-5"/></button>
          {/* Menu */}
        <ul className="flex-col p-10 space-y-4">
            <li><a href="#" className="text-gray-100">About</a></li>
            <li><hr className="text-gray-400 h-1" ></hr></li>
            <li><a href="#" className="text-gray-100">Services</a></li>
            <li><hr className="text-gray-400 h-1" ></hr></li>
            <li><a href="#" className="text-gray-100">Contacts</a></li>
            
            {/* <li className="flex h-auto items-center justify-between">
            <button onClick={toggleDropDown}  className={`${isDropDown ? 'text-light-yellow' : 'text-gray-100'}`}>Login as</button>
            <p className="text-gray-100">{userToLogin}</p>
            <button className={`w-8 h-8 ${isDropDown ? 'bg-white' : 'bg-light-yellow'} rounded-full flex center-content`}>
            <HiChevronRight onClick={toggleDropDown} className={`w-6 h-6 text-dark-green ${isDropDown ? 'transform duration-400 ease-out rotate-90': ''}`}/>
            </button>
            </li> */}
            {/* <ul className={`${isDropDown ? 'pl-12 space-y-2': 'hidden'}`}>
                
                <li  className="text-gray-100"><a href="#" onClick={() => {setUserToLogin('Farmer'); setIsDropDown(false)}}>Farmer</a></li>
                <li><hr className="text-gray-400 h-1" ></hr></li>
                <li  className="text-gray-100"><a href="#" onClick={() => {setUserToLogin('Input provider'); setIsDropDown(false)}}>Input provider</a></li>
                <li><hr className="text-gray-400 h-1" ></hr></li>
                <li  className="text-gray-100"><a href="#" onClick={() => {setUserToLogin('Investor'); setIsDropDown(false)}}>Investor</a></li>
                <li><hr className="text-gray-400 h-1" ></hr></li>
                <li  className="text-gray-100"><a href="#" onClick={() => {setUserToLogin('Vendor'); setIsDropDown(false)}}>Vendor</a></li>
               
                
            </ul> */}
            <li><hr className="text-gray-400 h-1" ></hr></li>
            <li><a href="#" className="text-gray-100">Impact</a></li>
            <li><hr className="text-gray-400 h-1" ></hr></li>
            <li><a href="#" className="text-gray-100">Market Place</a></li>

            {/* Contacts */}

            <li className="flex-col justify-center items-start space-y-4 pt-8">
            {/* Email */}
            <div className="flex space-x-4 items-center">
                <div className="w-7 h-7 bg-light-yellow rounded-full flex center-content">
                    <FaEnvelope className="w-4 h-4 text-dark-green" />
                </div>
                <p className="text-gray-300">info@phemagri.com</p>
            </div>

            {/* Phone */}
            <div className="flex space-x-4 items-center">
                <div className="w-7 h-7 bg-light-yellow rounded-full flex center-content">
                    <FaPhoneAlt className="w-4 h-4 text-dark-green" />
                </div>
                <p className="text-gray-300">+234 893 882 212</p>
            </div>

            </li>
            {/* Social Icons */}
            <li className="flex justify-start space-x-7 pt-3">
            <a href="#" className="w-6 h-6 bg-gray-300 rounded-full flex center-content">
                    <FaFacebookF className="w-4 h-4 text-dark-green" />
            </a>
            <a href="#"className="w-6 h-6 bg-gray-300 rounded-full flex center-content">
                    <FaTwitter className="w-4 h-4 text-dark-green" />
            </a>
            <a href="#" className="w-6 h-6 bg-gray-300 rounded-full flex center-content">
                    <FaInstagram className="w-4 h-4 text-dark-green" />
            </a>
            <a  href="#" className="w-6 h-6 bg-gray-300 rounded-full flex center-content">
                    <FaLinkedin className="w-4 h-4 text-dark-green" />
            </a>
            </li>
           

        </ul>

        </div>
        
    )
}

export default renderSideMenu