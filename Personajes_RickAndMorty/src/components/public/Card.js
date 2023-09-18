import React from 'react'
import { Link } from 'react-router-dom';


const Card = ({personaje}) => {
  return (
    <div className="col my-2">
    <div className="card shadow-sm">
      <img className="bd-placeholder-img card-img-top" width="100%" height="250" src={personaje.image}/>
      <h3 className="mx-2">{personaje.name}</h3>
      <div className="card-body">
      <h5>{personaje.species}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
          <Link to={`/detail/${personaje.id}`} className="btn btn-sm btn-outline-info">Detalles</Link>
          
          </div>
          
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card
