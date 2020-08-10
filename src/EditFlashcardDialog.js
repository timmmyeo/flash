import React from "react";
import { Dialog, DialogActions, DialogTitle, DialogContent, Button, TextField} from "@material-ui/core";   


function EditFlashcardDialog(props) {
  const [content, setContent] = React.useState(props.flashcard.content);
  const [title, setTitle] = React.useState(props.flashcard.title);
  const [subtitle, setSubtitle] = React.useState(props.flashcard.subtitle);

  return (
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form onSubmit={(e) => props.onSubmit(e, props.flashcard.id, {title: title, subtitle: subtitle, content: content})}>
        <DialogTitle id="alert-dialog-title">{props.dialogTitle}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            value={title}
            label="Title"
            variant="outlined"
            id="title"
            fullWidth
            onChange={(e) => setTitle(e.target.value)}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            value={subtitle}
            label="Subtitle"
            variant="outlined"
            id="subtitle"
            fullWidth
            onChange={(e) => setSubtitle(e.target.value)}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            value={content}
            label="Content"
            variant="outlined"
            id="content"
            fullWidth
            onChange={(e) => setContent(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => { props.handleClose(); setContent(props.flashcard.content); } } color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary" autoFocus>
            Save
          </Button>
        </DialogActions>
        </form>
      </Dialog>
  )
}

export default EditFlashcardDialog
