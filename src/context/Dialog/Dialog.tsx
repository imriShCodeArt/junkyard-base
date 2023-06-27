// components/shell/contexts/Dialog/Dialog

import { ReactNode, useState } from 'react'

import Context from './Context'

import Close from '@mui/icons-material/CloseOutlined'
import Root from '@mui/material/Dialog'
import Fab from '@mui/material/Fab'

const Dialog = ({ children }: { children: ReactNode }) => {
  const [content, setContent] = useState<ReactNode>(<></>)
  const [open, setOpen] = useState(false)
  const [width, setWidth] = useState<number>(80)
  function openDialog() {
    setOpen(true)
  }
  function closeDialog() {
    setOpen(false)
  }
  return (
    <Context.Provider
      value={{
        openDialog,
        closeDialog,
        setContent,
        getWidth: width,
        setWidth,
        getOpen: open,
      }}
    >
      {children}
      <Root
        onClose={closeDialog}
        open={open}
        PaperProps={{
          sx: { minWidth: `${width}%`, minHeight: { xs: '100vh', md: 'auto' } },
        }}
      >
        <Fab
          color="default"
          sx={(theme) => ({
            display: open ? 'block' : 'none',
            position: 'fixed',
            zIndex: 9999,
            top: '2.45em',
            right: '.75em',
            width: '2.5em',
            height: '2.5em',
            bgcolor: `${theme.palette.grey[300]}95`,
          })}
          size={'small'}
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
