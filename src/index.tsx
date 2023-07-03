import { ReactNode } from 'react'

import myConfig from './assets/myConfig'

import ConfigProvider from './context/Config/Config'
import { useDialogContext } from './context/Dialog'
import DialogProvider from './context/Dialog/Dialog'
import DrawerProvider, { useDrawerContext } from './context/Drawer'

import { IAppShellProps } from './types'

const AppShell = ({
  children,
  ...config
}: {
  children: (ReactNode & IAppShellProps) | null
}) => {
  const { drawer } = config || myConfig || { drawer: {} }
  return (
    <ConfigProvider>
      <DrawerProvider {...drawer}>
        <DialogProvider>{children}</DialogProvider>
      </DrawerProvider>
    </ConfigProvider>
  )
}

export default AppShell

export { useDialogContext, useDrawerContext }
