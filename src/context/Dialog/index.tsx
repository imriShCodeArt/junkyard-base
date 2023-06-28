import { Dispatch, ReactNode, SetStateAction, useContext } from 'react'

import Context from './Context'

export { default } from './Dialog'

export function useDialogContext() {
  return useContext(Context)
}

export interface DialogState {
  open: boolean
  content: ReactNode
  width?: number // This can be used to set the width of the Paper in percent
  fullScreen?: boolean
  scroll?: 'paper' | 'body'
  backdropClickClose?: boolean // This will determine whether the Dialog closes when the backdrop is clicked
}

export interface DialogActions {
  openDialog: (
    content: ReactNode,
    width?: number,
    fullScreen?: boolean,
    scroll?: 'paper' | 'body',
    backdropClickClose?: boolean,
  ) => void
  closeDialog: () => void
  setWidth?: Dispatch<SetStateAction<number>>
  setMaxWidth?: Dispatch<SetStateAction<'xs' | 'sm' | 'md' | 'lg' | 'xl'>>
  setContent?: Dispatch<SetStateAction<ReactNode>>
  setFullScreen?: Dispatch<SetStateAction<boolean>>
  setScroll?: Dispatch<SetStateAction<'paper' | 'body'>>
  setBackdropClickClose?: Dispatch<SetStateAction<boolean>>
}
