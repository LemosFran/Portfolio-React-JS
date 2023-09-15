import React from 'react'
import { Link } from 'react-router-dom';


const Card = ({mascota}) => {
  return (
    <div class="col my-2">
    <div class="card shadow-sm">
      <img class="bd-placeholder-img card-img-top" width="100%" height="250" src={mascota.image}/>
      <h3 class="mx-2">{mascota.name}</h3>
      <div class="card-body">
      <h5>{mascota.species}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
          <Link to={`/detail/${mascota.id}`} className="btn btn-sm btn-outline-info">Detalles</Link>
            {/* <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
          </div>
          {/* <small class="text-body-secondary">9 mins</small> */}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card
