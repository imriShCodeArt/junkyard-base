// src/context/Dialog/Context.tsx:

import { createContext } from 'react'
import myConfig from '../../assets/myConfig'
import { IConfigContext } from './Config.types'

const Context = createContext<IConfigContext>(myConfig)

export default Context
