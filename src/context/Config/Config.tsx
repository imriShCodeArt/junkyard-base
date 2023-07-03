import { ReactNode } from 'react'
import Context from './utils/Context'

const Config = ({ children }: { children: ReactNode }) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>
}

export default Config
