import React from 'react'


const NavBar = () => {
  return (
    <header className="bg-dark p-3">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
      <img src="rymVerde3.png" height="92"/>
      

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
           
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-white">Features</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-white">Pricing</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-white">FAQs</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-white">About</a>
            </li>
          </ul>

          {/* <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
          </form> */}

        
           <div className="text-end">
        
            <button type="button" className="btn btn-outline-light mx-2">Registrarme</button>
            <button type="button" className="btn btn-warning">Ingresar</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar
