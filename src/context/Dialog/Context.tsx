import { createContext } from 'react'
import { DialogContextType } from '.'

const Context = createContext<DialogContextType | null>(null)
export default Context
