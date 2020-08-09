import React from "react";
import { Dialog, DialogActions, DialogTitle, DialogContent, Button, TextField} from "@material-ui/core";   


function EditFlashcardDialog(props) {
  const [content, setContent] = React.useState("Testing");
  return (
    <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Edit"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            value={content}
            label="Content"
            variant="outlined"
            id="content"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={props.handleClose} color="primary" autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
  )
}

export default EditFlashcardDialog
