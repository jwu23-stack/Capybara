import logo from './logo.svg';
import './App.css';
import {getDatabase, ref, get} from 'firebase/database';
import React, {useState} from 'react';

function App(props) {
  const db = getDatabase();
  const sportsRef = ref(db, "category/0/name");
  const [sportsTitle, setTitle] = useState("");
  get(sportsRef).then((snapshot) => {
    if (snapshot.exists()) {
      setTitle(snapshot.val());
    } else {
      console.log("No data available");
    }
  })
  return (
    <div className="App">
      <h1>{sportsTitle}</h1>
    </div>
  );
}

export default App;
