//import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './Navbar';
// import { Content } from './components/Content';
//import { Header } from './components/Header';
//import { UseStateDemo } from './components/UseStateDemo';
// import { MapDemo } from './components/MapDemo';
//import { Students } from './components/students/Students';
import { Home } from './amazon/Home';
import { Products } from './amazon/Products';
import { Electronics } from './amazon/Electronics';
import { Fashion } from './amazon/Fashion';
import { Errorpage } from './amazon/Errorpage';
import { ProductDetails } from './amazon/ProductDetails';


function App() {
  //var title = "Welcome to World Of React";
  // var users = {
  //   name: "Ruturaj"
  // }
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/products/electronics' element={<Electronics/>}></Route>
        <Route path='/products/fashion' element={<Fashion/>}></Route>
        <Route path='/products/details/:id' element={<ProductDetails/>}></Route>
        <Route path='/*' element={<Errorpage/>}></Route>
      </Routes>
      {/* <Header title={title}/> */}
      {/*<Content users={users}/>*/}
      {/*<MapDemo/>*/}
      {/* <Students/> */}
      {/* <UseStateDemo/> */}
    </div>
  );
}

export default App;
