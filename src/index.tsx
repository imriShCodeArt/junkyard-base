import { FC } from 'react'

import ConfigProvider from './context/Config/Config'
import { useDialogContext } from './context/Dialog'
import DialogProvider from './context/Dialog/Dialog'
import DrawerProvider, { useDrawerContext } from './context/Drawer'

import { IAppShellProps } from './types'

const AppShell: FC<IAppShellProps> = (props) => {
  return (
    <ConfigProvider>
      <DrawerProvider>
        <DialogProvider>{props.children}</DialogProvider>
      </DrawerProvider>
    </ConfigProvider>
  )
}

export default AppShell

export { useDialogContext, useDrawerContext }
