// components/shell/contexts/Dialog/Dialog

import { ReactNode, useState } from 'react'

import Context from './Context'

import { DialogActions, DialogState } from './types'
import CloseDialogButton from './ui/CloseDialogButton'
import DialogRoot from './ui/DialogRoot'

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
      <DialogRoot state={state} closeDialog={closeDialog}>
        <CloseDialogButton open={state.open} closeDialog={closeDialog} />
        {state.content}
      </DialogRoot>
    </Context.Provider>
  )
}

export default Dialog
