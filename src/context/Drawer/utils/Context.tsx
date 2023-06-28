// src/context/Drawer/Context.tsx:

import { createContext } from 'react'
import { DrawerActions, DrawerState } from './types'

const DrawerContext = createContext<{
  state: DrawerState
  actions: DrawerActions
} | null>(null)

export default DrawerContext