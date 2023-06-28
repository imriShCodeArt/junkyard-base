import { createContext } from 'react'
import { DialogActions, DialogState } from '.'

const Context = createContext<{
  state: DialogState
  actions: DialogActions
} | null>(null)
export default Context
