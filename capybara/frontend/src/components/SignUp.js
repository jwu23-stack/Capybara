import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';

export function UserAuthSignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const location = useLocation();

  const logoImg = location.pathname === "/signup";

  const handleSignIn = (event) => {
    event.preventDefault();
    if (password === passwordConfirmation) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          sessionStorage.setItem("email", true);
          sessionStorage.setItem("uid", userCredential.user.uid);
          console.log(userCredential.user.uid);
          const db = getDatabase();
          set(ref(db, "/user/" + userCredential.user.uid), {
            classesTaught: "",
            description: " ",
            isTeacher: "",
            profilePic: "",
            joinYear: new Date().getFullYear()
          }).then(() => {
            window.location.href = "/onboarding";
          });
        })
        .catch((error) => {
          console.log("error:", error.message);
          setErrorMsg(error.message);
        })
    } else {
      setErrorMsg("Passwords don't match.");
    }
  }

  function handleChange(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted email:", email);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmationChange = (event) => {
    setPasswordConfirmation(event.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPassword = () => {
    setShowPassword2(!showPassword2);
  };

  return (
    <div id="signup">
      <nav className="navbar navbar-expand-lg navbar-auth d-flex justify-content-start" style={{ padding: "15px 0" }}>
        <div className="d-flex navbar-logo">
          <Link to="/">
            <img src={logoImg ? require("../img/navbar-white.png") : require("../img/navbar-black.png")} alt="hobbio" className="navbar-logo-img"></img>
          </Link>
        </div>
      </nav>
      <div className="d-flex flex-row align-items-center form-container signup-color">
        <div className="d-flex">
          <img id="signup-pic" src={require('../img/login.png')} alt="Login" />
        </div>
        <div className="spacer"></div>
        <div className="d-flex flex-column align-items-start">
          <h1 className="signup-color">Welcome to Hobbio!</h1>
          <p className="signup-color font-size-20">Create a new account</p>
          <form className="d-flex flex-column form" onSubmit={handleSubmit}>
            <label className="d-flex flex-column signup-form-label">
              Email
              <input required aria-required="true" type="text" className="form-input signup-style" value={email} onChange={handleChange} placeholder="Your Email" />
            </label>
            <label className="d-flex flex-column signup-form-label">
              Password
              <div className="d-flex flex-row align-items-center">
                <input required aria-required="true" type={showPassword ? "text" : "password"} className="form-input signup-style" value={password} onChange={handlePasswordChange} placeholder="Your Password" />
                {showPassword ? (
                  <VisibilityIcon onClick={handleTogglePassword} />
                ) : (
                  <VisibilityOffIcon onClick={handleTogglePassword} />
                )}
              </div>
            </label>
            <label className="d-flex flex-column signup-form-label">
              Confirm Password
              <div className="d-flex flex-row align-items-center">
                <input required aria-required="true" type={showPassword2 ? "text" : "password"} className="form-input signup-style" value={passwordConfirmation} onChange={handlePasswordConfirmationChange} placeholder="Your Password" />
                {showPassword2 ? (
                  <VisibilityIcon onClick={handleConfirmPassword} />
                ) : (
                  <VisibilityOffIcon onClick={handleConfirmPassword} />
                )}
              </div>
            </label>
            <button type="button" className="btn btn-warning signup-btn" onClick={handleSignIn}>Create Account</button>
            <div id="error">{errorMsg}</div>
            <p className="signup-color">Already have an account?
              <Link to="/signin" style={{ color: "#FFA8BA", textDecoration: "inherit", marginLeft: "2px" }}>
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}