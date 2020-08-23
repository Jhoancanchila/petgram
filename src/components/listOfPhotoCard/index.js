import React from 'react'
import { PhotoCard } from '../photoCard'

export const ListOfPhotoCard = () => {
  return (
    <ul>
      {
        [1, 2, 3, 4].map(photoCard => <PhotoCard key={photoCard} />)
      }
    </ul>
  )
}
