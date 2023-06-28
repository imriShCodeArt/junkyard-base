// (...)/Drawer/index.ts

import { useContext } from 'react'

import Context from './utils/Context'

export { default } from './Drawer'

export function useDrawerContext() {
  return useContext(Context)
}
