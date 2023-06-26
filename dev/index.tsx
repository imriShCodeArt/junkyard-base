import React from 'react'

import { ContextProviders } from '@/src'
import { createRoot } from 'react-dom/client'

const element = document.getElementById('container')

if (!element) {
  throw new Error("Couldn't find root element")
}

const root = createRoot(element)

root.render(
  <div>
    <ContextProviders>
      <>HELLO</>
    </ContextProviders>
  </div>,
)
