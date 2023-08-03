// (...)/Drawer/index.ts
import { useContext } from 'react'

import Context from './Shelf.Context'
// import * as DrawerTypes from './Drawer.types'

export { default } from './Drawer'

export function useDrawerContext() {
  return useContext(Context)
}

export * from './Drawer.types'
