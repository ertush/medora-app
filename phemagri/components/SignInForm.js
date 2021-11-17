
function SignInForm({isLoginClicked, setIsLoginClicked, userToLogin}){
    return(
        <form
        className="flex-col space-y-6 px-4"
        action=""
        method="POST"
        id="loginSignUp"
      >
        {/* Name */}
        <div className="mx-auto flex center-content w-full">
          {
              isLoginClicked ? (
                  <h3 className="text-base font-bold text-dark-maroon">
              Logging in as {userToLogin}
              </h3>  
              ): (
                  <h3 className="text-base font-bold text-dark-maroon">
              Lets Create Your Account
              </h3>
              )
          }
          
        </div>

        {
          !isLoginClicked &&
        <div>
          <label className="text-dark-green font-semibold pr-2">
            Name<span className="text-red-500 font-semibold">*</span>
          </label>
          <input
            className="outline-none w-full border-b-2 border-gray-400"
            type="text"
          />
        </div>
        }

        {/* Email  */}
        <div>
          <label className="text-dark-green font-semibold pr-2">
            Email
          </label>
          <input
            className="w-full border-b-2 border-gray-400"
            type="text"
          />
        </div>

        {/* Phone */}
        
        {
          !isLoginClicked &&
        <div>
          <label className="text-dark-green font-semibold pr-2">
            Phone<span className="text-red-500 font-semibold">*</span>
          </label>
          <input
            className="w-full border-b-2 border-gray-400"
            type="text"
          />
        </div>
        }

        {/* Password */}

        <div>
          <label className="text-dark-green font-semibold pr-2">
            Password<span className="text-red-500 font-semibold">*</span>
          </label>
          <input
            className="w-full border-b-2 border-gray-400"
            type="password"
          />
        </div>

        

        {/* Confirm Password */}
        
        {
          !isLoginClicked &&
        <div>
          <label className="text-dark-green font-semibold pr-2">
            Confirm Password
          </label>
          <input
            className="w-full border-b-2 border-gray-400"
            type="text"
          />
        </div>
        }

        {/* Login & signup Button */}
        <div className="max-w-[65%] space-x-4 px-4 py-2 mx-auto flex items-center justify-between h-auto rounded-3xl bg-light-yellow">
          <a
            onClick={() => {setIsLoginClicked(true)}}
            className={`${
              isLoginClicked
                ? " text-lg font-semibold bg-dark-green px-4 py-1 rounded-3xl text-light-yellow"
                : "text-lg font-semibold text-dark-green"
            } cursor-pointer`}
          >
            login
          </a>
          <a
            onClick={() => {setIsLoginClicked(false)}}
            className={`${
              isLoginClicked
                ? "text-lg font-semibold text-dark-green"
                : "text-lg font-semibold text-light-yellow bg-dark-green px-4 py-1 rounded-3xl"
            } cursor-pointer`}
          >
            signup
          </a>
        </div>
      </form>
    )
}

export default SignInForm