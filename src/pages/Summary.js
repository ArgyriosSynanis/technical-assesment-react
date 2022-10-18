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
  ValueAxis,
  Title,
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
        setIsLoading(false);
        history.push('/submitted', {});
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
      <React.Fragment>
        <Chart palette="Soft Blue" dataSource={graphData}>
          <CommonSeriesSettings argumentField="age" type="line" />
          <Series
            key="Remaining Funds"
            valueField="fundValue"
            name="Remaining Funds"
          />
          <Margin bottom={20} />
          <ValueAxis pane="top">
            <Grid visible={true} />
            <Title text="Remaining funds" />
          </ValueAxis>
          <ArgumentAxis
            valueMarginsEnabled={false}
            discreteAxisDivisionMode="crossLabels"
          >
            <Grid visible={true} />
            <Title text="Age" />
          </ArgumentAxis>
          <Legend
            verticalAlignment="bottom"
            horizontalAlignment="center"
            itemTextPosition="bottom"
          />
          <Tooltip enabled={true} />
        </Chart>
      </React.Fragment>
      <ColorButton onClick={handleClick} variant="contained">
        {!isLoading ? 'SUBMIT WITHDRAWN' : <CircularProgress />}
      </ColorButton>
    </Box>
  );
}
