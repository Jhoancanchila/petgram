import React from 'react'
import { Category } from '../category'
import { Item, List } from './styles'
import { categories } from '../../../api/db.json'

export const ListOfCategories = () => {
  return (
    <List>
      {
        categories.map(item => <Item key={item.id}> <Category {...item} /></Item>)
      }
    </List>
  )
}
