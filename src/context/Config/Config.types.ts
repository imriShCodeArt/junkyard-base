import { IShelfConfig } from 'context/Shelf'
import { IDrawerConfig } from '../Drawer'
import { ILanguageConfig } from '../Language'

export type IConfigContext = {
  drawer?: IDrawerConfig
  locale?: ILanguageConfig
  shelf?: IShelfConfig | null | undefined
}
