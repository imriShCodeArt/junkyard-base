import { DefaultTheme } from '@mui/styles/DefaultTheme'
import { IDialogConfig } from 'context/Dialog'
import { IDrawerConfig } from 'context/Drawer'
import { ReactNode } from 'react'

export interface IAppShellProps {
  children: ReactNode
  theme?: DefaultTheme // For MUI ThemeProvider
  drawer?: IDrawerConfig // For DrawerProvider
  dialog?: IDialogConfig // For DialogProvider
  dropMenu?: boolean // For DropMenuProvider
  auth0?: AuthProviderProps // For AuthProvider, this would include necessary props such as domain, clientId etc.
  notifications?: boolean // For NotificationsProvider, includes necessary props
  messages?: boolean // For MessagesProvider, includes necessary props
  locale?: string // For LanguageProvider
}

export interface AuthProviderProps {
  DOMAIN: string
  CLIENT_ID: string
  CLIENT_SECRET: string
  BASE_URL: string
  ISSUER_BASE_URL: string
  SECRET: string
  AUDIENCE: string
}
