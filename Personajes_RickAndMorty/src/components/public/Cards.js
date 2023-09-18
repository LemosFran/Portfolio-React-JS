import React, { useEffect, useState } from 'react'
import Card from './Card'
import RyMServices from '../../sevices/RyM.services';

const Cards = () => { 

  //SE CREA UN USESTATE
  const [personajes, setpersonajes] = useState([]); 
  
  //USAMOS EL USEEFFECT
  useEffect(()=>{     //se cambia el setState por setpersonajes y se borra del setpersonajes {personajes: }
    RyMServices.getAllCharacters().then((data)=>setpersonajes(data.results))
    .catch((error)=>console.log(error));

        
    
  }, [personajes])

 const cardList = personajes.map((m)=> <Card personaje={m} key={m.id} />);

 return (
  
     <div className="album py-5 bg-body-tertiary">
          <div className="container">
      
      {/* se van a mostrar las 20 cartas en este caso */}
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
             
                {cardList}
              
            </div>
          </div>
        </div>
  )
}

export default Cards
