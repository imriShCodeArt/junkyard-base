import { Dispatch, ReactNode, SetStateAction } from 'react'

export interface DialogState {
  isOpen: boolean
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
  setWidth?: (width: number) => void
  setMaxWidth?: Dispatch<SetStateAction<'xs' | 'sm' | 'md' | 'lg' | 'xl'>>
  setContent?: Dispatch<SetStateAction<ReactNode>>
  setFullScreen?: Dispatch<SetStateAction<boolean>>
  setScroll?: Dispatch<SetStateAction<'paper' | 'body'>>
  setBackdropClickClose?: Dispatch<SetStateAction<boolean>>
}
