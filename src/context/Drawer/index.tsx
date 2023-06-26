// src/context/Drawer/index.tsx:

import { Dispatch, ReactNode, SetStateAction, useContext } from 'react'

import Context from './Context'

export { default } from './Drawer'

export function useDrawerContext() {
  return useContext(Context)
}

export interface DrawerState {
  open: boolean
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
