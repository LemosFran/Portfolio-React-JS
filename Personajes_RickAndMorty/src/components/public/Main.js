import React, { Component } from 'react'
import Cards from './Cards';
import RyMServices from '../../sevices/RyM.services';
import Details from './Details';


export class Main extends Component { 

    constructor(props)
    {
        super(props)
        this.state = {personajes : []};
        
    }

   

  render() {
   
    return (
        <main>

        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Rick & Morty Album</h1>
              <p className="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
              
            </div>
          </div>
        </section>
      
     {/* BORRAMOS EL {STATE.personajeS} */}
       <Cards /> 
      
      </main>
    )
  }
}

export default Main
