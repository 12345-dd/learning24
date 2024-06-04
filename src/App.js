//import logo from './logo.svg';
import './App.css';
import { Content } from './components/Content';
import { Header } from './components/Header';


function App() {
  var title = "Welcome to World Of React";
  var users = {
    name: "Ruturaj"
  }
  return (
    <div className="App">
      <Header title={title}/>
      <Content users={users}/>
    </div>
  );
}

export default App;
