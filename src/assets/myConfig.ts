// src/assets/myConfig.ts
import { Anchor } from 'context/Drawer/utils/types'

export default {
  drawer: {
    anchor: 'right' as Anchor,
    width: 70,
    backdropClickClose: true,
    content: null,
    isOpen: false,
    PaperProps: {},
    ModalProps: {},
    sx: {},
    closeDrawer: () => {
      return void 0
    },
    children: null,
  },
}
