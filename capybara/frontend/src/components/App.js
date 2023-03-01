import { getDatabase, ref, get } from 'firebase/database';
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import { NavBar } from './Navbar.js';
import { Footer } from './Footer.js';

import './../stylesheets/App.css';

function App(props) {
  //const db = getDatabase();
  //const sportsRef = ref(db, "category/0/name");
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

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
