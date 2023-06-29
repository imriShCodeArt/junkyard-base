// src/context/Dialog/Context.tsx:

import { createContext } from 'react'
import { DialogActions, DialogState } from './types'

const Context = createContext<{
  state: DialogState
  actions: DialogActions
} | null>(null)

export default Context
