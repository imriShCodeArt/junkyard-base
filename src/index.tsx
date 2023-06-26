import React from 'react'
import { createRoot } from 'react-dom/client'
// In ContextProviders.tsx
import DrawerProvider from '@/context/Drawer'
import { ReactNode } from 'react'
// import { ThemeProvider } from './ThemeContext';
// import { UserProvider } from './UserContext';
// import { LocaleProvider } from './LocaleContext';
// import other providers...

export const ContextProviders = ({ children }: { children: ReactNode }) => {
  return <DrawerProvider>{children}</DrawerProvider>
}

const element = document.getElementById('root')

const root = createRoot(document.getElementById('container'))
root.render(
  <React.StrictMode>
    <ContextProviders>
      <>HELLO</>
    </ContextProviders>
  </React.StrictMode>,
)
