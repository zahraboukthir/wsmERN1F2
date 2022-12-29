
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './Components/authForms/SignIn';
import SignUp from './Components/authForms/SignUp';
import DachbordClient from './Components/Dashboards/DachbordClient';
import Home from './Components/Home/Home';
import NavigationBar from './Components/NavBars/NavigationBar';
import PrivateRoute from './Components/PrivateRoute';
import AddProduct from './Components/Product/AddProduct';
import ProductList from './Components/Product/ProductList';
import { getAllProducts } from './js/actions/productActions';
import { getUser } from './js/actions/userActions';

function App() {
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getUser())
    dispatch(getAllProducts())
    
    
  }, [dispatch])
  
  return (
    <div className="App">
      <NavigationBar/>
     <Routes>
     <Route exact path='/signup' element={
        <SignUp/>
      }/>
      <Route exact path='/signin' element={
        <SignIn/>
      }/>
      <Route exact path='/productlist' element={
        <ProductList/>
      }/>
      <Route exact path='/' element={
        <Home/>
      }/>
      <Route exact path='/Add' element={
       <PrivateRoute> <AddProduct/></PrivateRoute>
      }/>
      <Route path='/dashboard' element={
        <PrivateRoute>
          <DachbordClient/>
        </PrivateRoute>
      } />
     </Routes>
    </div>
  );
}

export default App;
