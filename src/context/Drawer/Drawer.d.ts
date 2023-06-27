declare module 'junkyard-base/lib/Drawer' {
  import { ReactNode } from 'react'

  export type Anchor = 'left' | 'right' | 'top' | 'bottom'

  export interface DrawerProps {
    children: ReactNode
  }

  const Drawer: React.FC<DrawerProps>

  export default Drawer
}
