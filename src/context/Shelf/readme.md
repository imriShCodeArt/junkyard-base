<h1>Drawer Component</h1>

<p>This document provides a guide to using the Drawer component in your application. The Drawer component is a part of the AppShell component and provides a side panel that can be opened and closed programmatically. The Drawer component can be configured via the drawer prop in the AppShell.</p>

<h2>Using Drawer with AppShell</h2>

<p>The Drawer component is embedded in the AppShell component. You don't have to import the Drawer component separately in your app. Instead, you wrap your app with the AppShell component.</p>

<pre>
&lt;AppShell drawer={drawerConfig}&gt;
  {/*Your App code*/}
&lt;/AppShell&gt;
</pre>

<p>The drawer prop in AppShell accepts a configuration object that allows you to set default properties for the Drawer. Here's an example of how you can define the drawerConfig:</p>

<pre>
const drawerConfig = {
  defaultIsOpen: false,
  defaultContent: &lt;p&gt;Default Content&lt;/p&gt;,
  defaultAnchor: 'left',
  defaultWidth: 80,
  defaultBackdropClickClose: true,
  PaperProps: {},
  ModalProps: {},
  sx: {},
}
</pre>

<h2>useDrawerContext()</h2>

<p>To interact with the Drawer component, you use the useDrawerContext() hook. This hook provides you with the state of the Drawer and various actions that you can use to manipulate the Drawer.</p>

<pre>
import { useDrawerContext } from 'Drawer'

const { state, actions } = useDrawerContext()
</pre>

<h3>State</h3>

<p>The state object has the following properties:</p>

<ul>
  <li>isOpen: Boolean indicating whether the drawer is open.</li>
  <li>content: The ReactNode to be displayed in the drawer.</li>
  <li>anchor: The anchor position of the drawer ('left' | 'right' | 'top').</li>
  <li>width: The width of the drawer as a percentage of the viewport width.</li>
  <li>backdropClickClose: If true, clicking on the backdrop will close the drawer.</li>
</ul>

<h3>Actions</h3>

<p>The actions object has the following functions:</p>

<ul>
  <li>openDrawer(content, anchor, width, backdropClickClose): Opens the drawer with the provided parameters.</li>
  <li>closeDrawer(): Closes the drawer.</li>
  <li>setWidth(width): Sets the width of the drawer.</li>
  <li>setContent(content): Sets the content of the drawer.</li>
  <li>setAnchor(anchor): Sets the anchor of the drawer.</li>
  <li>setBackdropClickClose(value): If set to true, clicking on the backdrop will close the drawer.</li>
</ul>

<p>Here's an example of how you can use these actions:</p>

<pre>
const { actions } = useDrawerContext()

const content = &lt;p&gt;Hello World&lt;/p&gt;

actions.openDrawer(content, 'right', 80, true)
</pre>

<p>In this example, we're opening the drawer with the content set to "Hello World", the anchor set to "right", the width set to 80, and backdropClickClose set to true.</p>

<p>This comprehensive guide should help developers to understand how to use the Drawer component effectively. Remember to always ensure the AppShell component wraps your entire application to use the Drawer component.</p>
