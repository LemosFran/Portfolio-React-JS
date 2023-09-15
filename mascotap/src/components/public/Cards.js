import React, { useEffect, useState } from 'react'
import Card from './Card'
import RyMServices from '../../sevices/RyM.services';

const Cards = () => { //PARA EL HOOK useEffect SE BORRA EL PARAMETRO ({MASCOTAS})

  //SE CREA UN USESTATE
  const [mascotas, setMascotas] = useState([]); 
  
  //USAMOS EL USEEFFECT
  useEffect(()=>{     //se cambia el setState por setMascotas y se borra del setMascotas {mascotas: }
    RyMServices.getAllCharacters().then((data)=>setMascotas(data.results))
    .catch((error)=>console.log(error));

        
    
  }, [mascotas])

 // console.log("props" + JSON.stringify(props)); //convertimos un props en un string osea llegan todos los personajes/mascotas juntos pasar al cuaderno
 const cardList = mascotas.map((m)=> <Card mascota={m} key={m.id} />);//ATENCION A LA SINTAXIS PARA LLAMAR LOS DATOS

 //  const cardList = mascotas.map((m)=> {console.log(m.id); return<Card mascota={m} key={m.id} />}); PARA VERIFICAR QUE LLEGUE EL ID
 return (
  
     <div class="album py-5 bg-body-tertiary">
          <div class="container">
      
      {/* se van a mostrar las 20 cartas en este caso */}
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
             
                {cardList}
              
            </div>
          </div>
        </div>
  )
}

export default Cards