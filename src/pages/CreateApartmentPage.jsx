import React, { useState } from 'react'
import FieldForm from './../components/Forms/FieldFormComponent'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { APARTMENT_API } from '../config'

const ApartmentsPage = () => {
  const [apartmentState, setApartmentState] = useState({
    number: '',
    name: '',
    rooms: [{
      number: '',
      area: '',
      price: ''
    }]
  })

  // Gestion des changements des inputs dans le formulaire
  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget
    setApartmentState({ ...apartmentState, [name]: value })
  }

  // Gestion de la soumission du formulaire
  const handleSubmit = async event => {
    event.preventDefault()
    try {
      await
        axios
          .post(APARTMENT_API, apartmentState)
          .then((response) => {
            toast.success('200 :)')
          })
    }
    catch (error) {
      toast.error('Des erreurs dans votre formulaire !')
    }
  }
  return (
    <>
      <div className="container jumbotron">
        <h3 className='display-4 mb-4 text-center'>
          Ajout d'un appartement
        </h3>
        <form className="mt-4 text-center" onSubmit={handleSubmit}>
          <FieldForm name="number"
                     label="Saisir le nombre"
                     type="integer"
                     value={apartmentState.number}
                     onChange={handleChange}/>
          <FieldForm name="name"
                     label="Saisir le nom"
                     type="string"
                     value={apartmentState.name}
                     onChange={handleChange}/>
          <div className='primary'>
            <hr/>
            <p> Chambre :</p>
          </div>
          <FieldForm name="Nombre de chambre"
                     label="Saisir le nombre de chambre*"
                     type="string"
                     value={apartmentState.rooms.number}
                     onChange={handleChange}
                     required={true}/>
          <FieldForm name="area"
                     label="Saisir la surface*"
                     type="integer"
                     value={apartmentState.rooms.area}
                     onChange={handleChange}
                     required={true}/>
          <FieldForm name="price"
                     label="Saisir le prix*"
                     type="integer"
                     value={apartmentState.rooms.price}
                     onChange={handleChange}
                     required={true}/>

          <div className="form-group d-flex justify-content-between align-items-center">
            <button type="submit" className="btn btn-primary mt-3">
              Enregistrer
            </button>
            <Link to="/appartements" className="btn btn-link mt-3">
              Retour aux appartements
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default ApartmentsPage
