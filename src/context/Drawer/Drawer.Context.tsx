// src/context/Drawer/Drawer.Context.tsx:

import { createContext } from 'react'
import { IDrawerActions, IDrawerState } from './Drawer.types'

const DrawerContext = createContext<{
  state: IDrawerState
  actions: IDrawerActions
} | null>(null)

export default DrawerContext
