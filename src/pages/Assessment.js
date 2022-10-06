import * as React from 'react';
import { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
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

const Assessment = () => {
  const [payments, setPayments] = useState('annualy');
  const [withdrawnAmount, setWithdrawnAmount] = useState('');
  const [selectedDate, handleDateChange] = useState(new Date());

  const handlePayment = (e) => {
    setPayments(e.target.value);
  };

  const handleWithdrawnAmount = (e) => {
    setWithdrawnAmount(e.target.value.replace(/\D/g, ''));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      payments: data.get('payments'),
      withdrawnAmount: data.get('withdrawnAmount'),
      date: data.get('date'),
    });
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
            name="payments"
            labelId="payments"
            id="payments"
            value={payments}
            onChange={handlePayment}
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
            name="withdrawnAmount"
            label="Withdrawn amount(£)"
            id="withdrawnAmount"
            value={withdrawnAmount}
            onChange={handleWithdrawnAmount}
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
            name="date"
            value={selectedDate}
            onChange={(date) => handleDateChange(date)}
          />
        </MuiPickersUtilsProvider>
        <Button type="submit" fullWidth variant="outlined" size="large">
          Evaluate
        </Button>
      </Box>
    </Box>
  );
};

export default Assessment;
