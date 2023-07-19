// src/assets/myConfig.ts
import { ILanguageConfig } from 'context/Language'
import { DrawerAnchorProp, IDrawerConfig } from '../context/Drawer'

import en from './en.json'

const config: { drawer: IDrawerConfig; locale: ILanguageConfig } = {
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
