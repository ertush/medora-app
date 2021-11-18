

import {useEffect, useState, useRef} from 'react'
// import User from '.../Model/user'



function SignInForm({isLoginClicked, setIsLoginClicked, userToLogin}){

  // const _user = new User()
  // const [user, setUser] = useState(_user)

  const [isName, setIsName] = useState("");
  const [isEmail, setIsEmail] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [isMatch, setIsMatch] = useState("");
  const [isPhone, setIsPhone] = useState("");

  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);

  const passRef = useRef(null)
  const [disabled, setDisabled] = useState(true);

  const handleNameChange = (e) => {
    setIsName(e.target.value !== "")
  }

  const handlePasswordChange = (e) => {
    e.required = true
    setIsPassword(e.target.value !== "")
  }

  
  const handleMatch = (e) => {
    setIsMatch(e.target.value.match(passRef.current.value) !== null)
  }

  const handleEmailChange = (e) => {
    setIsEmail(
      e.target.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) !== null
        ? true
        : false
    );
  }

  const handlePhoneChange = (e) => {
    setIsPhone(
      e.target.value.match(/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/g) !== null
        ? true
        : false
    )
  }

  const handleNameFocus = () => {
    setNameFocus(true)
  }

  const handleEmailFocus = () => {
    setEmailFocus(true)
  }

  const handlePhoneFocus = () => {
    setPhoneFocus(true)
  }

  const handlePasswordFocus = () => {
    setPasswordFocus(true)
  }

  const handleConfirmPasswordFocus = () => {
    setConfirmPasswordFocus(true)
  }


  const loginValidation = () => isEmail && isPassword ;
  const signUpValidation = () => isName && isPhone && isEmail && isPassword && isMatch ;

  useEffect(() => {
    if (isLoginClicked && loginValidation() || !isLoginClicked && signUpValidation()) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }

    // const newUser = await
  }, [isName, isPhone, isPassword, isEmail, isMatch]);

   
    return (
      <form
        className="flex-col space-y-6 px-4"
        action="api/auth"
        method="POST"
        id="login-signup-form"
      >
        {/* Name */}
        <div className="mx-auto flex center-content w-full">
          {isLoginClicked ? (
            <h3 className="text-lg font-extrabold text-dark-maroon">
              Login as {userToLogin}
            </h3>
          ) : (
            <h3 className="text-lg font-extrabold text-dark-maroon">
              Let's Create Your Account
            </h3>
          )}
        </div>

        {!isLoginClicked && (
          <div>
            <label
              className="text-dark-green font-semibold pr-2"
              htmlFor="name"
            >
              Name<span className="text-red-500 font-semibold">*</span>
            </label>
            <input
              onFocus={handleNameFocus}
              onChange={handleNameChange}
              className="h-8 w-full focus:outline-none focus:border-light-yellow border-b-2 border-gray-400"
              name="name"
              type="text"
            />
            {
              (!isName && nameFocus) && <span className="text-sm font-normal italic text-red-400">name required</span>
            }
            
          </div>
        )}

        {/* Email  */}
        
        <div>
          <label htmlFor="email" className="text-dark-green font-semibold pr-2">
            Email<span className="text-red-500 font-semibold">*</span>
          </label>
          <input
            onFocus={handleEmailFocus}
            onChange={handleEmailChange}
            className="w-full focus:outline-none focus:border-light-yellow border-b-2 h-8 border-gray-400"
            name="email"
            type="text"
          />
          {
            (!isEmail && emailFocus) && <span className="text-sm font-normal italic text-red-400">Invalid email</span>
          }
          
        </div>
        

        {/* Phone */}

        {!isLoginClicked && (
          <div>
            <label
              htmlFor="phone"
              className="text-dark-green font-semibold pr-2"
            >
              Phone
            </label>
            <input
              placeholder="+254 XXXX XXX"
              onFocus={handlePhoneFocus}
              onChange={handlePhoneChange}
              name="phone"
              className="w-full border-b-2 h-8 focus:outline-none focus:border-light-yellow border-gray-400"
              type="text"
            />
            {
              (!isPhone && phoneFocus) && <span className="text-sm font-normal italic text-yellow-500">phone no. invalid</span>
            }
          </div>
        )}
      

        {/* Password */}

        <div>
          <label
            htmlFor="password"
            className="text-dark-green font-semibold pr-2"
          >
            Password<span className="text-red-500 font-semibold">*</span>
          </label>
          <input
            ref={passRef}
            onFocus={handlePasswordFocus}
            onChange={handlePasswordChange}
            name="password"
            className="w-full border-b-2 h-8 focus:outline-none focus:border-light-yellow border-gray-400"
            type="password"
          />
          {
            (!isPassword && passwordFocus) && <span className="text-sm font-normal italic text-red-400">password required</span>
          }
        </div>

        {/* Confirm Password */}

        {!isLoginClicked && (
          <div>
            <label
              htmlFor="confirmPassword"
              className="text-dark-green font-semibold pr-2"
            >
              Confirm Password
            </label>
            <input
              name="confirmPassword"
              onChange={handleMatch}
              onFocus={handleConfirmPasswordFocus}
              className="w-full border-b-2 h-8 focus:outline-none focus:border-light-yellow border-gray-400"
              type="text"
            />
            {
              (!isMatch && confirmPasswordFocus) && <span className="text-sm font-normal italic text-red-400">Not matching</span>
            }
            
          </div>
          
        )}

        {/* Login as Dropdown */}
        {isLoginClicked && (
        <div>
          <li className="flex justify-start items-center w-auto space-x-2">
                <label htmlFor="loginType" className="text-dark-green">
                  Login as
                </label>
                <select
                  form="login-signup-form"
                  name="loginType"
                  className="w-auto bg-white"
                >
                  <option>Farmer</option>
                  <option>Input Provider</option>
                  <option>Investor</option>
                  <option>Vendor</option>
                </select>
              </li>
        </div>
        )}

        {/* Login & signup Button */}
        <div className="max-w-[65%] space-x-4 px-4 py-2 mx-auto flex items-center justify-between h-auto rounded-3xl bg-white">
          <a
            onClick={() => {
              setIsLoginClicked(true);
            }}
            className={`${
              isLoginClicked
                ? " text-lg font-semibold bg-dark-green px-4 py-1 rounded-3xl text-light-yellow"
                : "text-lg font-semibold text-dark-green"
            } cursor-pointer`}
          >
            signin
          </a>
          <a
            onClick={() => {
              setIsLoginClicked(false);
            }}
            className={`${
              isLoginClicked
                ? "text-lg font-semibold text-dark-green"
                : "text-lg font-semibold text-light-yellow bg-dark-green px-4 py-1 rounded-3xl"
            } cursor-pointer`}
          >
            signup
          </a>
        </div>
        {/* Login / Signup */}
        <div className="w-full mx-auto">
          {isLoginClicked ? (
            <button
              disabled={disabled}
              type="submit"
              className={`p-4 bg-light-yellow w-full flex center-content text-base font-semibold rounded-lg text-dark-green ${
                disabled 
                ? 'opacity-50'
                : 'opacity-90'
              }`}
            >
              Login
            </button>
          ) : (
            <button
              disabled={disabled}
              type="submit"
              className={`p-4 bg-light-yellow w-full flex center-content text-base font-semibold rounded-lg text-dark-green
              ${
                disabled
                ? 'opacity-50'
                : 'opacity-90'
              }
              `}
            >
              Create Account
            </button>
          )}
        </div>
      </form>
    );
}

export default SignInForm