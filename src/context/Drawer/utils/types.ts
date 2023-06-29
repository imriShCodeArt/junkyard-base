// (...)/Drawer/utils/types.ts:

import { ModalProps, PaperProps, SxProps } from '@mui/material'
import { Dispatch, ReactNode, SetStateAction } from 'react'

export interface DrawerState {
  isOpen: boolean
  content: ReactNode
  anchor?: 'left' | 'right' | 'top' | 'bottom'
  width?: number
  backdropClickClose?: boolean
}

export interface DrawerActions {
  openDrawer: (
    content: ReactNode,
    anchor?: 'left' | 'right' | 'top' | 'bottom',
    width?: number,
    backdropClickClose?: boolean,
  ) => void
  closeDrawer: () => void
  setWidth?: Dispatch<SetStateAction<number>>
  setContent?: Dispatch<SetStateAction<ReactNode>>
  setAnchor?: Dispatch<SetStateAction<Anchor>>
  setBackdropClickClose?: Dispatch<SetStateAction<boolean>>
}

export type CloseDrawerButtonProps = () => void

export interface DrawerRootProps {
  anchor?: Anchor
  isOpen?: boolean
  width?: number
  closeDrawer?: () => void
  children?: ReactNode
  PaperProps?: Partial<PaperProps> // Define a more specific type if you have one
  ModalProps?: Partial<ModalProps> // Define a more specific type if you have one
  sx?: Partial<SxProps> // Define a more specific type if you have one
}

export type Anchor = 'left' | 'right' | 'top' | 'bottom'

export type DrawerProps = Partial<{
  children: ReactNode
  isOpen: boolean
  content: ReactNode
  anchor?: 'left' | 'right' | 'top' | 'bottom'
  width?: number
  backdropClickClose?: boolean
  PaperProps?: Partial<PaperProps> // Define a more specific type if you have one
  ModalProps?: Partial<ModalProps> // Define a more specific type if you have one
  sx?: Partial<SxProps> // Define a more specific type if you have one}
}>
