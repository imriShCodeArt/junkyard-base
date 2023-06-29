// src/assets/myConfig.ts
import { Anchor, DrawerProps } from '../context/Drawer/utils/types'

const config: { drawer: DrawerProps } = {
  drawer: {
    anchor: 'right' as Anchor,
    width: 70,
    backdropClickClose: true,
    content: null,
    isOpen: true,
    PaperProps: {
      sx: { minWidth: '80%' },
    },
  },
}

export default config
