// (...)/Shelf/ui/ShelfRoot.tsx:
import Root from '@mui/material/Menu'
import { IShelfRootProps } from '../Shelf.types'

const ShelfRoot = ({
  anchorEl = null,
  isOpen = false,
  closeShelf = () => ({}),
  children = null,
  PaperProps,
  sx,
}: IShelfRootProps) => {
  return (
    <Root
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      data-testid="Shelf"
      onClose={closeShelf}
      open={isOpen}
      anchorEl={anchorEl}
      sx={sx || {}}
      MenuListProps={{
        sx: { width: `${100}%` },
        ...PaperProps,
        //@ts-expect-error: Does in fact working, also it only serves for testing.
        'data-testid': 'Shelf-paper',
      }}
    >
      {children}
    </Root>
  )
}

export default ShelfRoot
