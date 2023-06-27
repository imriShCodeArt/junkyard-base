import React from 'react'

import { createRoot } from 'react-dom/client'
import { AppShell } from '../src'

const element = document.getElementById('container')

if (!element) {
  throw new Error("Couldn't find root element")
}

const root = createRoot(element)

root.render(
  <div>
    <AppShell>
      <>HELLO</>
    </AppShell>
  </div>,
)
