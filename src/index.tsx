import DrawerProvider from '@/context/Drawer'
import React, { ReactNode } from 'react'
import { createRoot } from 'react-dom/client'

export const ContextProviders = ({ children }: { children: ReactNode }) => {
  return <DrawerProvider>{children}</DrawerProvider>
}

const element = document.getElementById('container')

if (!element) {
  throw new Error("Couldn't find root element")
}

const root = createRoot(element)

root.render(
  <React.StrictMode>
    <ContextProviders>
      <>HELLO</>
    </ContextProviders>
  </React.StrictMode>,
)
