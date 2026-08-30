import React from 'react'
import Navbar from '../components/layout/Navbar'
import HomePage from '../pages/HomePage'
import Men from '../pages/Men'
import Footer from '../components/layout/Footer'

const App = () => {
  const path = window.location.pathname

  return (
    <div>
      <Navbar />

      {path === '/men' ? <Men /> : <HomePage />}

      <Footer />
    </div>
  )
}

export default App