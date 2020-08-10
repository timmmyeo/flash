import React from "react"
import { Grid } from "@material-ui/core";
import Header from "./Header"
import CardGrid from "./CardGrid"
import AddNewCard from "./AddNewCard"

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
    {
      id: 7,
      title: "6a", 
      subtitle: "subtitle6",
      content: "this is some more tex6"
    },
    {
      id: 8,
      title: "6a", 
      subtitle: "subtitle6",
      content: "this is some more tex6"
    },
    {
      id: 9,
      title: "6a", 
      subtitle: "subtitle6",
      content: "this is some more tex6"
    },
    {
      id: 10,
      title: "6a", 
      subtitle: "subtitle6",
      content: "this is some more tex6"
    },
    {
      id: 11,
      title: "6a", 
      subtitle: "subtitle6",
      content: "this is some more tex6"
    },
    {
      id: 12,
      title: "6a", 
      subtitle: "subtitle6",
      content: "this is some more tex6"
    },
    {
      id: 13,
      title: "6a", 
      subtitle: "subtitle6",
      content: "this is some more tex6"
    },
    {
      id: 14,
      title: "6a", 
      subtitle: "subtitle6",
      content: "this is some more tex6"
    },
    {
      id: 15,
      title: "6a", 
      subtitle: "subtitle6",
      content: "this is some more tex6"
    },
  ]);

  const handleSubmit = (id, newFlashcard) => {
    setFlashcards(prevState => {
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
          id: 16,
          title: "NEW", 
          subtitle: "NEW",
          content: "this is some more tex6"
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
              handleSubmit={(id, newFlashcard) => handleSubmit(id, newFlashcard)}
              handleDelete={(id) => handleDelete(id)}
            />
          </Grid>
          <Grid item xs={1}/>
        </Grid>
      </Grid>
      <br />
        <AddNewCard 
          onSubmit={(id, newFlashcard) => handleSubmit(id, newFlashcard)}
        />
      <br />
    </div>
  )
  
}

export default App 