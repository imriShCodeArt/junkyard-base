// src/context/Drawer/Context.tsx:

import { createContext } from 'react'
import { DrawerActions, DrawerState } from '.'

const DrawerContext = createContext<(DrawerState & DrawerActions) | null>(null)

export default DrawerContext
