import React from "react"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid'

export default function PlayFlash(props) {
  const [i, setI] = React.useState(3);
  const [revealed, setRevealed] = React.useState(false);

  const flashcard = props.flashcards[i];
  
  const theme = useTheme();

  const handleNext = () => {
    setI((i) => i + 1);
  };

  const handleBack = () => {
    setI((i) => i - 1);
  };

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

  const classes = useStyles();

  return (
    <>
    <Container maxWidth="lg">
    {/* Can I abstract this out by using the FlashCard Component? */}
    <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {flashcard.title}
          </Typography>
          <br />
          <Typography className={classes.pos} color="textSecondary">
            {flashcard.subtitle}
          </Typography>
          {revealed && 
          <Typography variant="body2" component="p">
            {flashcard.content}
          </Typography>
          }       
        </CardContent>
        <CardActions>
          <Grid container>
            <Grid item xs={2} md={2} align="center">
            </Grid>
            <Grid item xs={8} md={8}/>
            <Grid item xs={2} md={2} align="center">
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Container>
      

      <MobileStepper
        variant="progress"
        steps={props.flashcards.length}
        //position="static"
        activeStep={i}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={i === props.flashcards.length - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={i === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </>
  )
}