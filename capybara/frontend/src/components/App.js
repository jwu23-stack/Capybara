//import { getDatabase, ref, get } from 'firebase/database';
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import NavBar from '../widget/Navbar.js';
import { Footer } from '../widget/Footer.js';
import { Landing } from './LandingPage.js';
import { CatalogPage } from './CatalogPage.js';
import { CategoryPage } from './CategoryPage.js';
import { SubcategoryPage} from './SubcategoryPage.js';

import './../stylesheets/App.css';

function App(props) {
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
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/catalog" element={<CatalogPage />}></Route>
        <Route path="/category" element={<CategoryPage />}></Route>
        <Route path="/subcategory" element={<SubcategoryPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
