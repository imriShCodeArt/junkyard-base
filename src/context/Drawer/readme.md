<h1>junkyard-ui: Drawer Component</h1>

<p>The Drawer component is a customizable drawer with flexible content and positioning. It can be opened and closed programmatically and is included in the AppShell context provider.</p>

<h2>Installation</h2>

<p>First, you'll need to install the package into your project. You can do this using npm or yarn:</p>

<pre>
npm install junkyard-ui
</pre>

<p>or</p>

<pre>
yarn add junkyard-ui
</pre>

<h2>Importing the Component</h2>

<p>You can import the Drawer context from the package as follows:</p>

<pre>
import { useDrawerContext } from 'junkyard-ui';
</pre>

<h2>Accessing Drawer Context</h2>

<p>You can access the state and actions related to the Drawer using the useDrawerContext hook:</p>

<pre>
const { 
    state: { 
        anchor, 
        content, 
        isOpen, 
        width, 
        backdropClickClose 
    }, 
    actions: { 
        openDrawer, 
        closeDrawer, 
        setWidth, 
        setContent, 
        setAnchor, 
        setBackdropClickClose 
    } 
} = useDrawerContext()
</pre>

<h3>Actions</h3>

<ul>
    <li>
        <b>openDrawer:</b> This function opens the drawer. It takes four parameters:
        <ul>
            <li><b>content:</b> The ReactNode to be displayed in the drawer.</li>
            <li><b>anchor:</b> Optional. Determines which side of the screen the drawer appears from. It can be 'left', 'right', 'top', or 'bottom'. The default is 'right'.</li>
            <li><b>width:</b> Optional. Sets the width of the drawer as a percentage of the screen width. The default is 70.</li>
            <li><b>backdropClickClose:</b> Optional. Determines whether clicking outside the drawer will close it. The default is true.</li>
        </ul>
    </li>
    <li><b>closeDrawer:</b> This function closes the drawer.</li>
</ul>

<h3>State</h3>

<ul>
    <li><b>isOpen:</b> This boolean value represents whether the drawer is open or not.</li>
    <li><b>content:</b> This ReactNode represents the current content of the drawer.</li>
</ul>

<h2>Example</h2>

<p>Here's an example of how to use the Drawer context in your application:</p>

<pre>
import { Button } from '@mui/material'
import { useDrawerContext } from 'junkyard-ui'

function MyComponent() {
    const { 
        actions: { 
            openDrawer 
        } 
    } = useDrawerContext()
    
    return (
        &lt;Button onClick={() =&gt; openDrawer(&lt;div&gt;Hello, World!&lt;/div&gt;)}&gt;
            Open Drawer 
        &lt;/Button&gt;
    )
}

function MyApp() {
    return (
        &lt;AppShell drawer={ 
            { 
                /* your drawer config here */
            } 
        } &gt;
            &lt;MyComponent /&gt;
        &lt;/AppShell&gt;
    )
}
</pre>

<p>In the above example, clicking the button in MyComponent will open the drawer with the content "Hello, World!".</p>

<p>Remember to replace {/* your drawer config here */} with your actual drawer configuration.</p>

<h2>Contributing</h2>

<p>We welcome contributions from the community! Please check out our CONTRIBUTING.md for guidelines on how to contribute to this project.</p>
