import React from "react";
import FlashCard from "./FlashCard"
import { Grid } from "@material-ui/core"



function CardGrid(props) {
  const flashcardItems = props.flashcards.map(flashcard => {
    return (
      <Grid item xs={12} md={6} lg={4}>
        <FlashCard 
          open = {props.open}
          handleClose = {props.handleClose}
          handleOpen = {props.handleOpen}
          handleSubmit = {(e) => props.handleSubmit(e)}
          title={flashcard.title} 
          subtitle={flashcard.subtitle} 
          content={flashcard.content}
          id={flashcard.id}
        />
      </Grid>
    )
  })
  return (
    <Grid container spacing={2}>
      {flashcardItems}
    </Grid>
  )
}

export default CardGrid