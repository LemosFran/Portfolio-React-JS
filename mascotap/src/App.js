import './App.css';
import Footer from './components/public/Footer';
import Main from './components/public/Main';
import NavBar from './components/public/NavBar';
import {Routes, BrowserRouter, Route } from "react-router-dom";


//routes del switch
import { Details } from './components/public/Details';

function App() {
  return (
    <div>

<NavBar />


<Routes>
  <Route path="/" element={<Main />} />
  <Route path="/detail/:id" element={<Details />} />  
</Routes>

  


<Footer/>

    </div>
  );
}

export default App;
