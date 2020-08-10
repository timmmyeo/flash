import React from "react";
import EditFlashcardDialog from "./EditFlashcardDialog";



function EditFlashcard(props) {

  return (
    <EditFlashcardDialog 
      handleSubmit={(e) => props.handleSubmit(e)}
      content={props.content}
      open={props.open} 
      handleClose = {props.handleClose}
      id={props.id}
    />
  )
}

export default EditFlashcard 
      