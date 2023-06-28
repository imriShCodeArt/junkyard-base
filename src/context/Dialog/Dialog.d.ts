// Dialog.d.ts
declare module 'path-to-your-dialog-folder/Dialog' {
  import { ReactNode } from 'react'

  // Define the DialogProps type
  export interface DialogProps {
    children: ReactNode
  }

  // Define the DialogState type
  export interface DialogState {
    isOpen: boolean
    content: ReactNode
    width: number
    fullScreen: boolean
    scroll: 'paper' | 'body'
    backdropClickClose: boolean
  }

  // Define the DialogActions type
  export interface DialogActions {
    openDialog: (
      newContent: ReactNode,
      newWidth?: number,
      newFullScreen?: boolean,
      newScroll?: 'paper' | 'body',
      newBackdropClickClose?: boolean,
    ) => void
    closeDialog: () => void
    setContent: React.Dispatch<React.SetStateAction<ReactNode>>
    setWidth: (value: number) => void
    setFullScreen: React.Dispatch<React.SetStateAction<boolean>>
    setScroll: React.Dispatch<React.SetStateAction<'paper' | 'body'>>
    setBackdropClickClose: React.Dispatch<React.SetStateAction<boolean>>
  }

  const Dialog: React.FC<DialogProps>

  export default Dialog
}
