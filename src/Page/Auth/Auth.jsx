import React, { useState } from "react";
import "./Auth.css";
import Signin from "./Signin";
import Signup from "./Signup";

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  const togglePanel = () => {
    setIsRegister(!isRegister);
  };
  return (
    <div className="flex  justify-center h-screen items-center overflow-hidden">
      <div className="box lg:max-w-4x1">
        <div className={`cover ${isRegister ? "rotate-active" : ""}`}>
          <div className="front">
            <img
              src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="text">
              <span className="text-1">
                O sucesso depende de tarefas bem organizadas!{" "}
              </span>
              <span className="text-2 text-xs">Venha se conectar!</span>
            </div>
          </div>
          <div className="back">
            <img src="https://images.pexels.com/photos/4034007/pexels-photo-4034007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
             alt="" />
          </div>
        </div>
        <div className="forms h-full">
            <div className="form-content h-full">

               <div className="login-form">
                <Signin togglePanel={togglePanel}/>
                </div>
                 <div className="signup-form">
                    <Signup togglePanel={togglePanel}/>
                </div> 
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Auth;
