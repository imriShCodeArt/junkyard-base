import Root from '@mui/material/Dialog'
import { ReactNode } from 'react'
import { DialogState } from '../types'

interface DialogRootProps {
  state: DialogState
  children: ReactNode
  closeDialog?: () => void
}

const DialogRoot = ({ state, children, closeDialog }: DialogRootProps) => (
  <Root
    open={state.isOpen}
    fullWidth
    fullScreen={state.fullScreen}
    maxWidth={false}
    scroll={state.scroll}
    onClose={state.backdropClickClose ? closeDialog : undefined}
    PaperProps={{
      sx: {
        width: `${state.width}%`,
        minHeight: {
          xs: '100vh',
          md: 'auto',
        },
      },
    }}
    slotProps={{
      backdrop: {
        //@ts-expect-error: Does in fact working, also it only serves for testing.
        'data-testid': 'backdrop',
      },
    }}
  >
    {children}
  </Root>
)

export default DialogRoot
