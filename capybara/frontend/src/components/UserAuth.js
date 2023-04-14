import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

export function UserAuthSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSignIn = (event) => {
    event.preventDefault();
    fetch("/signin", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(jsonData => {
        if (jsonData.status === "success") {
          setErrorMsg("")
          sessionStorage.setItem("email", true);
          window.location.href = "/home";
        }
      })
      .catch(error => {
        setErrorMsg("Something went wrong. Try Again")
      });
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
    <div id="auth">
      <nav className="navbar navbar-expand-lg navbar-auth d-flex justify-content-start">
        <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
          <div className="flex-even fw-bold align-self-center"><span id="product-name">Hobbio</span></div>
        </Link>
      </nav>
      <div className="d-flex flex-row align-items-center form-container">
        <div className="d-flex flex-column align-items-start">
          <h1>Welcome back!</h1>
          <p>Sign into your account</p>
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
            <button type="button" className="btn btn-warning login-btn" onClick={handleSignIn}>Login</button>
            <div id="error">{errorMsg}</div>
            <p>Don't have an account?
              <Link to="/register" style={{ color: "#FFA8BA", textDecoration: "inherit", marginLeft: "2px" }}>
                Create an account
              </Link>
            </p>
          </form>
        </div>
        <div className="spacer"></div>
        <div className="d-flex">
          <img id="login-pic" src={require('../img/login.png')} alt="Login" />
        </div>
      </div>
    </div>
  )
}