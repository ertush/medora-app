import {useState, createContext} from 'react'
import { HiMenu} from 'react-icons/hi'

import { Blob1, Blob2, Blob3, Blob4, Blob5, Blob6, Blob7 } from './blobs'
import HeaderTitle from './HeaderTitle'
import renderSideMenu from './renderSideMenu'
import SignInForm from './SignInForm'



function Header() {

    const [isMenu, setIsMenu] = useState(false)
    const [userToLogin, setUserToLogin] = useState('Farmer')
    const loginContext = createContext(userToLogin)
    const [isLoginClicked, setIsLoginClicked] = useState(null)

    return (
      <div className="w-full h-full relative">
        {/* Blob 1 */}
        <div className="z-2 absolute w-40 h-40 top-1 right-0 animate-spin-slow">
            <Blob1 />
        </div>

        {/* Blob 2 */}
        <div className="z-2 absolute w-32 h-32 top-12 right-20 animate-spin-slow">
          <Blob2 />
        </div>

        {/* Blob 3 */}
        <div className="z-2 absolute w-44 h-32 top-12 left-0 animate-fade">
        <Blob3 />
        </div>

        {/* Blob 4  */}
        <div className="z-2 absolute w-20 h-20 top-14 left-0 animate-spin-slow">
          <Blob4 />
        </div>

        {/* Blob 5 */}
        <div className="z-2 absolute -left-14 rotate-45 w-40 top-48">
          <Blob5 />
        </div>

        {/* Blob 6  */}
        <div className="z-2 absolute -right-20 rotate-45 w-48 top-64">
          <Blob6 />
        </div>

        {/* Blob 7  Main Blob*/}
        <div className="z-2  absolute top-20 right-0 w-full h-36 rotate-10 md:w-[60%] md:-left-10 md:top-[10%]">
          <Blob7 />
         
         {/* Header Title */}
         <div className="md:hidden"><HeaderTitle /></div>
        

          {/* Login\signup form */}
          <div className="z-4 mx-auto md:hidden rounded-xl mt-[5%] shadow-md p-4 center-content w-[80%] mb-12 bg-white">
           <SignInForm 
          isLoginClicked={isLoginClicked}
          setIsLoginClicked={setIsLoginClicked}
          userToLogin={userToLogin}
           />
          </div>
        </div>

        {/* Header title md breakpoint */}
        <div className="hidden md:flex boreder-2 w-[40%] absolute top-72 left-[25%]"><HeaderTitle /></div>

        {/* Signin form md breakpoint  */}
        <div className="hidden md:flex absolute top-24 right-[10%] rounded-xl mt-[5%] shadow-md p-4 center-content w-[30%]  bg-white">
        <SignInForm 
          isLoginClicked={isLoginClicked}
          setIsLoginClicked={setIsLoginClicked}
          userToLogin={userToLogin}
           />
        </div>

        <div className="w-full h-20 p-5 md:p-4 flex justify-between absolute z-4">
          {/* Nav Bar */}

          {/* Logo */}
          <p className="font-bold text-light-yellow text-lg">
            Phema<span className="text-dark-maroon">-</span>
            <span className="text-dark-green">Agri</span>
          </p>

          <button
            onClick={() => {
              setIsMenu(true);
            }}
            className="md:hidden"
          >
            <HiMenu className="w-6 h-6 text-dark-green" />
          </button>
          {/* Link Menu */}
          <ul className="md:flex space-x-4 hidden">
            <li className="flex justify-start items-center w-auto space-x-2">
              <a href="#" className="text-dark-green">
                Login as
              </a>
              <select
                onChange={(e) => {
                  setUserToLogin(e.target.value);
                }}
                className="w-auto bg-white"
              >
                <option>Farmer</option>
                <option>Input Provider</option>
                <option>Investor</option>
                <option>Vendor</option>
              </select>
            </li>
            <li className="flex items-center">
              <a href="#" className="text-dark-green">
                About
              </a>
            </li>
            <li className="flex items-center">
              <a href="#" className="text-dark-green">
                Contacts
              </a>
            </li>
            <li className="flex items-center">
              <a href="#" className="text-dark-green">
                Services
              </a>
            </li>
          </ul>
        </div>
        <loginContext.Provider value={userToLogin}>
          {renderSideMenu(isMenu, setIsMenu, loginContext, setUserToLogin)}
        </loginContext.Provider>
      </div>
    );
}

export default Header