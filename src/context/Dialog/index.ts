// (...)/Dialog/index.tsx

import { useContext } from 'react'

import Context from './Context'

export { default } from './Dialog'

export function useDialogContext() {
  return useContext(Context)
}
