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
  setAnchor?: Dispatch<SetStateAction<'left' | 'right' | 'top' | 'bottom'>>
  setBackdropClickClose?: Dispatch<SetStateAction<boolean>>
}

export type CloseDrawerButtonProps = () => void

export interface DrawerRootProps {
  anchor: Anchor
  isOpen: boolean
  width: number
  closeDrawer: () => void
  children: ReactNode
}

export type Anchor = 'left' | 'right' | 'top' | 'bottom'
