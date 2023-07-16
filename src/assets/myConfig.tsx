// src/assets/myConfig.ts
import { DrawerAnchorProp, IDrawerConfig } from '../context/Drawer'

const config: { drawer: IDrawerConfig } = {
  drawer: {
    defaultAnchor: 'right' as DrawerAnchorProp,
    defaultWidth: 70,
    defaultBackdropClickClose: true,
    defaultContent: null,
    defaultIsOpen: true,
    PaperProps: {},
  },
}

export default config
