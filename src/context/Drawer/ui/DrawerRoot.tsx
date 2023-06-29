// (...)/Drawer/ui/DrawerRoot.tsx:
import { ModalProps, PaperProps, SxProps } from '@mui/material'
import Root from '@mui/material/Drawer'
import { DrawerRootProps } from '../utils/types'

const DrawerRoot = ({
  anchor,
  isOpen,
  width,
  closeDrawer,
  children,
  ...rest
}: DrawerRootProps & {
  PaperProps: Partial<PaperProps>
  ModalProps: Partial<ModalProps>
  sx: Partial<SxProps>
}) => {
  return (
    <Root
      {...rest}
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
