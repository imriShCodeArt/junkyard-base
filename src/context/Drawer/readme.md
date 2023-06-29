<h1>Drawer Component Documentation</h1>

<h2>Overview</h2> 
<p>The Drawer component is a highly customizable, flexible component that can be used to display additional content or options to the user. It can be configured to open from any edge of the screen ('left', 'right', 'top', 'bottom'), and the width can be adjusted as a percentage of the viewport width.</p>

<h2>Configuration</h2> 
<p>The Drawer component is primarily configured through the use of the openDrawer function, which allows for the setting of the content, anchor position, width, and a flag to close the drawer when clicking on the backdrop. It also allows the application of Material UI props such as 'PaperProps', 'ModalProps', and 'sx' for styling purposes.</p>

```javascript
// Example usage of openDrawer function
openDrawer(
  <div>Your Content Here</div>, // content  DEFAULT: null
  'right', // anchor position(optional)     DEFAULT: 'left'
  70, // width(optional)                    DEFAULT: 70
  false, // backdropClickClose(optional)     DEFAULT: true
)
```

<h2>Design</h2>
<p>Design of the Drawer and its different parts can be controlled using the 'sx', 'PaperProps' and 'ModalProps' properties. These props accept Material-UI styling objects, allowing for a wide range of customization options. For instance, 'PaperProps' can be used to style the Drawer component, and 'ModalProps' can be used to style the modal that contains the Drawer.</p>

<h2>Context</h2> 
<p>The Drawer component uses context to manage its state and actions. The context can be accessed and modified through the useDrawerContext hook.</p>

```javascript
// Usage of useDrawerContext hook
const { state, actions } = useDrawerContext()

// State
const { anchor, content, isOpen, width, backdropClickClose } = state

// Actions
const {
  openDrawer,
  closeDrawer,
  setWidth,
  setContent,
  setAnchor,
  setBackdropClickClose,
} = actions
```

<h2>Usage</h2>
<p>Here is an example usage of the Drawer component:</p>

```javascript
import { useDrawerContext } from 'junkyard-ui'

const config = {
  defaultAnchor: 'right',
  defaultWidth: 70,
  defaultBackdropClickClose: true,
  PaperProps: {},
  ModalProps: {},
  sx: {},
}

function MyApp({ children }) {
  return (
    <AppShell>
      <DrawerProvider config={config}>{children}</DrawerProvider>
    </AppShell>
  )
}
```

<p>Note that the config object is passed as a prop to the DrawerProvider component, which is used inside the AppShell. You can customize it according to your needs.</p>
