import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { APARTMENT_API } from '../config'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const DetailsApartmentPage = ({ match, history }) => {
  const id = match.params.id
  const [apartmentState, setApartmentState] = useState([])
  const [loading, setloading] = useState(true)

  const loadApartment = () => {
    axios
      .get(APARTMENT_API + (id))
      .then((response) => {
        setApartmentState(response.data.test)
        setloading(false)
        toast.success('200')
      })
      .catch((error) => {
        toast.error(error + '404')
        history.replace('/appartements')
      })
  }

  useEffect(() => {
    loadApartment()
  }, [])

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className='display-4 mb-4'>
          Détails des pièces
        </h2>
        <Link to='/appartements' className='btn btn-primary btnCreate'>
          Retour au apartements
        </Link>
      </div>

      {!loading && (
        <div className='cardSet'>
          {apartmentState.map(item => (
            <div key={item} className='cardApartment m-5'>
              <div className='text-center mt-2'>
                <p className='display-5'>
                  <strong>Détails de la chambre : </strong>
                </p>
                <hr className='mt-3'/>

                <div>
                  <p>Nombre :</p>
                  <p> {item.number}</p>
                </div>

                <div>
                  <p>Surface :</p>
                  <p> {item.area}</p>
                </div>

                <div>
                  <p>Prix :</p>
                  <p> {item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {loading && 'loading...'}
    </>
  )

}

export default DetailsApartmentPage
