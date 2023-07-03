import { IDrawerProps } from '../../Drawer/utils/types'

export type ConfigObject = {
  drawer?: IDrawerProps
  locale?: {
    default: string
    messages: { description: string; id: string; defaultMessage: string }
  }
}
