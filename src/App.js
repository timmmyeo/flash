import React from "react"
import { Grid } from "@material-ui/core";
import Header from "./Header"
import EditAllCards from "./EditAllCards"
import PlayFlash from "./PlayFlash";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

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

  

  return(
    <div>
      <Grid container direction="column">

        <Grid item>
          <Header />
        </Grid>
        
        <Grid item>
          <Router>
            <Route exact path="/edit">
              <EditAllCards 
                flashcards={flashcards} 
                setFlashcards={setFlashcards}
              />
            </Route>

            <Route exact path="/">
              <PlayFlash flashcards={flashcards}/>
            </Route>
          </Router>
        </Grid>

        <Grid item>

        </Grid>

      </Grid>
    </div>
  )
  
}

export default App 