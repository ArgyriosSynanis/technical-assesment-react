import React, { useContext, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { acceptWithdrawalMock } from '../api';
import { useSnackbar } from 'notistack';
import AuthContext from '../context/auth/AuthContext';
import {
  Typography,
  Box,
  Button,
  styled,
  CircularProgress,
} from '@material-ui/core';
import {
  Chart,
  Series,
  ArgumentAxis,
  CommonSeriesSettings,
  Legend,
  Margin,
  Tooltip,
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
  const location = useLocation();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const authCtx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const graphData = location.state.illustration;
  const { frequency, amount, startDate } = location.state.form;
  const formatedDated = startDate.toLocaleString('en-UK', {
    year: 'numeric',
    month: '2-digit',
    day: 'numeric',
  });
  const vowel = frequency === 'annualy' ? 'an' : 'a';

  const submitWithdrawn = async (id) => {
    setIsLoading(true);
    try {
      const result = await acceptWithdrawalMock(authCtx.authToken);
      if (result) {
        history.push('/submitted', {});
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      enqueueSnackbar('Something went wrong', {
        variant: 'error',
      });
    }
  };

  const handleClick = (e) => {
    e.preventDefault();

    submitWithdrawn(authCtx.authToken);
  };

  return (
    <Box>
      <Typography variant="h2">Your Summary</Typography>
      <Typography variant="h5">
        {`You have selected ${vowel} ${frequency} withdrawal of £${amount} starting on
        ${formatedDated}.`}
      </Typography>
      <>
        <Chart palette="Violet" dataSource={graphData}>
          <CommonSeriesSettings argumentField="country" />

          {graphData.map((item) => (
            <Series key={item.age} valueField={item.age} name={item.age} />
          ))}

          <Margin bottom={20} />
          <ArgumentAxis
            valueMarginsEnabled={false}
            discreteAxisDivisionMode="crossLabels"
          >
            <Grid visible={true} />
          </ArgumentAxis>
          <Legend
            verticalAlignment="bottom"
            horizontalAlignment="center"
            itemTextPosition="bottom"
          />

          <Tooltip enabled={true} />
        </Chart>
      </>
      <ColorButton onClick={handleClick} variant="contained">
        {!isLoading ? 'SUBMIT WITHDRAWN' : <CircularProgress />}
      </ColorButton>
    </Box>
  );
}
