import React from 'react'
import { Anchor, Image } from './styles'

export const Category = ({ cover, path, emoji }) => {
  return (
    <Anchor href={path}>
      <Image src={cover} />
      {emoji}
    </Anchor>
  )
}
