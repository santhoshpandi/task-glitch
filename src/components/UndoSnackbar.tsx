import { Snackbar, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  open: boolean;
  onClose: () => void;
  onUndo: () => void;
}

export default function UndoSnackbar({ open, onClose, onUndo }: Props) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={onClose}
      message="Task deleted"
      action={
        <>
          <Button color="secondary" size="small" onClick={onUndo}>Undo</Button>
          {/* Adding Manual Close Button */}
          <IconButton size='small' aria-label='close' color='inherit' onClick={onClose}>
            <CloseIcon fontSize='small' />
          </IconButton>
        </>
      }
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    />
  );
}


