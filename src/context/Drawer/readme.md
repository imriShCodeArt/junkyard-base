<h1>Drawer Component Documentation</h1>

<h2>Overview</h2>
<p>The Drawer component is a highly customizable, flexible component that can be used to display additional content or options to the user. It can be configured to open from any edge of the screen ('left', 'right', 'top', 'bottom'), and the width can be adjusted as a percentage of the viewport width.</p>

<h2>Configuration</h2>
<p>The Drawer component is primarily configured through the use of the openDrawer function, which allows for the setting of the content, anchor position, width, and a flag to close the drawer when clicking on the backdrop. </p>

```javascript
<!-- Example usage of openDrawer function -->
openDrawer(
  <div>Your Content Here</div>, // content  DEFAULT: NavBar
  'right', // anchor position(optional)     DEFAULT: 'left'
  70, // width(optional)                    DEFAULT: 70
  false // backdropClickClose(optional)     DEFAULT: true
)
```

<h2>Design</h2>
<p>Design of the Drawer and its different parts can be controlled using the 'sx', 'PaperProps' and similar props. These props accept Material-UI styling objects, allowing for a wide range of customization options.</p>

<h2>Context</h2>
<p>The Drawer component uses context to manage its state. This includes the anchor position, content, open state, width, and backdropClickClose state. This context can be accessed and modified through the useDrawerContext hook.</p>
