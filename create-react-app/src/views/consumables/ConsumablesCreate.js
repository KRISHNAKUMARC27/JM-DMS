import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { TextField, InputLabel, Select, MenuItem, Grid, Button } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { getRequest, postRequest } from 'utils/fetchRequest';

function ConsumablesCreate({ data, setConsumablesUpdateOpen, fetchAllConsumablesData }) {
  const [consumablesDetails, setConsumablesDetails] = useState(data || {});
  const [consumablesCategoryList, setConsumablesCategoryList] = useState([]);
  const [showAlert, setShowAlert] = React.useState(false);
  const [alertMess, setAlertMess] = React.useState('');
  const [alertColor, setAlertColor] = React.useState('');

  useEffect(() => {
    fetchAllConsumablesCategoryListData();

    return () => {
      setConsumablesDetails({});
      setConsumablesCategoryList([]);
    };
  }, []);

  useEffect(() => {
    setConsumablesDetails(data || {});
  }, [data]);

  const fetchAllConsumablesCategoryListData = async () => {
    try {
      const data = await getRequest(process.env.REACT_APP_API_URL + '/consumables/consumablesCategory');
      setConsumablesCategoryList(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  function isConsumablesComplete() {
    return consumablesDetails.category && consumablesDetails.desc;
  }

  const saveConsumablesInventory = async (payload) => {
    try {
      const data = await postRequest(process.env.REACT_APP_API_URL + '/consumables', payload);
      if (fetchAllConsumablesData) {
        fetchAllConsumablesData();
      }
      if (setConsumablesUpdateOpen) {
        setConsumablesUpdateOpen(false);
      }
      setAlertMess(data.desc + ' added successfully ');
      setAlertColor('success');
      setShowAlert(true);
      console.log(data);
    } catch (err) {
      console.log(err.message);
      setAlertMess(err.message);
      setAlertColor('info');
      setShowAlert(true);
    }
  };

  const handleCategoryChange = (event) => {
    const updatedData = { ...consumablesDetails, category: event.target.value };
    setConsumablesDetails(updatedData);
  };
  const handleDescChange = (event) => {
    const updatedData = { ...consumablesDetails, desc: event.target.value };
    setConsumablesDetails(updatedData);
  };
  // const handleAmountChange = (event) => {
  //   const updatedData = { ...consumablesDetails, amount: event.target.value };
  //   setConsumablesDetails(updatedData);
  // };

  return (
    <div>
      <MainCard title="Enter Consumables Details">
        <Grid container direction="row" spacing={gridSpacing}>
          <Grid item xs={3}>
            <InputLabel id="demo-select-small" required>
              Category Type
            </InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={consumablesDetails.category || ''}
              label="Category Type"
              onChange={handleCategoryChange}
            >
              {consumablesCategoryList.map((option) => (
                <MenuItem key={option.id} value={option.category}>
                  {option.category}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={6}>
            <br></br>
            <TextField
              label="Consumables Description"
              required
              variant="standard"
              fullWidth
              value={consumablesDetails.desc || ''}
              onChange={handleDescChange}
            />
          </Grid>
          {/* <Grid item xs={4}>
            <TextField label="Amount" required variant="outlined" value={consumablesDetails.amount || ''} onChange={handleAmountChange} />
          </Grid> */}
        </Grid>
      </MainCard>
      <br></br>
      <div className="content">
        {isConsumablesComplete() && (
          <Button variant="contained" color="error" onClick={() => saveConsumablesInventory(consumablesDetails)}>
            Add/Update Consumables
          </Button>
        )}
      </div>
      {showAlert && (
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert variant="filled" severity={alertColor} onClose={() => setShowAlert(false)}>
            {alertMess}
          </Alert>
        </Stack>
      )}
    </div>
  );
}

ConsumablesCreate.propTypes = {
  data: PropTypes.object,
  setConsumablesUpdateOpen: PropTypes.func,
  fetchAllConsumablesData: PropTypes.func
};
export default ConsumablesCreate;
