<h1>junkyard-ui Documentation</h1>

<h2>Installation</h2>

<p>First, you'll need to install the package into your project. You can do this using npm or yarn:</p>

```javascript
npm install junkyard-ui
```

<br/>
or<br/>

```javascript
yarn add junkyard-ui
```

<h2>Importing Components</h2>

<p>You can import the required components from the package as follows:</p>

```javascript
import { AppShell, useDrawerContext } from 'junkyard-ui'
```

<h2>Using the AppShell Component</h2>

<p>The AppShell component in this package is a context provider component. It contains the Drawer component and accepts a configuration object via its drawer prop:</p>

```javascript
<AppShell drawer={drawerConfig}>
  <br />
  {/* Your app code goes here */}
  <br />
</AppShell>
```

<p>In your application, you would include your other components inside the AppShell context provider.</p>

<h2>Accessing Drawer Context</h2>

<p>You can access the state and actions related to the Drawer using the useDrawerContext hook:</p>

```javascript

const {<br/>
    state: { anchor, content, isOpen, width, backdropClickClose },<br/>
    actions: { openDrawer, closeDrawer, setWidth, setContent, setAnchor, setBackdropClickClose },<br/>
} = useDrawerContext();

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

<p>Here's an example of how to use the AppShell and its context in your application:</p>

```javascript

import { Button } from '@mui/material';<br/>
import { AppShell, useDrawerContext } from 'junkyard-ui';<br/>
<br/>
function MyComponent() {<br/>
    const { actions: { openDrawer } } = useDrawerContext();<br/>
<br/>
    return (<br/>
        <Button onClick={() => openDrawer(<div>Hello, World!</div>)}>Open Drawer</Button><br/>
    );<br/>
}<br/>
<br/>
function MyApp() {<br/>
    return (<br/>
        <AppShell drawer={{/* your drawer config here */}}><br/>
            <MyComponent /><br/>
        </AppShell><br/>
    );<br/>
}<br/>

```

<p>In the above example, clicking the button in MyComponent will open the drawer with the content "Hello, World!".</p>

<p>Remember to replace {/* your drawer config here */} with your actual drawer configuration.</p>

<h2>Contributing</h2>

<p>We welcome contributions from the community! Please check out our CONTRIBUTING.md for guidelines on how to contribute to this project.</p>
