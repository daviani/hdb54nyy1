import React, { useEffect, useState } from 'react'
import moment from 'moment'
import axios from 'axios'
import {BOOKING_API} from '../config'
import { toast } from 'react-toastify'

const BookingsPage = () => {
  const [bookingsState, setBookingsState] = useState([])
  const [loading, setloading] = useState(true)

  const loadBookings = () => {
    axios
      .get(BOOKING_API)
      .then((response) => {
        setBookingsState(response.data.bookings)
        setloading(false)
        toast.success('200')
      })
      .catch((error) => {
        toast.error(error + '404')
      })
  }

  useEffect(() => {
    loadBookings()
  }, [])

  const formatDate = str => moment(str).format('DD/MM/YYYY')

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className='display-4'>
          Réservations
        </h2>
      </div>


      <table className="table table-hover text-center">
        <thead className="thead-dark">
        <tr>
          <th scope="col">Création</th>
          <th scope="col">Modification</th>
          <th scope="col"/>
          <th scope="col">Prénom</th>
          <th scope="col">Nom</th>
          <th scope="col">Téléphone</th>
          <th scope="col"/>
          <th scope="col">Nombre</th>
          <th scope="col">Surface</th>
          <th scope="col">Prix</th>
          <th scope="col"/>
          <th scope="col">Rue</th>
          <th scope="col">Code postal</th>
        </tr>
        </thead>
        {!loading && (
          <tbody>

          {bookingsState.map(item => (
            <tr key={item}>
              <td>
                {formatDate(item.createdAt)}
              </td>
              <td>
                {formatDate(item.updatedAt)}
              </td>
              <td/>
              <td>
                {item.client.firstName}
              </td>
              <td>
                {item.client.lastName}
              </td>
              <td>
                {item.client.phone}
              </td>
              <td/>
              <td>
                {item.room.number}
              </td>
              <td>
                {item.room.area}
              </td>
              <td>
                {item.room.price} €
              </td>
              <td/>
              <td>
                {item.room.apartment.street}
              </td>
              <td>
                {item.room.apartment.zipCode}
              </td>
            </tr>

          ))}
          </tbody>
        )}
        {loading && 'loading...'}

      </table>
    </>
  )

}

export default BookingsPage
