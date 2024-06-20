import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Stepper, Step, StepLabel,StepConnector } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withAuth } from 'views/dashboard/Default/login';

const useStyles = makeStyles((theme) => ({
  sample: {
    textAlign: 'center',
    paddingTop: theme.spacing(4),
    height: '80vh', // updated
    width: '100vw', // updated
  },
  
  textField: {
    margin: theme.spacing(1),
  },

  button: {
    marginTop: theme.spacing(2),
  },

  duration: {
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 150,
    overflowX: 'auto',
  },

  stepper: {
    backgroundColor: 'transparent',
    marginBottom: theme.spacing(4),
    display: 'flex',
    flexDirection: 'row', // updated
    alignItems: 'center', // updated
  },

  stepLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#777',
    textTransform: 'uppercase',
    margin: `0 ${theme.spacing(2)}px`,
    whiteSpace: 'nowrap',
    textAlign: 'center',
    padding: theme.spacing(1, 1),
    width: 80, // reduce width
    display: 'flex', // display as flex
    alignItems: 'center', // align items to center
    justifyContent: 'center', // justify content to center
  },

  step: {
    '& .MuiStepIcon-root': {
    color: '#245953', // updated color of icon
    },
  },

 connector: {
  borderColor: '#245953',
  borderRightWidth: 20,
  marginRight: -10, // add borderRightWidth with desired width
  marginLeft: -10, // add marginLeft with half of the width of the connector
  borderRadius: 1,
  borderStyle: 'solid',
  height: 0, // add height to 0
  marginTop: 'auto', // add marginTop to center connector line
  marginBottom: 'auto', // add marginBottom to center connector line
},

}));

function TimeLine() {
  const classes = useStyles();
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [duration, setDuration] = useState([]);
  const [activeStep, setActiveStep] = useState(0);

  const handleStartChange = (event) => {
    setStart(event.target.value);
  };

  const handleEndChange = (event) => {
    setEnd(event.target.value);
  };

  const handleCalculate = () => {
    const startTime = new Date(start);
    const endTime = new Date(end);
    const oneHour = 60 * 60 * 1000; // milliseconds in an hour

    const newDuration = [];

    for (let i = startTime.getTime(); i <= endTime.getTime(); i += oneHour) {
      newDuration.push(new Date(i));
    }

    setDuration(newDuration);
    setActiveStep(1);
  };

  const handleReset = () => {
    setStart('');
    setEnd('');
    setDuration([]);
    setActiveStep(0);
  };

  return (
    <Container className={classes.sample}>
      <Typography variant="h4">Delivery Tracking</Typography>
      {activeStep === 0 && (
        <>
       <TextField
          InputLabelProps={{ shrink: true, }}
          inputProps={{ 'aria-label': 'start time' }}
          label="Start"
          type="datetime-local"
          value={start}
          onChange={handleStartChange}
          className={classes.textField}
      />
      <br />
      <TextField
          InputLabelProps={{ shrink: true, }}
          inputProps={{ 'aria-label': 'end time' }}
          label="End"
          type="datetime-local"
          value={end}
          onChange={handleEndChange}
          className={classes.textField}
    />
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={handleCalculate}
            className={classes.button}
          >
            Calculate Duration
          </Button>
        </>
      )}
      {activeStep === 1 && (
        <>
        <div className={classes.duration}>
      <Stepper
        activeStep={duration.length}
        className={classes.stepper}
        connector={<StepConnector classes={{ line: classes.connector }} />}
        alternativeLabel={true}
        >
        {duration.map((item, index) => (
        <Step key={index} classes={{ root: classes.step }}>
            <StepLabel className={classes.stepLabel}>
              {item.toLocaleString('default', { month: 'short', day: 'numeric' })}
          <br />
            {item.toLocaleString('default', { hour: 'numeric', minute: 'numeric' })}
          </StepLabel>
          </Step>
           ))}
      </Stepper>

    </div>

          <Button
            variant="contained"
            color="secondary"
            onClick={handleReset}
            className={classes.button}
          >
            Reset
          </Button>
        </>
      )}
    </Container>
  );
}

export default withAuth(TimeLine);
