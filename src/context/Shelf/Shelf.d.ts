import { ModalProps, PaperProps, SxProps } from '@mui/material'
import { ReactNode } from 'react'

// Drawer.d.ts
declare module 'path-to-your-drawer-folder/Drawer' {
  export type DrawerAnchorProp = 'left' | 'right' | 'top'

  export interface Config {
    defaultAnchor?: DrawerAnchorProp
    defaultWidth?: number
    defaultBackdropClickClose?: boolean
  }

  export interface DrawerState {
    isOpen: boolean
    content: ReactNode
    anchor?: DrawerAnchorProp
    width?: number
    backdropClickClose?: boolean
  }

  export interface DrawerActions {
    openDrawer: (
      content: ReactNode,
      anchor?: DrawerAnchorProp,
      width?: number,
      backdropClickClose?: boolean,
    ) => void
    closeDrawer: () => void
    setWidth?: React.Dispatch<React.SetStateAction<number>>
    setContent?: React.Dispatch<React.SetStateAction<ReactNode>>
    setAnchor?: React.Dispatch<React.SetStateAction<DrawerAnchorProp>>
    setBackdropClickClose?: React.Dispatch<React.SetStateAction<boolean>>
  }

  export interface DrawerRootProps {
    config?: Config
    anchor: DrawerAnchorProp
    isOpen: boolean
    width: number
    backdropClickClose: boolean
    content: ReactNode
    closeDrawer?: () => void
    children?: ReactNode
    PaperProps?: Partial<PaperProps>
    ModalProps?: Partial<ModalProps>
    sx?: Partial<SxProps>
  }

  export interface DrawerProps {
    children: ReactNode
    config: Partial<DrawerRootProps>
  }

  const Drawer: React.FC<DrawerProps>
  export default Drawer
}
