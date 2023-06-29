import { DialogActions, DialogState } from 'context/Dialog/utils/types'
import { DrawerActions, DrawerState } from 'context/Drawer/utils/types'

export type ConfigProps = {
  drawer: { actions: DrawerActions; state: DrawerState }
  dialog: { actions: DialogActions; state: DialogState }
}
