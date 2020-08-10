import React from "react";
import EditFlashcardDialog from "./EditFlashcardDialog";



function EditFlashcard(props) {

  return (
    <EditFlashcardDialog open={props.open} handleClose={props.handleClose} />
  )
}

export default EditFlashcard 
      