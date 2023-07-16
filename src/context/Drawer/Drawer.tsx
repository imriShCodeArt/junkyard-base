// (...)/Drawer/Drawer.tsx
import { useTheme } from '@mui/system'
import { FC, ReactNode, useState } from 'react'
import { useConfigContext } from '../Config'
import DrawerContext from './Drawer.Context'
import { DrawerAnchorProp, IDrawerProps } from './Drawer.types'
import CloseDrawerButton from './ui/CloseDrawerButton'
import DrawerRoot from './ui/DrawerRoot'

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
const Drawer: FC<IDrawerProps> = ({ children }) => {
  const theme = useTheme()
  // const {
  //   drawer: { ...drawer },
  // } = useConfigContext() || {}
  const {
    defaultAnchor = 'left',
    defaultContent,
    defaultWidth,
    defaultBackdropClickClose,
    PaperProps,
    ModalProps,
    sx,
  } = useConfigContext().drawer || {}
  const { direction } = theme || {}

  const dir = direction === 'rtl' ? 'left' : 'right'

  const [anchor, setAnchor] = useState<DrawerAnchorProp>(dir || defaultAnchor)
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
    anchor: 'left' | 'right' | 'top' = 'right',
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
