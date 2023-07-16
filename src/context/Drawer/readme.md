# `Drawer` Component

This document provides a guide to using the `Drawer` component in your application. The `Drawer` component is a part of the `AppShell` component and provides a side panel that can be opened and closed programmatically. The `Drawer` component can be configured via the `drawer` prop in the `AppShell`.

## Using `Drawer` with `AppShell`

The `Drawer` component is embedded in the `AppShell` component. You don't have to import the `Drawer` component separately in your app. Instead, you wrap your app with the `AppShell` component.

<pre>
<AppShell drawer={drawerConfig}>
{/_Your App code_/}
</AppShell>
</pre>

The `drawer` prop in `AppShell` accepts a configuration object that allows you to set default properties for the `Drawer`. Here's an example of how you can define the `drawerConfig`:

<code><pre>
const drawerConfig = {
defaultIsOpen: false,
defaultContent: <p>Default Content</p>,
defaultAnchor: 'left',
defaultWidth: 80,
defaultBackdropClickClose: true,
PaperProps: {},
ModalProps: {},
sx: {},
}

</code></pre>
