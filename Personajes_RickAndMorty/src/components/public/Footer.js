import React, { useState } from 'react'

const Footer = () => {

  //UseState Eventos
const[clicks, setClicks] = useState(0);

//Function para el click
  const handleClick = ()=>{
    console.log("hiciste un click");
    setClicks(clicks +1);
  }

  //Datos para inyectar info
  const yearNow = new Date().getFullYear();

  return (
    <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-body-secondary">&copy; {yearNow} Company, Inc </p>
    {/*Clicks: {clicks}  el contador de clicks*/}

  <span onClick={handleClick} >

   <img src="morty2.png" 
   height= "72"
   className = "logo-batman"
   alt = "logo-morty"
   />

  </span>


    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
    </ul>
  </footer>
</div>
  )
}

export default Footer;

