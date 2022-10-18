import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns';
import { evaluationApiMock } from '../api';
import { useSnackbar } from 'notistack';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import {
  makeStyles,
  Typography,
  TextField,
  Select,
  Button,
  Box,
  FormControl,
  MenuItem,
  CircularProgress,
} from '@material-ui/core';

export default function Assessment() {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    frequency: 'annualy',
    amount: '',
    startDate: new Date(),
  });

  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const handleForm = (e, property) => {
    const isDate = property === 'startDate';
    const formValue = isDate ? e : e.target.value;
    setForm((prevForm) => {
      return { ...prevForm, [property]: formValue };
    });
  };

  const evaluate = async ({ frequency, amount, startDate }) => {
    setIsLoading(true);
    try {
      const result = await evaluationApiMock(frequency, amount, startDate);
      if (result) {
        history.push('/summary', {
          ...result,
          form,
        });
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      enqueueSnackbar('Something went wrong', {
        variant: 'error',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formatedDated = form.startDate.toLocaleString('en-UK', {
      year: 'numeric',
      month: '2-digit',
      day: 'numeric',
    });

    if (form.amount.length === 0) {
      return enqueueSnackbar('Please type in a Widthdrawn amount(&)', {
        variant: 'error',
      });
    }

    if (!/^[0-9]+$/.test(form.amount)) {
      return enqueueSnackbar('Widthdrawn amount must be a number', {
        variant: 'error',
      });
    }

    evaluate({
      frequency: form.frequency,
      amount: form.amount,
      startDate: formatedDated,
    });
  };

  const fieldStyles = makeStyles({
    marginTop: {
      marginTop: '0.5rem',
    },
    datePicker: {
      margin: '0.5rem 0 2rem 0',
    },
  });

  const classes = fieldStyles();

  return (
    <Box>
      <Typography variant="h2">Assessment</Typography>
      <Typography variant="body1">
        Please enter your new drawdown options
      </Typography>

      <Box component="form" onSubmit={handleSubmit} noValidate>
        <FormControl fullWidth className={classes.marginTop}>
          <Select
            name="frequency"
            labelId="frequency"
            id="frequency"
            value={form.frequency}
            onChange={(e) => handleForm(e, 'frequency')}
          >
            <MenuItem value={'weekly'}>Weekly</MenuItem>
            <MenuItem value={'monthly'}>Monthly</MenuItem>
            <MenuItem value={'annualy'}>Annualy</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth className={classes.marginTop}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            name="amount"
            label="Withdrawn amount(£)"
            id="amount"
            value={form.amount}
            onChange={(e) => handleForm(e, 'amount')}
          />
        </FormControl>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            clearable
            fullWidth
            className={classes.datePicker}
            minDate={new Date()}
            maxDate={
              new Date(new Date().setFullYear(new Date().getFullYear() + 1))
            }
            maxDateMessage="Date should be within the next year"
            format="dd/MM/yyyy"
            name="startDate"
            value={form.startDate}
            onChange={(date) => {
              handleForm(date, 'startDate');
            }}
          />
        </MuiPickersUtilsProvider>
        <Button type="submit" fullWidth variant="outlined" size="large">
          {!isLoading ? 'EVALUATE' : <CircularProgress />}
        </Button>
      </Box>
    </Box>
  );
}
