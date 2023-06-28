// (...)/Drawer/Drawer.tsx
import { ReactNode, useState } from 'react'

import { useTheme } from '@mui/system'
import DrawerContext from './Context'
import { Anchor } from './types'

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

const Drawer = ({ children }: { children: ReactNode }) => {
  const theme = useTheme()
  const { direction } = theme || {}
  const [anchor, setAnchor] = useState<Anchor>(
    direction === 'rtl' ? 'left' : 'right',
  )
  const [content, setContent] = useState<ReactNode>()
  const [isOpen, setIsOpen] = useState(false)
  const [width, setWidth] = useState(80)
  const [backdropClickClose, setBackdropClickClose] = useState(true)

  const openDrawer = (
    content: ReactNode,
    anchor: 'left' | 'right' | 'top' | 'bottom' = 'right',
    width = 70,
    backdropClickClose = true,
  ) => {
    setContent(content)
    anchor && setAnchor(anchor)
    setWidth(width)
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
        width={width}
        closeDrawer={closeDrawer}
      >
        <CloseDrawerButton closeDrawer={closeDrawer} />
        {content}
      </DrawerRoot>
    </DrawerContext.Provider>
  )
}

export default Drawer
