// (...)/Dialog/index.tsx

import { useContext } from 'react'

import Context from './Config.Context'

export { default } from './Config'

export function useConfigContext() {
  return useContext(Context)
}

export * from './Config.types'
