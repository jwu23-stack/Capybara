import logo from './logo.svg';
import './App.css';
import {getDatabase, ref, get} from 'firebase/database';

const db = getDatabase();
const sportsRef = ref(db, "category/0/name")
var sportsTitle;
get(sportsRef).then((snapshot) => {
  if (snapshot.exists()) {
    sportsTitle = snapshot.val();
  } else {
    console.log("No data available");
  }
})
function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
