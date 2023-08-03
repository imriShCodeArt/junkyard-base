// src/context/Shelf/Shelf.Context.tsx:

import { createContext } from 'react'
import { IShelfActions, IShelfState } from './Shelf.types'

const ShelfContext = createContext<{
  state: IShelfState
  actions: IShelfActions
} | null>(null)

export default ShelfContext
