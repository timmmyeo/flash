import React from "react"
import { Grid } from "@material-ui/core";
import Header from "./Header"
import CardGrid from "./CardGrid"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      flashcards: [
        {
          title: "title", 
          subtitle: "subtitle1",
          content: "this is some text"
        },
        {
          title: "title2", 
          subtitle: "subtitle2",
          content: "this is some more text"
        },
        {
          title: "title3", 
          subtitle: "3",
          content: "this is some more text"
        },
        {
          title: "yay", 
          subtitle: "more",
          content: "this is some more text"
        },
        {
          title: "title2", 
          subtitle: "subtitle2",
          content: "this is some more text"
        },
        {
          title: "title2", 
          subtitle: "subtitle2",
          content: "this is some more text"
        },
      ],
    }
  }

  

  render() {
    return(
      <div>
        <Grid container direction="column">
          <Grid item>
            <Header />
          </Grid>
          <Grid item container>
            <Grid item xs={1}/>
            <Grid item xs={10}>
              <CardGrid flashcards={this.state.flashcards}/>
            </Grid>
            <Grid item xs={1}/>
          </Grid>
        </Grid>
      </div>
    )
  }
  
}

export default App 