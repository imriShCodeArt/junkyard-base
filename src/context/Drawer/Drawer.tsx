// (...)/Drawer/Drawer.tsx
import { useTheme } from '@mui/system'
import { useConfigContext } from 'context/Config'
import { ReactNode, useState } from 'react'
import CloseDrawerButton from './ui/CloseDrawerButton'
import DrawerRoot from './ui/DrawerRoot'
import DrawerContext from './utils/Context'
import { Anchor } from './utils/types'

export type DrawerProps = Partial<{
  children: ReactNode
}>

/**
 * This is a customizable Drawer component.
 *
 * openDrawer function can be used to open the drawer. It takes in the following parameters:
 * - content: the ReactNode to be displayed in the drawer
 * - anchor: the anchor position of the drawer ('left' | 'right' | 'top' | 'bottom'). Defaults to 'right'.
 * - width: width of the drawer as a percentage of the viewport width. Defaults to 80.
 * - backdropClickClose: if true, clicking on the backdrop will close the drawer. Defaults to true.
 *
 * closeDrawer function can be used to close the drawer.
 */
const Drawer = ({ children }: DrawerProps) => {
  const theme = useTheme()
  const {
    drawer: { ...config },
  } = useConfigContext() || {}
  const {
    defaultAnchor = 'left',
    defaultContent,
    defaultWidth,
    defaultBackdropClickClose,
    PaperProps,
    ModalProps,
    sx,
  } = config || {}
  const { direction } = theme || {}

  const [anchor, setAnchor] = useState<Anchor>(
    defaultAnchor || (direction === 'rtl' ? 'left' : 'right'),
  )
  const [content, setContent] = useState<ReactNode>(
    defaultContent || <>CONTENT</>,
  )
  const [isOpen, setIsOpen] = useState(true)
  const [width, setWidth] = useState<number>(defaultWidth || 70)
  const [backdropClickClose, setBackdropClickClose] = useState<boolean>(
    defaultBackdropClickClose || true,
  )

  const openDrawer = (
    content: ReactNode,
    anchor: 'left' | 'right' | 'top' | 'bottom' = 'right',
    width = 70,
    backdropClickClose = true,
  ) => {
    setContent(content)
    anchor && setAnchor(anchor)
    setWidth(width || 70)
    backdropClickClose && setBackdropClickClose(backdropClickClose)
    setIsOpen(true)
  }

  const closeDrawer = () => setIsOpen(false)

  const drawerValue = {
    state: {
      anchor,
      content,
      isOpen,
      width,
      backdropClickClose,
    },
    actions: {
      openDrawer,
      closeDrawer,
      setWidth,
      setContent,
      setAnchor,
      setBackdropClickClose,
    },
  }

  const { state, actions } = drawerValue

  return (
    <DrawerContext.Provider value={{ actions, state }}>
      {children}
      <DrawerRoot
        anchor={anchor}
        isOpen={isOpen}
        closeDrawer={closeDrawer}
        PaperProps={{ ...PaperProps }}
        ModalProps={{ ...ModalProps }}
        sx={{ ...sx }}
        width={width}
      >
        <CloseDrawerButton closeDrawer={closeDrawer} />
        {content}
      </DrawerRoot>
    </DrawerContext.Provider>
  )
}

export default Drawer
