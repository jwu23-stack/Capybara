import { getDatabase, ref, get } from 'firebase/database';
import { Routes, Route, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { CatalogPage } from './CatalogPage.js';
import { CategoryPage } from './CategoryPage.js';
import { SubcategoryPage} from './SubcategoryPage.js';
import { NavBar }  from '../widget/Navbar.js';
import { Footer } from '../widget/Footer.js';
import { Landing } from './LandingPage.js';
import { UserAuthSignIn } from "./UserAuth.js";
import { UserAuthSignUp } from "./SignUp.js";
import { Home } from './HomePage.js';
import { Profile } from './ProfilePage.js';
import { Onboarding } from './ProfileSetUp.js';
import { TeachInfo } from './TeachInfo.js';
import { AboutUs } from './AboutUs.js';
import { Application } from './TeacherApp.js';
import { ClassPage } from './ClassPage.js';
import { ExplorePage } from './HomePage.js';
import { AppSubmitted } from './TeacherApp.js';

import './../stylesheets/App.css';

function App() {
  const location = useLocation();

  const [loginStatus, setLoginStatus] = useState(false);
  const hiddenRoutes = ["/signin", "/signup", "/onboarding"];

  const isHiddenRoute = hiddenRoutes.includes(location.pathname);
  const isLanding = location.pathname === "/" | location.pathname === "/teach" | location.pathname === "/application";
  const landingStyle = isLanding ? "navbar-landing" : "navbar-default";

  useEffect(() => {
    let status = (sessionStorage.getItem("email")) ? true : false;
    setLoginStatus(status);
    console.log(sessionStorage);
    console.log("Login status on App", loginStatus);
  }, []);

  return (
    <div className="App">
      {!isHiddenRoute && <header>
        <NavBar style={landingStyle} loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
      </header>}
      <Routes>
      <Route path="/" element={<Landing loginStatus={loginStatus} />}></Route>
        <Route path="/catalog" element={<CatalogPage />}></Route>
        <Route path="/explore" element={<ExplorePage />}></Route>
        <Route path="/category/:categoryID" element={<CategoryPage />}></Route>
        <Route path="/subcategory/:subcategoryID" element={<SubcategoryPage />}></Route>
        <Route path="/class/:classID" element={<ClassPage />} />
        <Route path="signin" element={<UserAuthSignIn/>} />
        <Route path="signup" element={<UserAuthSignUp/>} />
        <Route path="onboarding" element={<Onboarding />} />
        <Route path="home" element={<Home loginStatus={loginStatus}/>}></Route>
        <Route path="profile/:profileID" element={<Profile />}></Route>
        <Route path="teach" element={<TeachInfo />}></Route>
        <Route path="about" element={<AboutUs/>}></Route>
        <Route path="application" element={<Application loginStatus={loginStatus} />}></Route>
        <Route path="submitted" element={<AppSubmitted />}></Route>
      </Routes>
      {!isHiddenRoute && <Footer />}
    </div>
  );
}

export default App;
