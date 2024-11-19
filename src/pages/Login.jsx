import { useEffect, useState } from "react";

import { useShopContext } from "../contexts/ShopContextProvider";

function Login() {
  const [currentState, setCurrentState] = useState("Sign Up");

  const { loggedIn, navigate, setLoggedIn } = useShopContext();
  const [remainingTime, setRemainingTime] = useState(5);

  useEffect(
    function () {
      async function getRemainingTime() {
        if (loggedIn) {
          if (remainingTime === 0) {
            navigate("/");
          }
          const timer = setInterval(
            () => setRemainingTime(remainingTime - 1),
            1000
          );
          return () => clearInterval(timer);
        }
      }
      getRemainingTime();
    },
    [remainingTime]
  );

  function onButtonClick() {
    if (currentState == "Sign Up") {
      setCurrentState("Login");
    } else {
      setLoggedIn(true);
      navigate("/");
    }
  }

  if (loggedIn) {
    return (
      <section>
        <div className="flex flex-col items-center gap-6  w-full h-[80%] justify-center mt-14 ">
          <h3 className="font-semibold text-xl ">
            You are logged in. You will be redirected to Home page in
            {" " + remainingTime} seconds.
          </h3>
          <button
            onClick={() => navigate("/")}
            className="bg-gray-100 py-4 px-2 hover:bg-gray-200"
          >
            Navigate to HomPage
          </button>
        </div>
      </section>
    );
  }

  console.log(loggedIn);
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        {/* Show Login or Sign up Heading */}
        <h2 className="prata-regular text 3x1"> {currentState}</h2>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800 " />
      </div>

      <div className="w-full px-3 py-2 flex flex-col gap-4">
        {/* Show Name field on Sign up */}
        {currentState === "Sign Up" ? (
          <input
            type="text"
            className="w-Full px-3 py-2 border border-gray-880"
            placeholder="Name"
            required
          />
        ) : null}

        {/* Fields for both email and password */}
        {/* Email */}
        <input
          type="email"
          className="w-Full px-3 py-2 border border-gray-880"
          placeholder="Email"
          required
        />
        {/* Password */}
        <input
          type="password"
          className="w-Full px-3 py-2 border border-gray-880"
          placeholder="Password"
          required
        />

        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className=" cursor-pointer">Forgot your password?</p>
          {currentState === "Login" ? (
            <p
              onClick={() => setCurrentState("Sign Up")}
              className="cursor-pointer"
            >
              Create Account
            </p>
          ) : (
            <p
              onClick={() => setCurrentState("Login")}
              className="cursor-pointer"
            >
              Login Here
            </p>
          )}
        </div>
        <button
          onClick={onButtonClick}
          className="w-1/2 m-auto bg-black text-white px-8 py-2 mt-4 "
        >
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </button>
      </div>
    </form>
  );
}

export default Login;
