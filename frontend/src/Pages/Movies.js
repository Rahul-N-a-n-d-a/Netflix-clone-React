import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Banner from '../Components/Banner/Banner'
import Posters from '../Components/Posters/Posters'
import { action, originals } from '../urls'

function Movies() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Posters url={originals} title='Netflix Originals'/>
      <Posters url={action} title='Action' isSmall/>
    </div>
  )
}

export default Movies
