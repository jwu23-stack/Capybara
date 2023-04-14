import { getDatabase, ref, get } from 'firebase/database';
import { Routes, Route, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { CatalogPage } from './CatalogPage.js';
import { CategoryPage } from './CategoryPage.js';
import { SubcategoryPage} from './SubcategoryPage.js';
import NavBar  from '../widget/Navbar.js';
import { Footer } from '../widget/Footer.js';
import { Landing } from './LandingPage.js';
import { UserAuthSignIn } from "./UserAuth.js";
import { Home } from './HomePage.js';
import { Application } from './TeacherApp.js';

import './../stylesheets/App.css';

function App() {
  const location = useLocation();

  const [loginStatus, setLoginStatus] = useState(false);
  const hiddenRoutes = ["/signin", "/register"];

  const isHiddenRoute = hiddenRoutes.includes(location.pathname);

  useEffect(() => {
    let status = (sessionStorage.getItem("email")) ? true : false;
    setLoginStatus(status);
    console.log(sessionStorage);
    console.log("Login status on App", loginStatus);
  }, []);

  // const db = getDatabase();
  // const sportsRef = ref(db, "category/0/name");
  // const [sportsTitle, setTitle] = useState("");
  // get(sportsRef).then((snapshot) => {
  //   if (snapshot.exists()) {
  //     setTitle(snapshot.val());
  //   } else {
  //     console.log("No data available");
  //   }
  // })
  return (
    <div className="App">
      {!isHiddenRoute && <header>
        <NavBar loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
      </header>}
      <Routes>
      <Route path="/" element={<Landing loginStatus={loginStatus} />}></Route>
        <Route path="/catalog" element={<CatalogPage />}></Route>
        <Route path="/category/:categoryID" element={<CategoryPage />}></Route>
        <Route path="/subcategory/:subcategoryID" element={<SubcategoryPage />}></Route>
        <Route path="signin" element={<UserAuthSignIn />} />
        <Route path="home" element={<Home loginStatus={loginStatus}/>}></Route>
        <Route path="/teach" element={<Application />}></Route>
      </Routes>
      {!isHiddenRoute && <Footer />}
    </div>
  );
}

export default App;
