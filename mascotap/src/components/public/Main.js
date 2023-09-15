import React, { Component } from 'react'
import Cards from './Cards';
import RyMServices from '../../sevices/RyM.services';
import Details from './Details';


export class Main extends Component { //con extend toma prestaada una func de react

    constructor(props)
    {
        super(props)
        this.state = {mascotas : []};
        
    }

    // componentDidMount()//funcion asincrona //PARA USAR EL HOOK useEffect SE ELIMINA ESTE METODO
    // {
    //   //pasar al cuaderno, se me termino la pila. lo ultimo de cards tambien y despues se va a cartas
    //     RyMServices.getAllCharacters().then((data)=>this.setState({mascotas: data.results}))
    //     .catch((error)=>console.log(error));
    // }

  render() {
   
    return (
        <main>

        <section class="py-5 text-center container">
          <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
              <h1 class="fw-light">Rick & Morty Album</h1>
              <p class="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
              <p>
                <a href="#" class="btn btn-primary mx-2">Main call to action</a>
                <a href="#" class="btn btn-secondary my-2">Secondary action</a>
              </p>
            </div>
          </div>
        </section>
      
     {/* BORRAMOS EL {STATE.MASCOTAS} */}
       <Cards /> 
      
      </main>
    )
  }
}

export default Main
