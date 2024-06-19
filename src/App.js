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
import { FormDemo1 } from './form/FormDemo1';
import { FormTask } from './form/FormTask';
import { FormTask2 } from './form/FormTask2';
import { CounterApp } from './components/CounterApp';
import { FormDemo2 } from './form/FormDemo2';
import { ApiDemo1 } from './components/api/ApiDemo1';
import { ApiDemo2 } from './components/api/ApiDemo2';
import { ApiDemo3 } from './components/api/ApiDemo3';
import { MovieApi } from './components/MovieApi';
import { UpdateUser } from './components/api/UpdateUser';
import { TodoList } from './components/TodoList';



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
        <Route path='/formdemo1' element={<FormDemo1/>}></Route>
        <Route path='/formdemo2' element={<FormDemo2/>}></Route>
        <Route path='/task' element={<CounterApp/>}></Route>
        <Route path='/task1' element={<FormTask/>}></Route>
        <Route path='/task2' element={<FormTask2/>}></Route>
        <Route path='/apidemo1' element={<ApiDemo1/>}></Route>
        <Route path='/apidemo2' element={<ApiDemo2/>}></Route>
        <Route path='/apidemo3' element={<ApiDemo3/>}></Route>
        <Route path='/movies' element={<MovieApi/>}></Route>
        <Route path = "/updateUser/:id" element = {<UpdateUser/>}></Route>
        <Route path='/todo' element={<TodoList/>}></Route>
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
