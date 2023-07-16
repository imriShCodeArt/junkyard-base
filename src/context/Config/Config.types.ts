import { IDrawerConfig } from '../Drawer'
import { ILanguageProviderConfig } from '../Language'

export type IConfigContext = {
  drawer?: IDrawerConfig
  locale?: ILanguageProviderConfig
}
