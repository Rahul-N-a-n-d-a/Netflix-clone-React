import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Banner from '../Components/Banner/Banner'
import Posters from '../Components/Posters/Posters'
import { action, comedy, documentaries, horror, originals } from '../urls'

function Movies() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Posters url={originals} title='Netflix Originals'/>
      <Posters url={action} title='Action' isSmall/>
      <Posters url={comedy} title='Comedy' isSmall/>
      <Posters url={horror} title='Horror' isSmall/>
      <Posters url={documentaries} title='Documentaries' isSmall/>
    </div>
  )
}

export default Movies
