import React from "react"
import { Grid } from "@material-ui/core";
import Header from "./Header"
import EditAllCards from "./EditAllCards"
import PlayFlash from "./PlayFlash";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

function App() {
  const [flashcards, setFlashcards] = React.useState([
    { 
      id: 1,
      title: "This is an example title", 
      subtitle: "This is an example subtitle",
      content: "This is some text"
  ]);

  

  return(
    <div>
      <Grid container direction="column">

        <Grid item>
          <Header />
        </Grid>
        
        <Grid item>
          <Router>
            <Switch>
            <Route exact path="/">
              <PlayFlash flashcards={flashcards}/>
            </Route>

            <Route exact path="/edit">
              <EditAllCards 
                flashcards={flashcards} 
                setFlashcards={setFlashcards}
              />
            </Route>
            </Switch>
          </Router>
        </Grid>

        <Grid item>

        </Grid>

      </Grid>
    </div>
  )
  
}

export default App 