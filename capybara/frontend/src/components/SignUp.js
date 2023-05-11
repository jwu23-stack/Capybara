import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

export function UserAuthSignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSignIn = (event) => {
    event.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        sessionStorage.setItem("email", true);
        window.location.href = "/home";
    })
      .catch((error) => {
        setErrorMsg(error.message);
    })
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

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signup">
      <div className="d-flex flex-row align-items signup-container">
          <div className="d-flex">
            <img id="signup-pic" src={require('../img/login.png')} alt="Login" />
          </div>
        <div className="d-flex flex-column align-items-start signup-info">
          <h1 className="signup-style">Welcome to Hobbio!</h1>
          <p className="signup-style">Create a new account</p>
          <form className="d-flex flex-column form" onSubmit={handleSubmit}>
            <label className="d-flex flex-column form-label">
              Email
              <input required aria-required="true" type="text" className="form-input" value={email} onChange={handleChange} placeholder="Your Email" />
            </label>
            <label className="d-flex flex-column form-label">
              Password
              <div className="d-flex flex-row align-items-center">
                <input required aria-required="true" type={showPassword ? "text" : "password"} className="form-input" value={password} onChange={handlePasswordChange} placeholder="Your Password" />
                {showPassword ? (
                  <VisibilityIcon onClick={handleTogglePassword} />
                ) : (
                  <VisibilityOffIcon onClick={handleTogglePassword} />
                )}
              </div>
            </label>
            <label className="d-flex flex-column form-label">
              Confirm Password
              <div className="d-flex flex-row align-items-center">
                <input required aria-required="true" type={showPassword ? "text" : "password"} className="form-input" value={password} onChange={handlePasswordChange} placeholder="Your Password" />
                {showPassword ? (
                  <VisibilityIcon onClick={handleTogglePassword} />
                ) : (
                  <VisibilityOffIcon onClick={handleTogglePassword} />
                )}
              </div>
            </label>
            <button type="button" className="btn btn-warning signup-btn" onClick={handleSignIn}>Create Account</button>
            <div id="error">{errorMsg}</div>
            <p>Already have an account?
              <Link to="/register" style={{ color: "#FFA8BA", textDecoration: "inherit", marginLeft: "2px" }}>
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}