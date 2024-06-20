import React, { useState } from "react";
import { Container, Typography, TextField, Button, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { withAuth } from 'views/dashboard/Default/login';

const useStyles = makeStyles((theme) => ({
  button: {
    //margin: theme.spacing(1),
  },
}));

function Calculator() {
  const [result, setResult] = useState(0);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const classes = useStyles();

  const handleValue1Change = (e) => {
    setValue1(e.target.value);
  };

  const handleValue2Change = (e) => {
    setValue2(e.target.value);
  };

  const handleAddition = () => {
    setResult(parseInt(value1) + parseInt(value2));
  };

  const handleSubtraction = () => {
    setResult(parseInt(value1) - parseInt(value2));
  };

  const handleMultiply = () => {
    setResult(parseInt(value1) * parseInt(value2));
  };

  const handleDivision = () => {
    setResult(parseInt(value1) / parseInt(value2));
  };

  const handleModulus = () => {
    setResult(parseInt(value1) % parseInt(value2));
  };

  const handlePower = () => {
    setResult(parseInt(value1) ** parseInt(value2));
  };


  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom><br/><br/>
        Calculator
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Enter a first value"
            variant="outlined"
            fullWidth
            value={value1}
            onChange={handleValue1Change}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Enter a second value"
            variant="outlined"
            fullWidth
            value={value2}
            onChange={handleValue2Change}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleAddition}
          >
            +
          </Button>&nbsp;&nbsp;
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleSubtraction}
          >
            -
          </Button>&nbsp;&nbsp;
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleMultiply}
          >
            *
          </Button>&nbsp;&nbsp;
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleDivision}
          >
            /
          </Button>&nbsp;&nbsp;
        </Grid>
         <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleModulus}
          >
           %
          </Button>&nbsp;&nbsp;
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handlePower}
          >
           POW
          </Button>&nbsp;&nbsp;
          </Grid>
           
        <Grid item xs={12}>
          <Typography variant="h6">Result: {result}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default withAuth(Calculator);
