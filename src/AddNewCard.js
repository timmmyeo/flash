import React, { useState } from "react"
import { Grid, Fab } from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add';
import EditFlashcardDialog from "./EditFlashcardDialog"

export default function AddNewCard(props) {

  // I realise this is the same as in Flashcard, I'll think about how to abstract this later
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleSubmit = (e, id, newFlashcard) => {
    e.preventDefault();
    props.onSubmit(id, newFlashcard);
    handleClose();
  }
  

  return (
    <div>
      <Grid container>
        <Grid item xs={10} md={11} />
        <Grid item xs={1}>
          <Fab color="primary" aria-label="add" onClick={handleOpen}>
            <AddIcon />
          </Fab>
        </Grid>
        <Grid item xs={1} md={0} />
      </Grid>
      <EditFlashcardDialog 
        dialogTitle="New Card"
        open={open} 
        handleClose={handleClose}
        onSubmit={(e, id, newFlashcard) => handleSubmit(e, id, newFlashcard)}
        flashcard={{id: 1000, title: "", subtitle: "", content: ""}}
      />
    </div>
  )
}