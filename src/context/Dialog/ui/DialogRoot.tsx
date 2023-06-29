import Root from '@mui/material/Dialog'
import { ReactNode } from 'react'
import { useDialogContext } from '..'
import { DialogState } from '../utils/types'

interface DialogRootProps {
  state: DialogState
  children: ReactNode
  closeDialog?: () => void
}
const DialogRoot = ({ state, children, closeDialog }: DialogRootProps) => {
  const {
    state: { isOpen },
  } = useDialogContext() || { state: { isOpen: false } }

  return (
    <Root
      open={isOpen}
      fullWidth
      fullScreen={state.fullScreen}
      maxWidth={false}
      scroll={state.scroll}
      onClose={state.backdropClickClose ? closeDialog : undefined}
      PaperProps={{
        sx: {
          width: `${state.width}%`,
          minHeight: {
            xs: '90vh',
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
}

export default DialogRoot
