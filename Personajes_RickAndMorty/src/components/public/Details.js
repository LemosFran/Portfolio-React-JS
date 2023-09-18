    import React, { useEffect, useState } from 'react'
    import { useLocation, useParams } from 'react-router-dom';
    import RyMServices from '../../sevices/RyM.services';
    import { Link } from 'react-router-dom';

   export const Details = () => {
    
        const [personaje, setpersonaje] = useState({});
    const {id} = useParams();
    
    const { pathname } = useLocation();

    useEffect(() => {
       
        RyMServices.getCharacterById(id).then((data) => setpersonaje(data))
        .catch((error)=>console.log("error", error));
      }, []);
    

    return (

            <div className="card mb-3 mx-4">
            <div className="row g-0 mt-4 mb-4" >
            <div className="col-md-3">
                <img src={personaje.image} className="img-fluid rounded-start imgDetalle" alt="img-del-personaje"/>
            </div>
            <div className="col-md-8 detallePersonaje">
                <div className="card-body">
                <h5 className="card-title">{personaje.name}</h5>
                <p className="card-text"><small className=""> Specie: {personaje.species}</small></p>
                <p className="card-text"><small className=""> Status: {personaje.status}</small></p>
                <p className="card-text"><small className=""> Gender: {personaje.gender}</small></p>
                <p className="card-text"><small className=""> Created: {personaje.created}</small></p>
                </div>
                <div className="btn-group mx-2">
          <Link to={`/`} className="btn btn-sm btn-outline-danger">Volver</Link>
           
          </div>
            </div>
            </div>
          </div>
        
    )
    }

    
