import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { CLIENT_API } from '../config'
import { toast } from 'react-toastify'
import PaginationComponent from '../components/Forms/PaginationComponent'

const CustomersPage = () => {
  const [customersState, setCustomersState] = useState([])
  const [loadingState, setloadingState] = useState(true)
  const [currentPageState, setCurrentPageState] = useState(1)
  const itemsPerPage = 8

  const loadCustomers = () => {
    axios
      .get(CLIENT_API)
      .then((response) => {
        setCustomersState(response.data.clients)
        setloadingState(false)
        toast.success('200')
      })
      .catch((error) => {
        toast.error(error + '404')
      })
  }

  useEffect(() => {
    loadCustomers()
  }, [])

  // Gestion du changement de page
  const handlePageChange = page => setCurrentPageState( page )


  //pagination des données
  const paginatedCustomers = PaginationComponent.getData(
    customersState,
    currentPageState,
    itemsPerPage
  )

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className='display-4 mb-5'>
          Clients
        </h2>
        <Link to='creation-client' className='btn btn-primary btnCreate'>
          Créer une fiche client
        </Link>
      </div>

      <table className="table table-hover text-center">
        <thead className="thead-dark">
        <tr>
          <th scope="col">Nom de famille</th>
          <th scope="col">Prénom</th>
          <th scope="col">Téléphone</th>
          <th scope="col">Anniversaire</th>
          <th scope="col">Nationalité</th>
          <th scope="col"> Informations</th>
        </tr>
        </thead>
        {!loadingState && (
          <tbody>
          {paginatedCustomers.map(item => (
            <tr key={item.id}>
              <td>
                {item.firstName}
              </td>
              <td>
                {item.lastName}
              </td>
              <td>
                {item.phone}
              </td>
              <td>
                {item.birthDate}
              </td>
              <td>
                {item.nationality}
              </td>
              <td>
                <Link to={'/details-client/' + item.id}>
                  <button className='badge badge-dark'>
                    <strong>
                      +
                    </strong>
                  </button>
                </Link>
              </td>
            </tr>

          ))}
          </tbody>
        )}
        {loadingState && 'loading...'}

      </table>

      <PaginationComponent currentPage={currentPageState}
                           itemsPerPage={itemsPerPage}
                           onPageChanged={handlePageChange}
                           length={customersState.length}/>
    </>
  )

}

export default CustomersPage
