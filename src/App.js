import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { ToastContainer, Zoom } from 'react-toastify'

import HeaderComponent from './components/HeaderComponent'

import HomePage from './pages/HomePage'
import ApartmentsPage from './pages/ApartmentsPage'
import DetailsApartmentPage from './pages/DetailsApartmentPage'
import CreateApartmentPage from './pages/CreateApartmentPage'
import CustomersPage from './pages/CustomersPage'
import CreateCustomerPage from './pages/CreateCustomerPage'
import DetailsCustomerPage from './pages/DetailsCustomerPage'
import BookingsPage from './pages/BookingsPage'


import './assets/themes/bootstrap.css'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'

function App () {
  return (
    <>
      <HashRouter>
        <HeaderComponent/>
        <main className='container pt-5'>
          <Switch>
            <Route path='/appartements' component={ApartmentsPage}/>
            <Route path='/details-appartement/:id' component={DetailsApartmentPage}/>
            <Route path='/creation-appartement' component={CreateApartmentPage}/>
            <Route path='/clients' component={CustomersPage}/>
            <Route path='/details-client/:id' component={DetailsCustomerPage}/>
            <Route path='/creation-client' component={CreateCustomerPage}/>
            <Route path='/reservations' component={BookingsPage}/>
            <Route path='/' component={HomePage}/>
          </Switch>
        </main>
      </HashRouter>
      <ToastContainer transition={Zoom}
                      position='bottom-center'
                      autoClose={1500}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnVisibilityChange
                      draggable
                      pauseOnHover/>
    </>
  )
}

export default App
