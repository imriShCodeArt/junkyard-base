// (...)/Drawer/ui/DrawerRoot.tsx:
import Root from '@mui/material/Drawer'
import { IDrawerRootProps } from '../Drawer.types'

const DrawerRoot = ({
  anchor = 'left',
  isOpen = false,
  width = 70,
  closeDrawer = () => ({}),
  children = null,
  ModalProps,
  PaperProps,
  sx,
}: IDrawerRootProps) => {
  return (
    <Root
      data-testid="drawer"
      onClose={closeDrawer}
      open={isOpen}
      anchor={anchor}
      sx={sx || {}}
      PaperProps={{
        sx: { width: `${width}%` },
        ...PaperProps,
        //@ts-expect-error: Does in fact working, also it only serves for testing.
        'data-testid': 'drawer-paper',
      }}
      ModalProps={{
        BackdropProps: {
          //@ts-expect-error: Does in fact working, also it only serves for testing.
          'data-testid': 'backdrop',
        },
        ...ModalProps,
      }}
    >
      {children}
    </Root>
  )
}

export default DrawerRoot
