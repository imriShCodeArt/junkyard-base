// src/assets/myConfig.ts
import { DrawerAnchorProp } from '../context/Drawer'

import { IConfigContext } from 'context/Config'
import en from './en.json'

const config: IConfigContext = {
  shelf: { PaperProps: {}, sx: {} },
  drawer: {
    defaultAnchor: 'right' as DrawerAnchorProp,
    defaultWidth: 70,
    defaultBackdropClickClose: true,
    defaultContent: null,
    defaultIsOpen: true,
    PaperProps: {},
  },
  locale: {
    defaultLocale: 'en',
    messages: { en: en },
  },
}

export default config
