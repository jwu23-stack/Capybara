import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';

export function UserAuthSignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  
  const handleSignIn = (event) => {
    event.preventDefault();
    if (password === passwordConfirmation) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          sessionStorage.setItem("email", true);
          console.log(userCredential.user.uid);
          const db = getDatabase();
          set(ref(db, "/user/" + userCredential.user.uid), {
            classesTaught: "",
            description: "",
            hobbies: "",
            isteacher: "",
            location: "",
            name: "",
            profilepic: ""
          }).then(() => {
            window.location.href = "/home";
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
                <input required aria-required="true" type={showPassword ? "text" : "password"} className="form-input" value={passwordConfirmation} onChange={handlePasswordConfirmationChange} placeholder="Your Password" />
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