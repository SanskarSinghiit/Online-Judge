import React, { useState } /*{ useState }*/ from "react";
// import ReactDOM from "react-dom";
import axios from "axios";
import "./auth.css";
import Login from "./Login"
import Signup from "./Signup";


const Auth = () => {
  const [first, setFirst] = useState("");
  function renderLogin(){
    // alert("Login Clicked!!!");
    // setFirst("hiii");
    setFirst(<Login/>);
    // document.getElementsByClassName("authBody")[0].innerHTML = {<Login/>};
  }
  function renderSignup(){
    // alert("Signup Clicked!!!");
    // setFirst("hiiiiiiii");
    setFirst(<Signup/>);
    // document.getElementsByClassName("authBody")[0].innerHTML = "This is Signup page";
  }
  return (
    <>
      <div className="authMain">
        <div className="top">
          <button id="login" onClick={renderLogin}>Login</button>
          <button id="signup" onClick={renderSignup}>Signup</button>
          Hello
        </div>
        <div className="authBody">{first}</div>
      </div>
    </>
  );
};	

export default Auth;
