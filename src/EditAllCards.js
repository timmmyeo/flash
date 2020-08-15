import React from "react"
import { Grid } from "@material-ui/core";
import CardGrid from "./CardGrid"
import AddNewCard from "./AddNewCard"
import { v4 as uuid } from 'uuid';

export default function EditAllCards(props) {

  const handleSubmit = (id, newFlashcard) => {
    props.setFlashcards(prevState => {
      let found = false;
      let newState = prevState.map(flashcard => {
        if (flashcard.id === id) {
          found = true;
          flashcard.content = newFlashcard.content;
          flashcard.subtitle = newFlashcard.subtitle;
          flashcard.title = newFlashcard.title;
        }
        return (
          flashcard
        )
      })
      if (!found) {
        newState = [...prevState,
        {
          id: uuid(),
          title: newFlashcard.title, 
          subtitle: newFlashcard.subtitle,
          content: newFlashcard.content
        }
      ]
      }
      return (
        newState
      )
    }
    )
  }
  
  const handleDelete = (id) => {
    props.setFlashcards(prevState => {
      return (
        prevState.filter(flashcard => flashcard.id !== id)
      )
    })
  }
  
  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item xs={1}/>

        <Grid item xs={10}>
          <CardGrid 
            flashcards={props.flashcards}
            handleSubmit={(id, newFlashcard) => handleSubmit(id, newFlashcard)}
            handleDelete={(id) => handleDelete(id)}
          />
        </Grid>

        <Grid item xs={1}/>
      </Grid>

      <Grid item>
        <br />
        <AddNewCard 
          onSubmit={(id, newFlashcard) => handleSubmit(id, newFlashcard)}
        />
        <br />
      </Grid>
    </Grid>
  )
}