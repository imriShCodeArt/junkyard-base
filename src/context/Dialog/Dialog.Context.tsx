// src/context/Dialog/Context.tsx:

import { createContext } from 'react'
import { IDialogActions, IDialogState } from './Dialog.types'

const Context = createContext<{
  state: IDialogState
  actions: IDialogActions
} | null>(null)

export default Context
