import React from "react";
import { Dialog, DialogActions, DialogTitle, DialogContent, Button, TextField} from "@material-ui/core";   



function EditFlashcardDialog(props) {
  let [content, setContent] = React.useState(props.content);

  const handleChange = (e) => {
    const { value } = e.target
    setContent(value);
  }

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
            value={props.content}
            label="Content"
            variant="outlined"
            id="content"
            fullWidth
            onChange={(e) => handleChange(e)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={(e) => props.handleSubmit(e, props.id, content)} color="primary" autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
  )
}

export default EditFlashcardDialog
