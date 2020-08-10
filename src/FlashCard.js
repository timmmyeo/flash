import React from "react";
import { Card, CardContent, Typography, CardActions, Button, IconButton, Grid} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import EditFlashcard from "./EditFlashcard";

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
  //const [open, setOpen] = useState(false);

  // const handleClose = () => {
  //   setOpen(false);
  // };
  
  // const handleOpen = () => {
  //   setOpen(true);
  // };

  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.title}
          </Typography>
          <br />
          <Typography className={classes.pos} color="textSecondary">
            {props.subtitle}
          </Typography>
          <Typography variant="body2" component="p">
            {props.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Grid container>
            <Grid item xs={2} md={2} align="center">
              <Button 
                variant="outlined" 
                color="primary" 
                size="small" 
                onClick={props.handleOpen}>
                  Edit
                </Button>
            </Grid>
            <Grid item xs={8} md={8}/>
            <Grid item xs={2} md={2} align="center">
              <IconButton variant="contained" color="secondary" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
      {/* This is the dialog box for editing the flashcard */}
      <EditFlashcard
        handleClose = {props.handleClose}
        handleOpen = {props.handleOpen} 
        handleSubmit={(e) => props.handleSubmit(e)} 
        content={props.content} 
        open={props.open}
      />
    </div>
  )
}

export default FlashCard