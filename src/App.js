//import logo from './logo.svg';
import './App.css';

function App() {
  var age = 18;
  var name = "Mayur";
  var isMarried = true;
  var user = {
    name : "Raj",
    city : "Surat"
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1> Welcome to the World of React...</h1>
      <p> Note-1 : Every tag must have closing tag.</p>
      <p> Note-2 : whatever we write in return, it will only show on Browser.</p>
      <p> Note-3 : At a time we return only one tag.</p>
      <p> Age = {age}</p>
      <p> Name = {name}</p>
      <p>Is Married = {isMarried ? "married" : "un-married"}</p>
      <p>User Name = {user.name}</p>
      <p>User City = {user.city}</p>
    </div>
  );
}

export default App;
