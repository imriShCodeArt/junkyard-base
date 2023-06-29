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
  config: Config
  anchor: Anchor
  isOpen: boolean
  width: number
  backdropClickClose: boolean
  content: ReactNode
  closeDrawer?: () => void
  children?: ReactNode
  PaperProps?: Partial<PaperProps> // Define a more specific type if you have one
  ModalProps?: Partial<ModalProps> // Define a more specific type if you have one
  sx?: Partial<SxProps> // Define a more specific type if you have one
}

export type Anchor = 'left' | 'right' | 'top' | 'bottom'

export interface DrawerProps {
  children: ReactNode
  config: Config
}

type Config = {
  defaultAnchor?: Anchor
  defaultWidth?: number
  defaultBackdropClickClose?: boolean
}
