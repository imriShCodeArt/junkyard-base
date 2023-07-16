// (...)/Dialog/index.tsx

import { useContext } from 'react'

import Context from './Dialog.Context'

export { default } from './Dialog'

export function useDialogContext() {
  return useContext(Context)
}

export * from './Dialog.types'
