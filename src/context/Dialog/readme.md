<h1>Dialog Component Documentation</h1>

<h2>Introduction</h2>
<p>The Dialog component in junkyard-ui is a customizable and versatile overlay that can be used to display additional content or prompt user interaction. It is displayed over the current content, blocking interaction with the rest of the content until it is closed.</p>

<h2>Importing and Using Dialog</h2>
<p>You can import the Dialog context hook 'useDialogContext' from the package as follows:</p>

```javascript
import { useDialogContext } from 'junkyard-ui'
```

<h2>Accessing Dialog Context</h2>
<p>You can access the state and actions related to the Dialog using the useDialogContext hook:</p>

```javascript
const {
  state: { isOpen, content, width, fullScreen, scroll, backdropClickClose },
  actions: {
    openDialog,
    closeDialog,
    setContent,
    setWidth,
    setFullScreen,
    setScroll,
    setBackdropClickClose,
  },
} = useDialogContext()
```

<h3>Actions</h3>
<ul>
  <li>openDialog: This function opens the dialog. It takes five parameters:
    <ul>
      <li>content: The ReactNode to be displayed in the dialog.</li>
      <li>width: Optional. Sets the width of the dialog as a percentage of the screen width. The default is 70.</li>
      <li>fullScreen: Optional. Determines whether the dialog should display in full screen. The default is false.</li>
      <li>scroll: Optional. Determines the method of scrolling for the dialog. It can be 'paper' or 'body'. The default is 'paper'.</li>
      <li>backdropClickClose: Optional. Determines whether clicking outside the dialog will close it. The default is true.</li>
    </ul>
  </li>
  <li>closeDialog: This function closes the dialog.</li>
</ul>

<h3>State</h3>
<ul>
  <li>isOpen: This boolean value represents whether the dialog is open or not.</li>
  <li>content: This ReactNode represents the current content of the dialog.</li>
  <li>fullScreen: This boolean value represents whether the dialog is displayed in full screen.</li>
</ul>

<h2>Example</h2>
<p>Here's an example of how to use the Dialog and its context in your application:</p>

```javascript
import { Button } from '@mui/material'
import { useDialogContext } from 'junkyard-ui'

function MyComponent() {
  const {
    actions: { openDialog },
  } = useDialogContext()

  return (
    <Button
      onClick={() =>
        openDialog(<div>Hello, World!</div>, 50, false, 'body', true)
      }
    >
      {' '}
      Open Dialog{' '}
    </Button>
  )
}

function MyApp() {
  return (
    <AppShell
      config={
        {
          /* your dialog config here */
        }
      }
    >
      <MyComponent />
    </AppShell>
  )
}
```

<p>In the above example, clicking the button in MyComponent will open the dialog with the content "Hello, World!".</p>
<p>Remember to replace {/* your dialog config here */} with your actual dialog configuration.</p>
