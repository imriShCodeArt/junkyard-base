// (...)/Drawer/Drawer.types.ts:

import { ModalProps, PaperProps, SxProps } from '@mui/material'
import { Dispatch, ReactNode, SetStateAction } from 'react'

export type DrawerAnchorProp = 'left' | 'right' | 'top'

export interface IDrawerState {
  isOpen: boolean
  content: ReactNode
  anchor?: DrawerAnchorProp
  width?: number
  backdropClickClose?: boolean
}

export interface IDrawerActions {
  openDrawer: (
    content: ReactNode,
    anchor?: DrawerAnchorProp,
    width?: number,
    backdropClickClose?: boolean,
  ) => void
  closeDrawer: () => void
  setWidth?: Dispatch<SetStateAction<number>>
  setContent?: Dispatch<SetStateAction<ReactNode>>
  setAnchor?: Dispatch<SetStateAction<DrawerAnchorProp>>
  setBackdropClickClose?: Dispatch<SetStateAction<boolean>>
}

export type CloseDrawerButtonProps = () => void

export interface IDrawerRootProps {
  anchor?: DrawerAnchorProp
  isOpen?: boolean
  width?: number
  closeDrawer?: () => void
  children?: ReactNode
  PaperProps?: Partial<PaperProps> // Define a more specific type if you have one
  ModalProps?: Partial<ModalProps> // Define a more specific type if you have one
  sx?: Partial<SxProps> // Define a more specific type if you have one
}

export interface IDrawerProps {
  children: ReactNode
}

export interface IDrawerConfig {
  defaultIsOpen?: boolean
  defaultContent?: ReactNode
  defaultAnchor?: DrawerAnchorProp
  defaultWidth?: number
  defaultBackdropClickClose?: boolean
  PaperProps?: Partial<PaperProps> // Define a more specific type if you have one
  ModalProps?: Partial<ModalProps> // Define a more specific type if you have one
  sx?: Partial<SxProps> // Define a more specific type if you have one}
}
