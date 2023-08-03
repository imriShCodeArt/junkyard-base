// (...)/Shelf/Shelf.types.ts:

import {
  MenuListProps,
  PopoverVirtualElement,
  SxProps,
  Theme,
} from '@mui/material'
import { Dispatch, ReactNode, SetStateAction } from 'react'

export type ShelfAnchorProp =
  | Element
  | PopoverVirtualElement
  | (() => Element)
  | (() => PopoverVirtualElement)
  | null
  | undefined

export type DataShapeForTheOpenShelfFunc = {
  content: ReactNode
  anchorEl: ShelfAnchorProp
  direction?: 'up' | 'down'
}

export interface IShelfState {
  isOpen: boolean
}

export interface IShelfActions {
  openShelf: (args: DataShapeForTheOpenShelfFunc) => void
  closeShelf: () => void
  setContent?: Dispatch<SetStateAction<ReactNode>>
  setAnchorEl?: Dispatch<SetStateAction<ShelfAnchorProp>>
}

export type CloseShelfButtonProps = () => void

export interface IShelfRootProps {
  anchorEl?:
    | Element
    | (() => Element)
    | PopoverVirtualElement
    | (() => PopoverVirtualElement)
    | null
    | undefined
  isOpen?: boolean
  closeShelf?: () => void
  children?: ReactNode
  PaperProps?: Partial<MenuListProps> | undefined // Define a more specific type if you have one
  sx?: Partial<SxProps> // Define a more specific type if you have one
}

export interface IShelfProps {
  children: ReactNode
}

export interface IShelfConfig {
  bgcolor?: string
  color?: string
  PaperProps?: Partial<MenuListProps> | undefined
  sx?: SxProps<Theme> | undefined
}
