import React, { useContext } from "react";

function Signup() {
  const passwdTemplate = ` <div class="flex flex-col my-4">
    <label for="passwordUp" class="text-gray-700"
      >Password
      <span
        ><i
          class="fas fa-exclamation-circle failure-icon relative"
        ></i>
        <i
          class="fas fa-check-circle success-icon relative"
        ></i></span
    ></label>
    <div
      x-data="{ show: false }"
      class="relative flex items-center mt-2"
    >
      <input
        :type=" show ? 'text': 'password' "
        name="passwordUp"
        id="passwordUp"
        class="flex-1 p-2 pr-10 border border-gray-300 focus:outline-none focus:ring-0 focus:border-indigo-600 rounded text-sm text-gray-900"
        placeholder="Enter your password"
        type="password"
      />

      <button
        @click="show = !show"
        type="button"
        class="absolute right-2 bg-transparent flex items-center justify-center text-gray-700"
      >
        <svg
          x-show="!show"
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
          ></path>
        </svg>

        <svg
          x-show="show"
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          style="display: none"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          ></path>
        </svg>
      </button>
    </div>
    <div class="error relative flex-col"></div>
  </div>
    `;

  const confirmTemplate = ` <div class="flex flex-col my-4">
    <label for="password-confirmationUp" class="text-gray-700"
      >Confirm Password
      <span>
        <i
          class="fas fa-exclamation-circle failure-icon relative"
        ></i>
        <i
          class="fas fa-check-circle success-icon relative"
        ></i></span
    ></label>
    <div
      x-data="{ show: false }"
      class="relative flex items-center mt-2"
    >
      <input
        :type=" show ? 'text': 'password' "
        name="password-confirmationUp"
        id="password-confirmationUp"
        class="flex-1 p-2 pr-10 border border-gray-300 focus:outline-none focus:ring-0 focus:border-indigo-600 rounded text-sm text-gray-900"
        placeholder="Enter your password again"
        type="password"
      />

      <button
        @click="show = !show"
        type="button"
        class="absolute right-2 bg-transparent flex items-center justify-center text-gray-700"
      >
        <svg
          x-show="!show"
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
          ></path>
        </svg>

        <svg
          x-show="show"
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          style="display: none"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          ></path>
        </svg>
      </button>
    </div>
    <div class="error relative flex-col"></div>
  </div>
    `;

  return (
    <React.Fragment>
      <div className="h-screen overflow-auto flex items-center justify-center">
        <div className="w-full max-h-screen flex items-center justify-center">
          <div className="w-full h-screen flex items-center justify-center">
            <div className="overflow-auto w-full sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4 h-full bg-white flex items-center justify-center bg-gradient-to-r from-indigo-100 to-indigo-400">
              <div className="w-full px-12 max-h-full">
                <h2 className="mt-6 text-center text-2xl font-bold tracking-wide text-gray-800">
                  {" "}
                  Create your account{" "}
                </h2>
                <p className="text-center text-sm text-gray-600 mt-2">
                  Already have an account?
                  <a
                    href="login"
                    className="text-blue-600 hover:text-blue-700 hover:underline"
                    title="Sign In"
                  >
                    Login in here
                  </a>
                </p>
                <form className="my-8 text-sm">
                  <div className="flex flex-col my-4">
                    <label htmlFor="nameUp" className="text-gray-700">
                      Name
                      <span>
                        <i className="fas fa-exclamation-circle failure-icon"></i>
                        <i className="fas fa-check-circle success-icon"></i>
                      </span>
                    </label>
                    <input
                      type="text"
                      name="nameUp"
                      id="nameUp"
                      className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-indigo-600 rounded text-sm text-gray-900"
                      placeholder="Enter your name"
                    />
                    <div className="error relative flex-col"></div>
                  </div>
                  <div className="flex flex-col my-4">
                    <label htmlFor="emailUp" className="text-gray-700">
                      Email Address
                      <span>
                        <i className="fas fa-exclamation-circle failure-icon relative"></i>
                        <i className="fas fa-check-circle success-icon relative"></i>
                      </span>
                    </label>
                    <input
                      type="email"
                      name="emailUp"
                      id="emailUp"
                      className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-indigo-600 rounded text-sm text-gray-900"
                      placeholder="example@mail.com"
                    />
                    <div className="error relative flex-col"></div>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{ __html: passwdTemplate }}
                  ></div>

                  <div
                    dangerouslySetInnerHTML={{ __html: confirmTemplate }}
                  ></div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="termsUp"
                      id="termsUp"
                      className="mr-2 focus:ring-0 rounded"
                    />

                    <label htmlFor="termsUp" className="text-gray-700">
                      I accept the
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-700 hover:underline"
                      >
                        terms
                      </a>{" "}
                      and
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-700 hover:underline"
                      >
                        privacy policy
                      </a>
                      <span>
                        <i className="fas fa-exclamation-circle failure-icon relative"></i>
                        <i className="fas fa-check-circle success-icon relative"></i>
                      </span>
                    </label>
                  </div>
                  <div className="error relative flex-col"></div>
                  <div className="my-4 flex items-center justify-end space-x-4">
                    <button
                      id="btn-signUp"
                      type="button"
                      className="bg-indigo-600 hover:bg-indigo-700 rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl transition duration-150 uppercase"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>

                <div className="flex items-center justify-between">
                  <div className="w-full h-[1px] bg-gray-500"></div>
                  <span className="text-sm uppercase mx-6 text-gray-800">
                    Or
                  </span>
                  <div className="w-full h-[1px] bg-gray-500"></div>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded"
                  >
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 326667 333333"
                      shapeRendering="geometricPrecision"
                      textRendering="geometricPrecision"
                      imageRendering="optimizeQuality"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    >
                      <path
                        d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z"
                        fill="#4285f4"
                      ></path>
                      <path
                        d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z"
                        fill="#34a853"
                      ></path>
                      <path
                        d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z"
                        fill="#fbbc04"
                      ></path>
                      <path
                        d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z"
                        fill="#ea4335"
                      ></path>
                    </svg>
                    <span>Sign up with Google</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded"
                  >
                    <svg
                      fill="#1C2033"
                      className="w-5 h-5"
                      viewBox="0 0 64 64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M32 1.7998C15 1.7998 1 15.5998 1 32.7998C1 46.3998 9.9 57.9998 22.3 62.1998C23.9 62.4998 24.4 61.4998 24.4 60.7998C24.4 60.0998 24.4 58.0998 24.3 55.3998C15.7 57.3998 13.9 51.1998 13.9 51.1998C12.5 47.6998 10.4 46.6998 10.4 46.6998C7.6 44.6998 10.5 44.6998 10.5 44.6998C13.6 44.7998 15.3 47.8998 15.3 47.8998C18 52.6998 22.6 51.2998 24.3 50.3998C24.6 48.3998 25.4 46.9998 26.3 46.1998C19.5 45.4998 12.2 42.7998 12.2 30.9998C12.2 27.5998 13.5 24.8998 15.4 22.7998C15.1 22.0998 14 18.8998 15.7 14.5998C15.7 14.5998 18.4 13.7998 24.3 17.7998C26.8 17.0998 29.4 16.6998 32.1 16.6998C34.8 16.6998 37.5 16.9998 39.9 17.7998C45.8 13.8998 48.4 14.5998 48.4 14.5998C50.1 18.7998 49.1 22.0998 48.7 22.7998C50.7 24.8998 51.9 27.6998 51.9 30.9998C51.9 42.7998 44.6 45.4998 37.8 46.1998C38.9 47.1998 39.9 49.1998 39.9 51.9998C39.9 56.1998 39.8 59.4998 39.8 60.4998C39.8 61.2998 40.4 62.1998 41.9 61.8998C54.1 57.7998 63 46.2998 63 32.5998C62.9 15.5998 49 1.7998 32 1.7998Z" />
                    </svg>
                    <span>Sign up with GitHub</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded"
                  >
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 122.88 122.31"
                    >
                      <title>linkedin-app</title>
                      <path
                        className="cls-1"
                        d="M27.75,0H95.13a27.83,27.83,0,0,1,27.75,27.75V94.57a27.83,27.83,0,0,1-27.75,27.74H27.75A27.83,27.83,0,0,1,0,94.57V27.75A27.83,27.83,0,0,1,27.75,0Z"
                        fill="#0a66c2"
                      ></path>
                      <path
                        className="cls-2"
                        d="M49.19,47.41H64.72v8h.22c2.17-3.88,7.45-8,15.34-8,16.39,0,19.42,10.2,19.42,23.47V98.94H83.51V74c0-5.71-.12-13.06-8.42-13.06s-9.72,6.21-9.72,12.65v25.4H49.19V47.41ZM40,31.79a8.42,8.42,0,1,1-8.42-8.42A8.43,8.43,0,0,1,40,31.79ZM23.18,47.41H40V98.94H23.18V47.41Z"
                        fill="#fff"
                      ></path>
                    </svg>
                    <span>Sign up with LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex lg:w-1/2 xl:w-2/3 2xl:w-3/4 h-full bg-cover">
              <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50">
                <div className="flex items-center justify-center space-x-2">
                  <img
                    src="./img/logo/logo-CP.svg"
                    alt="Logo PassCode"
                    width="600"
                    height="550"
                  />
                </div>
                <p className="text-gray-500 mt-4 px-16 text-center">
                  Start building amazing documents with PassCode, share your
                  projects with your team just with one click.
                </p>
                <a
                  href="/"
                  className="mt-6 bg-indigo-600 hover:bg-indigo-700 rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl transition duration-150 uppercase"
                  title="Learn More"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        <script type="module" src="./js/js-register/mainsignup.js"></script>
      </div>
    </React.Fragment>
  );
}
export default Signup;
