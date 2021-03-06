import React from "react";
import FlashCard from "./FlashCard"
import { Grid } from "@material-ui/core"



function CardGrid(props) {
  const flashcardItems = props.flashcards.map(flashcard => {
    return (
      <Grid item xs={12} md={6} lg={4} key={flashcard.id}>
        <FlashCard 
          flashcard={flashcard}
          onSubmit={(id, newFlashcard) => props.handleSubmit(id, newFlashcard)}
          handleDelete={(id) => props.handleDelete(id)}
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