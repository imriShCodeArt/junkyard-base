# Drawer Component

## Overview

The Drawer component is a highly customizable drawer module in a React.js application. It provides a set of interfaces, types, and functions that allow you to interact with the drawer in various ways.

## Code

The main components of the Drawer module are:

1. **DrawerAnchorProp**: This type specifies the anchor of the drawer. It can be 'left', 'right', or 'top'.

<pre>
<code>
export type DrawerAnchorProp = 'left' | 'right' | 'top'
</code>
</pre>

2. **IDrawerState**: This interface represents the state of the Drawer. It includes properties like isOpen, content, anchor, width, and backdropClickClose.

<pre>
<code>
export interface IDrawerState {{
  isOpen: boolean
  content: ReactNode
  anchor?: DrawerAnchorProp
  width?: number
  backdropClickClose?: boolean
}}
</code>
</pre>

3. **IDrawerActions**: This interface represents the actions that can be performed on the Drawer. These actions include openDrawer, closeDrawer, setWidth, setContent, setAnchor, and setBackdropClickClose.

<pre>
<code>
export interface IDrawerActions {{
  openDrawer: (
    content: ReactNode,
    anchor?: DrawerAnchorProp,
    width?: number,
    backdropClickClose?: boolean,
  ) => void
  closeDrawer: () => void
  setWidth?: Dispatch<SetStateAction<number>>
  setContent?: Dispatch<SetStateAction<ReactNode>>
  setAnchor?: Dispatch<SetStateAction<DrawerAnchorProp>>
  setBackdropClickClose?: Dispatch<SetStateAction<boolean>>
}}
</code>
</pre>

4. **CloseDrawerButtonProps**: This type represents the properties of the CloseDrawerButton.

<pre>
<code>
export type CloseDrawerButtonProps = () => void
</code>
</pre>

5. **IDrawerRootProps, IDrawerProps, and IDrawerConfig**: These interfaces represent various properties of the Drawer component.

<pre>
<code>
export interface IDrawerRootProps {{
  anchor?: DrawerAnchorProp
  isOpen?: boolean
  width?: number
  closeDrawer?: () => void
  children?: ReactNode
  PaperProps?: Partial<PaperProps>
  ModalProps?: Partial<ModalProps>
  sx?: Partial<SxProps>
}}

export interface IDrawerProps {{
  children: ReactNode
}}

export interface IDrawerConfig {{
  defaultIsOpen?: boolean
  defaultContent?: ReactNode
  defaultAnchor?: DrawerAnchorProp
  defaultWidth?: number
  defaultBackdropClickClose?: boolean
  PaperProps?: Partial<PaperProps>
  ModalProps?: Partial<ModalProps>
  sx?: Partial<SxProps>
}}
</code>
</pre>

6. **Drawer**: This is the main Drawer component that utilizes all of the above types and interfaces. It includes functionality to open and close the drawer, set the content, set the width, set the anchor, and more.

<pre>
<code>
const Drawer: FC<IDrawerProps> = ({{
  const theme = useTheme()
  const {{
    defaultAnchor = 'left',
    defaultContent,
    defaultWidth,
    defaultBackdropClickClose,
    PaperProps,
    ModalProps,
    sx,
  }} = useConfigContext().drawer || {{}}
  const {{ direction }} = theme || {{}}

  const dir = direction === 'rtl' ? 'left' : 'right'

  const [anchor, setAnchor] = useState<DrawerAnchorProp>(dir || defaultAnchor)
  const [content, setContent] = useState<ReactNode>(defaultContent || <>CONTENT</>)
  const [isOpen, setIsOpen] = useState(true)
  const [width, setWidth] = useState<number>(defaultWidth || 70)
  const [backdropClickClose, setBackdropClickClose] = useState<boolean>(defaultBackdropClickClose || true)

  const openDrawer = (
    content: ReactNode,
    anchor: 'left' | 'right' | 'top' = 'right',
    width = 70,
    backdropClickClose = true,
  ) => {{
    setContent(content)
    anchor && setAnchor(anchor)
    setWidth(width || 70)
    backdropClickClose && setBackdropClickClose(backdropClickClose)
    setIsOpen(true)
  }}

  const closeDrawer = () => setIsOpen(false)

  const drawerValue = {{
    state: {{
      anchor,
      content,
      isOpen,
      width,
      backdropClickClose,
    }},
    actions: {{
      openDrawer,
      closeDrawer,
      setWidth,
      setContent,
      setAnchor,
      setBackdropClickClose,
    }},
  }}

  const {{ state, actions }} = drawerValue

  return (
    <DrawerContext.Provider value={{ actions, state }}>
      {{children}}
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
}}

export default Drawer
</code>
</pre>
