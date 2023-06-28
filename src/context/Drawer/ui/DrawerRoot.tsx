// src/components/DrawerRoot.tsx
import Root from '@mui/material/Drawer'
import { DrawerRootProps } from '../utils/types'

const DrawerRoot = ({
  anchor,
  isOpen,
  width,
  closeDrawer,
  children,
}: DrawerRootProps) => {
  return (
    <Root
      data-testid="drawer"
      onClose={closeDrawer}
      open={isOpen}
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
