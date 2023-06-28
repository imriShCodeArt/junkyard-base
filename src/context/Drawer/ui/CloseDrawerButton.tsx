// src/components/CloseDrawerButton.tsx
import Close from '@mui/icons-material/CloseOutlined'
import Fab from '@mui/material/Fab'
// import { useTheme } from '@mui/system'

type CloseDrawerButtonProps = () => void

const CloseDrawerButton = ({
  closeDrawer,
}: {
  closeDrawer: CloseDrawerButtonProps
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
      onClick={closeDrawer}
    >
      <Close data-testid="closeButton" color="success" sx={{ mb: '-.3em' }} />
    </Fab>
  )
}

export default CloseDrawerButton
