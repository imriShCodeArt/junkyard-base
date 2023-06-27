// src/context/Drawer/Drawer.tsx

import Close from '@mui/icons-material/CloseOutlined'
import Root from '@mui/material/Drawer'
import Fab from '@mui/material/Fab'
import { useTheme } from '@mui/system'
import { ReactNode, useState } from 'react'
import { Anchor } from '../../types'
import DrawerContext from './Context'

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
  const [open, setOpen] = useState(false)
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
    setOpen(true)
  }

  const closeDrawer = () => setOpen(false)

  const drawerValue = {
    state: {
      anchor,
      content,
      open,
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

  return (
    <DrawerContext.Provider
      value={{ ...drawerValue.actions, ...drawerValue.state }}
    >
      {children}
      <Root
        data-testid="drawer"
        onClose={closeDrawer}
        open={open}
        anchor={anchor}
        PaperProps={{
          sx: { width: `${width}%` },
          //@ts-expect-error: Does in fact working, also it only serves for testing.
          'data-testid': 'drawer-paper',
        }}
        ModalProps={{
          BackdropProps: {
            //@ts-expect-error: Does in fact working, also it only serves for testing.
            'data-testid': 'backdrop',
          },
        }}
      >
        <Fab
          color="default"
          sx={(theme) => ({
            display: { xs: 'block', md: 'block' },
            position: 'fixed',
            top: '1.45em',
            right: '.75em',
            width: '2.5em',
            height: '2.5em',
            bgcolor: `${theme.palette.grey[300]}95`,
          })}
          size={'small'}
          onClick={closeDrawer}
        >
          <Close
            data-testid="closeButton"
            color="success"
            sx={{ mb: '-.3em' }}
          />
        </Fab>
        {content}
      </Root>
    </DrawerContext.Provider>
  )
}

export default Drawer
