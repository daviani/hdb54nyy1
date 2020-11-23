import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { APARTMENT_API } from '../config'
import { toast } from 'react-toastify'
import backgroundImage from '../assets/img/img1.jpeg'

const ApartmentsPage = () => {
  const [apartmentsState, setApartmentsState] = useState([])
  const [loadingState, setloadingState] = useState(true)

  const loadApartments = () => {
    axios
      .get(APARTMENT_API)
      .then((response) => {
        setApartmentsState(response.data.apartments)
        setloadingState(false)
        toast.success('200')
      })
      .catch((error) => {
        toast.error(error + '404')
      })
  }

  useEffect(() => {
    loadApartments()
  }, [])

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className='display-4 mb-4'>
          Appartements
        </h2>
        <Link to='creation-appartement' className='btn btn-primary btnCreate'>
          Ajouter un appartement
        </Link>
      </div>
      {!loadingState && (
        <div className='cardSet'>
          {apartmentsState.map(item => (
            <div key={item.id}
                 className="cardApartment m-5">
              <img className='sizeImgCard' src={backgroundImage} alt="appartement"/>
              <Link to={'/details-appartement/' + item.id}>
                <div className='card-body'>
                  <div className='d-flex'>
                    <p className='mr-2'>
                      {item.number}
                    </p>
                    -
                    <p className='ml-2'>
                      {item.name}
                    </p>
                  </div>
                  <p className='availabe'>
                    Dispo
                  </p>
                  <p className='prix'>
                    <span className='ml-2'>
                      par moi
                    </span>
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
      {loadingState && 'loading...'}
    </>
  )

}

export default ApartmentsPage
