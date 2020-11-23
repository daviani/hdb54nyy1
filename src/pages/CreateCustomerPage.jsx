import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { CLIENT_API } from '../config'
import { toast } from 'react-toastify'
import FieldForm from '../components/Forms/FieldFormComponent'

const CreateCustomerPage = () => {
  const [customerState, setCustomerState] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    birthDate: '',
    nationality: '',
    bookings: [{
      createdAt: '',
      updatedAt: '',
      room: [{
        number: '',
        area: '',
        price: ''
      }]
    }]
  })

  // Gestion des changements des inputs dans le formulaire
  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget
    setCustomerState({ ...customerState, [name]: value })
  }

  // Gestion de la soumission du formulaire
  const handleSubmit = async event => {
    event.preventDefault()
    try {
      await
        axios
          .post(CLIENT_API, customerState)
          .then((response) => {
            toast.success('200 :)')
          })
    } catch (error) {
      toast.error('Des erreurs dans votre formulaire !')
    }
  }

  return (
    <>
      <h3 className='display-4 mb-2 text-center'>
        Ajout d'un client
      </h3>
      <form className="mt-4 text-center" onSubmit={handleSubmit}>
        <FieldForm name="firstName"
                   label="Saisir prénom"
                   type="string"
                   value={customerState.firstName}
                   onChange={handleChange}/>
        <FieldForm name="lastName"
                   label="Saisir le nom de famille"
                   type="string"
                   value={customerState.lastName}
                   onChange={handleChange}/>
        <FieldForm name="phone"
                   label="Saisir le numéro de téléphone"
                   type="string"
                   value={customerState.phone}
                   onChange={handleChange}/>
        <FieldForm name="birthDate"
                   label="Saisir la date de naissance"
                   type="date"
                   value={customerState.birthDate}
                   onChange={handleChange}/>
        <FieldForm name="nationality"
                   label="Saisir nationalité"
                   type="string"
                   value={customerState.nationality}
                   onChange={handleChange}/>
        <div className='primary'>
          <hr/>
          <p> Réservation :</p>
        </div>
        <FieldForm name="createdAt"
                   label="Saisir date de création*"
                   type="date"
                   value={customerState.bookings.createdAt}
                   onChange={handleChange}
                   required={true}/>
        <FieldForm name="updatedAt"
                   label="Saisir la date de modification"
                   type="date"
                   value={customerState.bookings.updatedAt}
                   onChange={handleChange}/>

        <div className="form-group d-flex justify-content-between align-items-center">
          <button type="submit" className="btn btn-primary mt-3">
            Enregistrer
          </button>
          <Link to="/clients" className="btn btn-link mt-3">
            Retour aux clients
          </Link>
        </div>
      </form>
    </>
  )
}

export default CreateCustomerPage
