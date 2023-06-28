<h1>junkyard-ui Documentation</h1> 
<h2>Installation</h2> 
<p>First, you'll need to install the package into your project. You can do this using npm or yarn:</p>

<pre><code class="javascript">npm install junkyard-ui</code></pre>

or

<pre><code class="javascript">yarn add junkyard-ui</code></pre>

<h2>Importing Components</h2> 
<p>You can import the required components from the package as follows:</p>

<pre><code class="javascript">import { AppShell, useDrawerContext } from 'junkyard-ui'</code></pre>

<h2>Using the AppShell Component</h2> 
<p>The AppShell component in this package is a context provider component. It contains the Drawer component and accepts a configuration object via its config prop:</p>

<pre><code class="javascript"><AppShell config={config}>{/* Your app code goes here */}</AppShell></code></pre>

<p>In your application, you would include your other components inside the AppShell context provider.</p>

<h2>Accessing Drawer Context</h2> 
<p>You can access the state and actions related to the Drawer using the useDrawerContext hook:</p>

<pre><code class="javascript">
const { 
  state: { anchor, content, isOpen, width, backdropClickClose }, 
  actions: { openDrawer, closeDrawer, setWidth, setContent, setAnchor, setBackdropClickClose },
} = useDrawerContext()
</code></pre>

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

<pre><code class="javascript">
import { Button } from '@mui/material'
import { AppShell, useDrawerContext } from 'junkyard-ui'

function MyComponent() {
  const { actions: { openDrawer }, } = useDrawerContext()
  return (
    <Button onClick={() => openDrawer(<div>Hello, World!</div>)}>
      Open Drawer
    </Button>
  )
}

function MyApp() {
  return (
    <AppShell config={ { /* your drawer config here */ } } >
      <MyComponent />
    </AppShell>
  )
}
</code></pre>

<p>In the above example, clicking the button in MyComponent will open the drawer with the content "Hello, World!".</p> 
<p>Remember to replace {/* your drawer config here */} with your actual drawer configuration.</p>

<h2>Contributing</h2> 
<p>We welcome contributions from the community! Please check out our CONTRIBUTING.md for guidelines on how to contribute to this project.</p>
