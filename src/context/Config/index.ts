// (...)/Dialog/index.tsx

import { useContext } from 'react'

import Context from './utils/Context'

export { default } from './Config'

export function useConfigContext() {
  return useContext(Context)
}
