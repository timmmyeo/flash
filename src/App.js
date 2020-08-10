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
          content: "howdy"
        },
        {
          id: 4,
          title: "yay", 
          subtitle: "more",
          content: "zoinks"
        },
        {
          id: 5,
          title: "title2", 
          subtitle: "subtitle2",
          content: "yikes"
        },
        {
          id: 6,
          title: "title2", 
          subtitle: "subtitle2",
          content: "jeepers"
        },
      ],
    }
  }

  

  handleSubmit = (e, id, content) => {
    this.setState({
      flashcards: this.state.flashcards.map(flashcard => {
        if (flashcard.id === id) flashcard.content = content;
        return (
          flashcard
        )
        })
    })
    this.handleClose();
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
              <CardGrid 
                handleSubmit={(e) => this.handleSubmit(e)} 
                handleClose={() => this.handleClose()}
                handleOpen={() => this.handleOpen()}
                flashcards={this.state.flashcards}
                open={this.state.open}
              />
            </Grid>
            <Grid item xs={1}/>
          </Grid>
        </Grid>
      </div>
    )
  }
  
}

export default App 