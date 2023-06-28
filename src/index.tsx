import { useDialogContext } from 'context/Dialog'
import DrawerProvider, { useDrawerContext } from 'context/Drawer'
import { ReactNode } from 'react'

export const AppShell = ({ children }: { children: ReactNode }) => {
  return <DrawerProvider>{children}</DrawerProvider>
}

const drawerContext = useDrawerContext
const dialogContext = useDialogContext

export { dialogContext, drawerContext }
