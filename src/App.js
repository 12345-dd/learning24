//import logo from './logo.svg';
import './App.css';
// import { Content } from './components/Content';
import { Header } from './components/Header';
import { UseStateDemo } from './components/UseStateDemo';
// import { MapDemo } from './components/MapDemo';
import { Students } from './components/students/Students';


function App() {
  var title = "Welcome to World Of React";
  // var users = {
  //   name: "Ruturaj"
  // }
  return (
    <div className="App">
      <Header title={title}/>
      {/*<Content users={users}/>*/}
      {/*<MapDemo/>*/}
      <Students/>
      {/* <UseStateDemo/> */}
    </div>
  );
}

export default App;
