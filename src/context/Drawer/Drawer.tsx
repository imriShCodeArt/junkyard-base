// (...)/Drawer/Drawer.tsx
import { useTheme } from '@mui/system'
import { ReactNode, useState } from 'react'
import CloseDrawerButton from './ui/CloseDrawerButton'
import DrawerRoot from './ui/DrawerRoot'
import DrawerContext from './utils/Context'
import { Anchor, DrawerRootProps } from './utils/types'

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
const Drawer = ({
  children,
  config,
}: {
  children: ReactNode
  config: Partial<DrawerRootProps>
}) => {
  const theme = useTheme()
  const { direction } = theme || {}

  const [anchor, setAnchor] = useState<Anchor>(
    config.anchor || (direction === 'rtl' ? 'left' : 'right'),
  )
  const [content, setContent] = useState<ReactNode>(config.content || <></>)
  const [isOpen, setIsOpen] = useState(config.isOpen || false)
  const [width, setWidth] = useState<number>(config.width || 80)
  const [backdropClickClose, setBackdropClickClose] = useState<boolean>(
    config.backdropClickClose || true,
  )

  const openDrawer = (
    content: ReactNode,
    anchor: 'left' | 'right' | 'top' | 'bottom' = 'right',
    width = 70,
    backdropClickClose = true,
  ) => {
    setContent(content)
    anchor && setAnchor(anchor)
    setWidth(width || 80)
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
        PaperProps={{ ...config.PaperProps }}
        ModalProps={{ ...config.ModalProps }}
        sx={{ ...config.sx }}
        content={<></>}
        backdropClickClose={false}
        config={{
          defaultAnchor: undefined,
          defaultWidth: undefined,
          defaultBackdropClickClose: undefined,
        }}
        width={0}
      >
        <CloseDrawerButton closeDrawer={closeDrawer} />
        {content}
      </DrawerRoot>
    </DrawerContext.Provider>
  )
}

export default Drawer
