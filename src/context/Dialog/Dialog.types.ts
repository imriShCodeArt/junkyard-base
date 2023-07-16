import { ModalProps, PaperProps, SxProps } from '@mui/material'
import { Dispatch, ReactNode, SetStateAction } from 'react'

export interface IDialogState {
  isOpen: boolean
  content: ReactNode
  width?: number // This can be used to set the width of the Paper in percent
  fullScreen?: boolean
  scroll?: 'paper' | 'body'
  backdropClickClose?: boolean // This will determine whether the Dialog closes when the backdrop is clicked
}

export interface IDialogActions {
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

export interface IDialogProps {
  children: ReactNode
}
export interface IDialogConfig {
  defaultIsOpen?: boolean
  defaultContent?: ReactNode
  defaultPaperWidth?: number
  defaultBackdropClickClose?: boolean
  PaperProps?: Partial<PaperProps> // Define a more specific type if you have one
  ModalProps?: Partial<ModalProps> // Define a more specific type if you have one
  sx?: Partial<SxProps> // Define a more specific type if you have one}
}
