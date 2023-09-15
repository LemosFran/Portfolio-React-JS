    import React, { useEffect, useState } from 'react'
    import { useLocation, useParams } from 'react-router-dom';
    import RyMServices from '../../sevices/RyM.services';
    import { Link } from 'react-router-dom';

   export const Details = () => {
    
        const [mascota, setMascota] = useState({});
    const {id} = useParams();
    console.log("el id es: "+id);
    const { pathname } = useLocation();

    useEffect(() => {
       
        RyMServices.getCharacterById(id).then((data) => setMascota(data))
        .catch((error)=>console.log("error", error));
      }, []);
    //   SE PUEDE PRESCINDIR DE "id" PERO NO DE LOS [], SINO ENTRA EN UN BUCLE INFINITO

    return (

            <div className="card mb-3 mx-4">
            <div className="row g-0 mt-4 mb-4" >
            <div className="col-md-3">
                <img src={mascota.image} className="img-fluid rounded-start imgDetalle" alt="img del personaje"/>
            </div>
            <div className="col-md-8 detallePersonaje">
                <div className="card-body">
                <h5 className="card-title">{mascota.name}</h5>
                <p className="card-text"><small className=""> Specie: {mascota.species}</small></p>
                <p className="card-text"><small className=""> Status: {mascota.status}</small></p>
                <p className="card-text"><small className=""> Gender: {mascota.gender}</small></p>
                <p className="card-text"><small className=""> Created: {mascota.created}</small></p>
                </div>
                <div class="btn-group mx-2">
          <Link to={`/`} className="btn btn-sm btn-outline-danger">Volver</Link>
           
          </div>
            </div>
            </div>
          </div>
        
    )
    }

    
