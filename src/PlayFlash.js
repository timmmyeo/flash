import React from "react"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

export default function PlayFlash(props) {
  const [i, setI] = React.useState(3);

  const flashcard = props.flashcards[i];
  
  const theme = useTheme();

  const handleNext = () => {
    setI((i) => i + 1);
  };

  const handleBack = () => {
    setI((i) => i - 1);
  };

  return (
    <>
      <h1>{flashcard.title}</h1>
      <h2>{flashcard.subtitle}</h2>
      <h3>{flashcard.content}</h3>
      

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