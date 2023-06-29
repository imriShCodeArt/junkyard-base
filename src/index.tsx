import { ReactNode } from 'react'
import myConfig from './assets/myConfig'
import { useDialogContext } from './context/Dialog'
import DialogProvider from './context/Dialog/Dialog'
import DrawerProvider, { useDrawerContext } from './context/Drawer'
import { ConfigProps } from './types'

export const AppShell = ({
  children,
  config,
}: {
  children: ReactNode
  config: ConfigProps | null
}) => {
  const { drawer } = config || myConfig || {}
  return (
    <DrawerProvider {...drawer}>
      <DialogProvider>{children}</DialogProvider>
    </DrawerProvider>
  )
}

const drawerContext = useDrawerContext
const dialogContext = useDialogContext

// export { drawerContext }
export { dialogContext, drawerContext }
