import { useDialogContext } from 'context/Dialog'
import { ReactNode } from 'react'
import DrawerProvider, { useDrawerContext } from './context/Drawer'

export const AppShell = ({ children }: { children: ReactNode }) => {
  return <DrawerProvider>{children}</DrawerProvider>
}

const drawerContext = useDrawerContext
const dialogContext = useDialogContext

export { dialogContext, drawerContext }
