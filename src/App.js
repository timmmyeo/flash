import React from "react"
import { Grid } from "@material-ui/core";
import Header from "./Header"
import CardGrid from "./CardGrid"

function App() {
  const [flashcards, setFlashcards] = React.useState([
    {
      id: 1,
      title: "title", 
      subtitle: "subtitle1",
      content: "this is some text"
    },
    {
      id: 2,
      title: "title2", 
      subtitle: "subtitle2",
      content: "this is some more text"
    },
    {
      id: 3,
      title: "title3", 
      subtitle: "3",
      content: "no3"
    },
    {
      id: 4,
      title: "yay", 
      subtitle: "more4",
      content: "this is  more text4"
    },
    { 
      id: 5,
      title: "5thing", 
      subtitle: "subtitle5",
      content: "this is some more tex5"
    },
    {
      id: 6,
      title: "6a", 
      subtitle: "subtitle6",
      content: "this is some more tex6"
    },
  ]);

  const handleSubmit = (id, content) => {
    setFlashcards(prevState => {
      return (
        prevState.map(flashcard => {
          if (flashcard.id === id) flashcard.content = content;
          return (
            flashcard
          )
        })
      )
    }
    )
  }
  
  const handleDelete = (id) => {
    setFlashcards(prevState => {
      return (
        prevState.filter(flashcard => flashcard.id !== id)
      )
    })
  }

  

  return(
    <div>
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <Grid item container>
          <Grid item xs={1}/>
          <Grid item xs={10}>
            <CardGrid 
              flashcards={flashcards}
              handleSubmit={(id, value) => handleSubmit(id, value)}
              handleDelete={(id) => handleDelete(id)}
            />
          </Grid>
          <Grid item xs={1}/>
        </Grid>
      </Grid>
    </div>
  )
  
}

export default App 