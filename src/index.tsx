import React from 'react'

import DrawerProvider from '@/context/Drawer'
import { ReactNode } from 'react'

export const ContextProviders = ({ children }: { children: ReactNode }) => {
  return <DrawerProvider>{children}</DrawerProvider>
}
