import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {CLIENT_API} from '../config'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const DetailsCustomerPage = ({ match, history }) => {
  const id = match.params.id
  const [custmerState, setCustomerState] = useState([])
  const [loading, setloading] = useState(true)

  const loadCustomer = () => {
    axios
      .get(CLIENT_API + (id))
      .then((response) => {
        setCustomerState(response.data.client)
  console.log(custmerState)
        setloading(false)
        toast.success('200')
      })
      .catch((error) => {
        toast.error(error + '404')
        history.replace('/clients')
      })
  }

  useEffect(() => {
    loadCustomer()
  }, [])

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className='display-4 mb-4'>
          Détails du client
        </h2>
        <Link to='/clients' className='btn btn-primary btnCreate'>
          Retour clients
        </Link>
      </div>

      {!loading && (
          <div className="customerMain text-center">
            <h4> Informations Général :</h4>
            <hr/>
            <p>Prénom :</p>
            <p> {custmerState.firstName}</p>

            <p>Nom de famille :</p>
            <p> {custmerState.lastName}</p>

            <p>Téléphone :</p>
            <p> {custmerState.phone}</p>

            <p>Date de naissance :</p>
            <p> {custmerState.birthDate}</p>

            <p>Nationalité :</p>
            <p> {custmerState.nationality}</p>
        </div>
      )}
      {loading && 'loading...'}
    </>
  )

}

export default DetailsCustomerPage
