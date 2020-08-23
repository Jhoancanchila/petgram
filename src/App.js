import React from 'react'
import { ListOfCategories } from './components/listOfCategories'
import { ListOfPhotoCard } from './components/listOfPhotoCard'
import { GlobalStyle } from './GlobalStyles'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ListOfCategories />
      <ListOfPhotoCard />
    </>
  )
}

export default App
