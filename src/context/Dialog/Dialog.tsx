// components/shell/contexts/Dialog/Dialog

import { ReactNode, useState } from 'react'

import Context from './Context'

import Close from '@mui/icons-material/CloseOutlined'
import Root from '@mui/material/Dialog'
import Fab from '@mui/material/Fab'
import { DialogActions, DialogState } from '.'

const Dialog = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false)
  const [content, setContent] = useState<ReactNode>(<></>)
  const [width, setWidth] = useState(80)
  const [fullScreen, setFullScreen] = useState(false)
  const [scroll, setScroll] = useState<'paper' | 'body'>('paper')
  const [backdropClickClose, setBackdropClickClose] = useState(true)

  const openDialog = (
    newContent: ReactNode,
    newWidth?: number,
    newFullScreen?: boolean,
    newScroll?: 'paper' | 'body',
    newBackdropClickClose?: boolean,
  ) => {
    setContent(newContent)
    if (newWidth !== undefined) setWidth(newWidth)
    if (newFullScreen !== undefined) setFullScreen(newFullScreen)
    if (newScroll !== undefined) setScroll(newScroll)
    if (newBackdropClickClose !== undefined)
      setBackdropClickClose(newBackdropClickClose)
    setOpen(true)
  }

  const closeDialog = () => {
    setOpen(false)
    setContent(<></>)
  }

  const state: DialogState = {
    open,
    content,
    width,
    fullScreen,
    scroll,
    backdropClickClose,
  }

  const actions: DialogActions = {
    openDialog,
    closeDialog,
    setContent,
    setWidth,
    setFullScreen,
    setScroll,
    setBackdropClickClose,
  }

  return (
    <Context.Provider value={{ state, actions }}>
      {children}
      <Root
        open={open}
        fullWidth
        fullScreen={fullScreen}
        maxWidth={false}
        scroll={scroll}
        onClose={backdropClickClose ? closeDialog : undefined}
        PaperProps={{
          sx: { width: `${width}%`, minHeight: { xs: '100vh', md: 'auto' } },
        }}
        slotProps={{
          backdrop: {
            //@ts-expect-error: Does in fact working, also it only serves for testing.
            'data-testid': 'backdrop',
          },
        }}
      >
        <Fab
          color="default"
          sx={{
            display: open ? 'block' : 'none',
            position: 'fixed',
            zIndex: 9999,
            top: '2.45em',
            right: '.75em',
            width: '2.5em',
            height: '2.5em',
            bgcolor: (theme) => `${theme.palette.grey[300]}95`,
          }}
          size="small"
          onClick={closeDialog}
        >
          <Close color="success" sx={{ mb: '-.3em' }} />
        </Fab>
        {content}
      </Root>
    </Context.Provider>
  )
}

export default Dialog
