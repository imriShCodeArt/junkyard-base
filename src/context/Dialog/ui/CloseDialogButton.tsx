import Close from '@mui/icons-material/CloseOutlined'
import Fab from '@mui/material/Fab'

interface CloseDialogButtonProps {
  isOpen: boolean
  closeDialog: () => void
}

const CloseDialogButton = ({ isOpen, closeDialog }: CloseDialogButtonProps) => (
  <Fab
    color="default"
    sx={{
      display: isOpen ? 'block' : 'none',
      position: 'fixed',
      zIndex: 9999,
      top: '2.45em',
      right: '.75em',
      width: '2.5em',
      height: '2.5em',
      bgcolor: (theme) => `${theme.palette.grey[300]}95`,
    }}
    size="small"
    onClick={closeDialog}
  >
    <Close color="success" sx={{ mb: '-.3em' }} />
  </Fab>
)

export default CloseDialogButton
