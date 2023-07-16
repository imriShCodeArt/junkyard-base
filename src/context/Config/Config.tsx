import { ReactNode } from 'react'
import myConfig from '../../assets/myConfig'
import Context from './Config.Context'

const Config = ({ children }: { children: ReactNode }) => {
  return <Context.Provider value={myConfig}>{children}</Context.Provider>
}

export default Config
