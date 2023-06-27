import { ReactNode } from 'react'
import DrawerProvider, { useDrawerContext } from './context/Drawer'

export const AppShell = ({ children }: { children: ReactNode }) => {
  return <DrawerProvider>{children}</DrawerProvider>
}

const drawerContext = useDrawerContext

export { drawerContext }
