import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import "../App.css";

const Form = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container">
      <div className="form-Containter">
        
        <div className="form-toggle">
          <button
            onClick={() => setIsLogin(true)}
            className={isLogin ? "active" : ""}>
            Login
          </button>

          <button
            onClick={() => setIsLogin(false)}
            className={!isLogin ? "active" : ""}>
            Sign Up
          </button>
        </div>

        {isLogin ? 
          <Login switchToSignup={() => setIsLogin(false)} />
         : 
          <SignUp switchToLogin={() => setIsLogin(true)} />
        }

      </div>
    </div>
  );
};

export default Form;
