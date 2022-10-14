import React from 'react';
import { Typography, Box, Button, styled } from '@material-ui/core';
import { evaluationApiMock } from '../api';
import SelectBox from 'devextreme-react/select-box';
import {
  Chart,
  Series,
  ArgumentAxis,
  CommonSeriesSettings,
  Export,
  Legend,
  Margin,
  Grid,
} from 'devextreme-react/chart';

const ColorButton = styled(Button)(() => ({
  color: '#ffffff',
  backgroundColor: '#283b8e',
  '&:hover': {
    backgroundColor: '#202f72',
  },
}));

export default function Summary() {
  const summaryData = JSON.parse(localStorage.getItem('data'));
  const frequency = summaryData.frequency,
    amount = summaryData.amount,
    startDate = summaryData.startDate,
    vowel = frequency === 'annualy' ? 'an' : 'a';

  const newData = evaluationApiMock(frequency, amount, startDate);
  console.log(newData);

  return (
    <Box>
      <Typography variant="h1">Your Summary</Typography>
      <Typography variant="h5">
        You have selected {vowel} {frequency} withdrawal of £{amount} starting
        on {startDate}.
      </Typography>
      <ColorButton variant="contained" sx={{ backgroundColour: 'purple' }}>
        SUBMIT WITHDRAWN
      </ColorButton>
    </Box>
  );
}
