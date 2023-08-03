// src/components/CloseShelfButton.tsx
import Close from '@mui/icons-material/CloseOutlined'
import Fab from '@mui/material/Fab'
import { CloseShelfButtonProps } from '../Shelf.types'
// import { useTheme } from '@mui/system'

const CloseShelfButton = ({
  closeShelf,
}: {
  closeShelf: CloseShelfButtonProps
}) => {
  //   const theme = useTheme()

  return (
    <Fab
      color="default"
      sx={(theme) => ({
        display: { xs: 'block', md: 'block' },
        position: 'fixed',
        top: '1.45em',
        right: '.75em',
        width: '2.5em',
        height: '2.5em',
        bgcolor: `${theme.palette.grey[300]}95`,
      })}
      size={'small'}
      onClick={closeShelf}
    >
      <Close data-testid="closeButton" color="success" sx={{ mb: '-.3em' }} />
    </Fab>
  )
}

export default CloseShelfButton
