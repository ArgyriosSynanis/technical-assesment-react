import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns';
import { useSnackbar } from 'notistack';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import {
  Typography,
  TextField,
  Select,
  Button,
  Box,
  FormControl,
  MenuItem,
} from '@material-ui/core';

export default function Assessment() {
  const [frequency, setFrequency] = useState('annualy');
  const [amount, setAmount] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const handleFrequency = (e) => {
    setFrequency(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value.replace(/\D/g, ''));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (amount.length === 0) {
      return enqueueSnackbar('Please type in a Widthdrawn amount(&)', {
        variant: 'error',
      });
    }

    const data = new FormData(event.currentTarget);
    const summaryData = {
      frequency: data.get('frequency'),
      amount: data.get('amount'),
      startDate: data.get('startDate'),
    };

    localStorage.setItem('data', JSON.stringify(summaryData));

    console.log({
      frequency: data.get('frequency'),
      amount: data.get('amount'),
      startDate: data.get('startDate'),
    });

    history.push('/summary');
  };

  return (
    <Box>
      <Typography variant="h1">Assessment</Typography>
      <Typography variant="body1">
        Please enter your new drawdown options
      </Typography>

      <Box component="form" onSubmit={handleSubmit} noValidate>
        <FormControl fullWidth>
          <Select
            name="frequency"
            labelId="frequency"
            id="frequency"
            value={frequency}
            onChange={handleFrequency}
          >
            <MenuItem value={'weekly'}>Weekly</MenuItem>
            <MenuItem value={'monthly'}>Monthly</MenuItem>
            <MenuItem value={'annualy'}>Annualy</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <TextField
            variant="outlined"
            margin="normal"
            required
            name="amount"
            label="Withdrawn amount(£)"
            id="amount"
            value={amount}
            onChange={handleAmount}
          />
        </FormControl>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            clearable
            fullWidth
            minDate={new Date()}
            maxDate={
              new Date(new Date().setFullYear(new Date().getFullYear() + 1))
            }
            maxDateMessage="Date should be within the next year"
            format="dd/MM/yyyy"
            name="startDate"
            value={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </MuiPickersUtilsProvider>
        <Button type="submit" fullWidth variant="outlined" size="large">
          Evaluate
        </Button>
      </Box>
    </Box>
  );
}
