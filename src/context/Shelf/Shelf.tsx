// (...)/Shelf/Shelf.tsx
import { FC, ReactNode, useState } from 'react'
import { useConfigContext } from '../Config'
import ShelfContext from './Shelf.Context'
import {
  DataShapeForTheOpenShelfFunc,
  IShelfProps,
  ShelfAnchorProp,
} from './Shelf.types'
import CloseShelfButton from './ui/CloseShelfButton'
import ShelfRoot from './ui/ShelfRoot'

/**
 * This is a customizable Shelf component.
 *
 * openShelf function can be used to open the Shelf. It takes in the following parameters:
 * - content: the ReactNode to be displayed in the Shelf
 * - anchor: the anchor position of the Shelf ('left' | 'right' | 'top' | 'bottom'). Defaults to 'right'.
 * - width: width of the Shelf as a percentage of the viewport width. Defaults to 80.
 * - backdropClickClose: if true, clicking on the backdrop will close the Shelf. Defaults to true.
 *
 * closeShelf function can be used to close the Shelf.
 */
const Shelf: FC<IShelfProps> = ({ children }) => {
  const { PaperProps, sx } = useConfigContext().shelf || {}

  const [content, setContent] = useState<ReactNode>(<>CONTENT</>)
  const [anchorEl, setAnchorEl] = useState<ShelfAnchorProp>(null)
  const [isOpen, setIsOpen] = useState(true)
  const [direction, setDirection] = useState<'up' | 'down'>('down')

  const openShelf = (args: DataShapeForTheOpenShelfFunc) => {
    const { content, anchorEl, direction } = args
    setContent(content)
    anchorEl && setAnchorEl(anchorEl)
    setIsOpen(true)
  }

  const closeShelf = () => setIsOpen(false)

  const ShelfValue = {
    state: { isOpen },
    actions: {
      openShelf,
      closeShelf,
      setContent,
      setAnchorEl,
    },
    setAnchorEl,
  }

  const { state, actions } = ShelfValue

  return (
    <ShelfContext.Provider value={{ actions, state }}>
      {children}
      <ShelfRoot
        anchorEl={anchorEl}
        isOpen={isOpen}
        closeShelf={closeShelf}
        PaperProps={PaperProps}
        sx={{ ...sx }}
      >
        <CloseShelfButton closeShelf={closeShelf} />
        {content}
      </ShelfRoot>
    </ShelfContext.Provider>
  )
}

export default Shelf
