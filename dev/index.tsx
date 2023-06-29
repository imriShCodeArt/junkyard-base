// <root>/dev/index.tsx:
import React from 'react'

import { createRoot } from 'react-dom/client'
import { AppShell } from '../src'
import myConfig from '../src/assets/myConfig'

const element = document.getElementById('container')

if (!element) {
  throw new Error("Couldn't find root element")
}

const root = createRoot(element)

root.render(
  <div>
    <AppShell config={myConfig}>
      <>Hello</>
    </AppShell>
  </div>,
)
