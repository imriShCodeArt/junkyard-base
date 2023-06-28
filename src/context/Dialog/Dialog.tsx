import { ReactNode, useState } from 'react'
import Context from './Context'
import { DialogActions, DialogState } from './types'
import CloseDialogButton from './ui/CloseDialogButton'
import DialogRoot from './ui/DialogRoot'

const Dialog = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState<ReactNode>(<></>)
  const [width, setWidth] = useState(80)
  const [fullScreen, setFullScreen] = useState(false)
  const [scroll, setScroll] = useState<'paper' | 'body'>('paper')
  const [backdropClickClose, setBackdropClickClose] = useState(true)

  const validatedSetWidth = (value: number) => {
    if (value >= 0 && value <= 100) {
      setWidth(value)
    } else {
      throw new Error('Width must be between 0 and 100')
    }
  }

  const openDialog = (
    newContent: ReactNode,
    newWidth?: number,
    newFullScreen?: boolean,
    newScroll?: 'paper' | 'body',
    newBackdropClickClose?: boolean,
  ) => {
    setContent(newContent)
    if (newWidth !== undefined) validatedSetWidth(newWidth)
    if (newFullScreen !== undefined) setFullScreen(newFullScreen)
    if (newScroll !== undefined) setScroll(newScroll)
    if (newBackdropClickClose !== undefined)
      setBackdropClickClose(newBackdropClickClose)
    setIsOpen(true)
  }

  const closeDialog = () => {
    setIsOpen(false)
    setContent(<></>)
  }

  const state: DialogState = {
    isOpen,
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
    setWidth: validatedSetWidth,
    setFullScreen,
    setScroll,
    setBackdropClickClose,
  }

  return (
    <Context.Provider value={{ state, actions }}>
      {children}
      <DialogRoot state={state} closeDialog={closeDialog}>
        <CloseDialogButton isOpen={isOpen} closeDialog={closeDialog} />
        {state.content}
      </DialogRoot>
    </Context.Provider>
  )
}

export default Dialog
