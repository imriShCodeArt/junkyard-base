<h1>Drawer Component Documentation</h1>

<h2>Introduction</h2>
<p>The Drawer component in junkyard-ui is a customizable and versatile sliding panel, typically used for navigation or displaying additional content. It can be anchored to any side of the viewport.</p>

<h2>Importing and Using Drawer</h2>
<p>You can import the Drawer context hook 'useDrawerContext' from the package as follows:</p>

```javascript
import { useDrawerContext } from 'junkyard-ui'
```

<h2>Accessing Drawer Context</h2>
<p>You can access the state and actions related to the Drawer using the useDrawerContext hook:</p>

```javascript
const {
  state: { anchor, content, isOpen, width, backdropClickClose },
  actions: {
    openDrawer,
    closeDrawer,
    setWidth,
    setContent,
    setAnchor,
    setBackdropClickClose,
  },
} = useDrawerContext()
```

<h3>Actions</h3>
<ul>
  <li>openDrawer: This function opens the drawer. It takes four parameters:
    <ul>
      <li>content: The ReactNode to be displayed in the drawer.</li>
      <li>anchor: Optional. Determines which side of the screen the drawer appears from. It can be 'left', 'right', 'top', or 'bottom'. The default is 'right'.</li>
      <li>width: Optional. Sets the width of the drawer as a percentage of the screen width. The default is 70.</li>
      <li>backdropClickClose: Optional. Determines whether clicking outside the drawer will close it. The default is true.</li>
    </ul>
  </li>
  <li>closeDrawer: This function closes the drawer.</li>
</ul>

<h3>State</h3>
<ul>
  <li>isOpen: This boolean value represents whether the drawer is open or not.</li>
  <li>content: This ReactNode represents the current content of the drawer.</li>
</ul>

<h2>Example</h2>
<p>Here's an example of how to use the Drawer and its context in your application:</p>

```javascript
  import { Button } from '@mui/material'
  import { useDrawerContext } from 'junkyard-ui'

function MyComponent() {
const { actions: { openDrawer }, } = useDrawerContext()

    return (
      <Button onClick={() => openDrawer(<div>Hello, World!</div>)}> Open Drawer </Button>
    )

}

function MyApp() {
return (
<AppShell config={ { /_ your drawer config here _/ } }>
<MyComponent />
</AppShell>
)
}
```

<p>In the above example, clicking the button in MyComponent will open the drawer with the content "Hello, World!".</p>
<p>Remember to replace {/* your drawer config here */} with your actual drawer configuration.</p>
