// src/components/DrawerRoot.tsx
import Root from '@mui/material/Drawer'
import { ReactNode } from 'react'
import { Anchor } from 'types'

interface DrawerRootProps {
  anchor: Anchor
  open: boolean
  width: number
  closeDrawer: () => void
  children: ReactNode
}

const DrawerRoot = ({
  anchor,
  open,
  width,
  closeDrawer,
  children,
}: DrawerRootProps) => {
  return (
    <Root
      data-testid="drawer"
      onClose={closeDrawer}
      open={open}
      anchor={anchor}
      PaperProps={{
        sx: { width: `${width}%` },
        //@ts-expect-error: Does in fact working, also it only serves for testing.
        'data-testid': 'drawer-paper',
      }}
      ModalProps={{
        BackdropProps: {
          //@ts-expect-error: Does in fact working, also it only serves for testing.
          'data-testid': 'backdrop',
        },
      }}
    >
      {children}
    </Root>
  )
}

export default DrawerRoot
