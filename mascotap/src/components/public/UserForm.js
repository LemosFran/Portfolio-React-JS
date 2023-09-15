import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useUserForm } from '../../hooks/Customs.hooks'

const UserForm = () => {
 // TRAEMOS EL HOOK CUSTOM
    const {form, setForm, handleChanges} = useUserForm();
    

    //CREAMOS LOS METODOS PARA VERIFICAR LAS CONTRASEÑAS
    const [areEquals, setAreEquals] = useState(true);
    const [passwordConfirmation, setPasswordConfirmation] = useState();

    //CRREAMOS UNA FUNC QUE MANEJE LAS COINCIDENCIAS DE PASSWORDS
    const handlePasswordConfirmation= (e)=>
    {
      setPasswordConfirmation(e.target.value)
    }

    //PONEMOS UN useEffect PARA QUE ESTE A LA ESCUCHA ACTIVA DEL PASSWORD CONFIRMATION
    useEffect(()=>
    {
      // extraemos el password del form con el custom hook
      const {password} = form;
      setAreEquals(password ===  passwordConfirmation); //utilizamo otro custom hook propio 

    }, [passwordConfirmation])

    //ENVIAR LOS DATOS, EN ESTE CASO A UN CONSOLE LOG
    const handleSubmit = (e)=>
    {
      e.preventDefault()
      // userService.save(form); INVESTIGAR COMO ENVIAR LOS DATOS A LA API, GIT DEL PELADO VIGILANTE
      //por si ocurre un error que no recargue la pagina ERROR GRAVE
      console.log(form);
    }

 
  return (

    
    <div class="container-fluid m-5">
    <form class="formulario"  method="POST">
        <div class="form-group row my-3">
            <div class="col-md-6 col-lg-8">
                <h3 class="card-title">Registrate</h3>
            </div>
        </div>
      
        <div class="form-group row my-3">
            <div class="col-md-6 col-lg-8">
                <input type="email" class="form-control" name="email" onChange={handleChanges} placeholder="EMAIL" />
            </div>
        </div>
       
        <div class="form-group row my-3">
            <div class="col-md-6 col-lg-8">
                <input type="password" class="form-control" name="password" onChange={handleChanges} placeholder="CONTRASEÑA" />
            </div>
        </div>
        <div class="form-group row my-3">
            <div class="col-md-6 col-lg-8">
                <input type="password" class="form-control" onChange={handlePasswordConfirmation} placeholder="REPITA LA CONTRASEÑA"/>
            </div>
        </div>

    {/* EL ALERT DE ERROR CON EL CONDICIONAL DE JSX*/}
        { !areEquals &&( <div class="form-text list-group-item-danger w-50">
          Error fatal, las contraseñas no coinciden
        </div>)}

        <div class="form-group row my-3">
            <div class="col-md-6 col-lg-8">
                <button disabled={!areEquals} class="btn btn-primary" onClick={handleSubmit}>Registrarme</button>
            </div>
        </div>
        <div class="form-group row my-3">
            <div class="col-md-6 col-lg-8">
                <Link to="/" class="btn btn-danger">Volver</Link>
            </div>
        </div>
    </form>
</div>
  )
}

export default UserForm
