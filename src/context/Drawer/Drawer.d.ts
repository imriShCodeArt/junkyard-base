// Drawer.d.ts
declare module 'path-to-your-drawer-folder/Drawer' {
  import { ReactNode } from 'react'

  // Define the DrawerProps type
  export interface DrawerProps {
    children: ReactNode
  }

  // Define the DrawerState type
  export interface DrawerState {
    anchor: 'left' | 'right' | 'top' | 'bottom'
    content: ReactNode
    isOpen: boolean
    width: number
    backdropClickClose: boolean
  }

  // Define the DrawerActions type
  export interface DrawerActions {
    openDrawer: (
      content: ReactNode,
      anchor?: 'left' | 'right' | 'top' | 'bottom',
      width?: number,
      backdropClickClose?: boolean,
    ) => void
    closeDrawer: () => void
    setContent: React.Dispatch<React.SetStateAction<ReactNode>>
    setWidth: React.Dispatch<React.SetStateAction<number>>
    setAnchor: React.Dispatch<
      React.SetStateAction<'left' | 'right' | 'top' | 'bottom'>
    >
    setBackdropClickClose: React.Dispatch<React.SetStateAction<boolean>>
  }

  const Drawer: React.FC<DrawerProps>

  export default Drawer
}
