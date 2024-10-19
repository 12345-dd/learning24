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
import { Google } from './contextdemo/Google';
import { FormContext } from './components/contextTask/FormContext';
import { PostTwwit } from './components/twitter/PostTwwit';
import { BlogMain } from './components/blog/BlogMain';
import { BookComponent } from './components/BookComponent';
import { BankComponent } from './components/BankComponent';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContent } from './redux/ContentSlice';
import { Index } from './components/flipkart/Index';
import { SubIndex } from './components/flipkart/SubIndex';
import { ButtonComponent } from './components/mui/ButtonComponent';
import { RatingComponent } from './components/mui/RatingComponent';
import { SliderComponent } from './components/mui/SliderComponent';
import { TableComponent } from './components/mui/TableComponent';
import { ApiTable } from './components/mui/ApiTable';
import { Dashboard } from './components/mui/Dashboard';
import { ChartDemo1 } from './charts/ChartDemo1';
import { ChartDemo2 } from './charts/ChartDemo2';
import { NodeComponent } from './components/NodeComponent';
import { UploadFile } from './components/UploadFile';






function App() {
  //var title = "Welcome to World Of React";
  // var users = {
  //   name: "Ruturaj"
  // }
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContent())
  }, [])

  
  

  const themeState = useSelector((state)=>{
    return state.theme.theme
  })
  console.log("themeState",themeState)
  return (
    <div className="App" style={{backgroundColor:themeState === "light"?"white":"black",color:themeState === "light"?"black":"white"}}>
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
        <Route path='/google' element={<Google/>}></Route>
        <Route path='/formtask' element={<FormContext/>}></Route>
        <Route path = "/postTweet" element = {<PostTwwit/>}></Route>
        <Route path='/blogmain' element = {<BlogMain/>}></Route>
        <Route path  ="/books" element = {<BookComponent/>}></Route>
        <Route path='/bank' element={<BankComponent/>}></Route>
        <Route path='/flipkart' element={<Index/>}></Route>
        <Route path='/flipkart/prod' element={<SubIndex/>}></Route>
        <Route path='/mui/button' element={<ButtonComponent/>}></Route>
        <Route path='/mui/task1' element={<RatingComponent/>}></Route>
        <Route path='/mui/task2' element={<SliderComponent/>}></Route>
        <Route path='/mui/table' element={<TableComponent/>}></Route>
        <Route path='/mui/table1' element={<ApiTable/>}></Route>
        <Route path="/mui/dashboard" element={<Dashboard/>}></Route>
        <Route path='/mui/chart1' element={<ChartDemo1/>}></Route>
        <Route path='/mui/chart2' element={<ChartDemo2/>}></Route>
        <Route path='/node' element={<NodeComponent/>}></Route>
        <Route path='/upload' element={<UploadFile/>}></Route>
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
