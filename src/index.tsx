import myConfig from 'assets/myConfig'
import DrawerProvider, { useDrawerContext } from 'context/Drawer'
import { ReactNode } from 'react'
import { ConfigProps } from 'types'
import { useDialogContext } from './context/Dialog'

export const AppShell = ({
  children,
  config,
}: {
  children: ReactNode
  config: ConfigProps | null
}) => {
  const { drawer } = config || myConfig || {}
  if (drawer) {
    return null
  }
  return <DrawerProvider config={drawer}>{children}</DrawerProvider>
}

const drawerContext = useDrawerContext
const dialogContext = useDialogContext

export { dialogContext, drawerContext }
