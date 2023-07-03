// src/context/Dialog/Context.tsx:

import { createContext } from 'react'
import { ConfigObject } from './types'

const Context = createContext<ConfigObject | null>(null)

export default Context
