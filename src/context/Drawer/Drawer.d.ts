declare module 'junkyard-base/lib/Drawer' {
  import { ReactNode } from 'react'

  export interface DrawerProps {
    children: ReactNode
  }

  const Drawer: React.FC<DrawerProps>

  export default Drawer
}
