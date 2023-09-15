//import logo from './logo.svg';
import './App.css';
import Footer from './components/public/Footer';
import Main from './components/public/Main';
import NavBar from './components/public/NavBar';
import {Routes, BrowserRouter, Route } from "react-router-dom";


//routes del switch
import { Details } from './components/public/Details';
import UserForm from './components/public/UserForm';

function App() {
  return (
    <div>

<NavBar />


<Routes>
  <Route path="/" element={<Main />} />
  <Route path="/detail/:id" element={<Details />} />  
   <Route path="/user-form" element={<UserForm />} />
</Routes>

  


<Footer/>

    </div>
  );
}

export default App;
