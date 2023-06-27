declare module 'junkyard-base/lib' {
  import { ReactNode } from 'react'

  export interface AppShellProps {
    children: ReactNode
  }

  export const AppShell: React.FC<AppShellProps>
}
