import { FC } from 'react'

import ConfigProvider from './context/Config/Config'
import { useDialogContext } from './context/Dialog'
import DialogProvider from './context/Dialog/Dialog'
import DrawerProvider, { useDrawerContext } from './context/Drawer'

import LanguageProvider from 'context/Language/Language'
import { IAppShellProps } from './types'

const AppShell: FC<IAppShellProps> = (props) => {
  return (
    <ConfigProvider>
      <LanguageProvider>
        <DrawerProvider>
          <DialogProvider>{props.children}</DialogProvider>
        </DrawerProvider>
      </LanguageProvider>
    </ConfigProvider>
  )
}

export default AppShell

export { useDialogContext, useDrawerContext }
