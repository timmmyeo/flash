import React from "react";
import { Card, CardContent, Typography, CardActions, Button, IconButton, Grid} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import EditFlashcardDialog from "./EditFlashcardDialog";
import { useState } from 'react';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


function FlashCard(props) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleSubmit = (e, id, newFlashcard) => {
    e.preventDefault();
    props.onSubmit(id, newFlashcard);
    handleClose();
  }

  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.flashcard.title}
          </Typography>
          <br />
          <Typography className={classes.pos} color="textSecondary">
            {props.flashcard.subtitle}
          </Typography>
          <Typography variant="body2" component="p">
            {props.flashcard.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Grid container>
            <Grid item xs={2} md={2} align="center">
              <Button 
                variant="outlined" 
                color="primary" 
                size="small" 
                onClick={handleOpen}>
                  Edit
                </Button>
            </Grid>
            <Grid item xs={8} md={8}/>
            <Grid item xs={2} md={2} align="center">
              <IconButton 
                variant="contained" 
                color="secondary" 
                aria-label="delete"
                onClick={() => props.handleDelete(props.flashcard.id)}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
      <EditFlashcardDialog 
        open={open} 
        handleClose={handleClose}
        onSubmit={(e, id, newFlashcard) => handleSubmit(e, id, newFlashcard)}
        flashcard={props.flashcard}
      />
    </div>
  )
}

export default FlashCard