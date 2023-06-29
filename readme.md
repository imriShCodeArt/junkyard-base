<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>README</title>
</head>
<body>

<h1>junkyard-ui Documentation</h1>

<h2>Installation</h2>
<p>First, you'll need to install the package into your project. You can do this using npm or yarn:</p>

```javascript
npm install junkyard-ui
```

or

```javascript
yarn add junkyard-ui
```

<h2>Importing Components</h2>
<p>You can import the required components from the package as follows:</p>

```javascript
import { AppShell, useDrawerContext } from 'junkyard-ui'
```

<h2>Using the AppShell Component</h2>
<p>The AppShell component in this package is a context provider component. It contains the Drawer component and accepts a configuration object via its config prop:</p>

```javascript
<AppShell config={config}>{/* Your app code goes here */}</AppShell>
```

<p>In your application, you would include your other components inside the AppShell context provider.</p>

<h2>Accessing Drawer and Dialog Context</h2>
<p>You can access the state and actions related to the Drawer and Dialog components using the `useDrawerContext` and `useDialogContext` hooks. Detailed explanations of how to interact with these contexts are provided in the respective README files of these components. See the <a href="path/to/Drawer/README.md">Drawer README</a> and the <a href="path/to/Dialog/README.md">Dialog README</a>.</p>

<h2>Example</h2>
<p>Here's a basic example of how to use the `AppShell` and `useDrawerContext` in your application:</p>

```javascript
import { AppShell, useDrawerContext } from 'junkyard-ui'

function MyApp() {
  return (
    <AppShell
      config={
        {
          /* your drawer config here */
        }
      }
    >
      {/* Your other components go here */}
    </AppShell>
  )
}
```

<p>In the above example, the AppShell component is wrapping your other components. Remember to replace {/* your drawer config here */} with your actual drawer configuration.</p>

<h2>Contributing</h2>
<p>We welcome contributions from the community! Please check out our <a href="path/to/CONTRIBUTING.md">CONTRIBUTING.md</a> for guidelines on how to contribute to this project.</p>

</body>
</html>
