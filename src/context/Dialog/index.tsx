import { Dispatch, ReactNode, SetStateAction, useContext } from 'react'

import Context from './Context'

export { default } from './Dialog'

export function useDialogContext() {
  return useContext(Context)
}

export interface DialogContextType {
  openDialog: () => void
  closeDialog: () => void
  setContent: Dispatch<SetStateAction<ReactNode>>
  getWidth: number
  setWidth: Dispatch<SetStateAction<number>>
  getOpen: boolean
}
