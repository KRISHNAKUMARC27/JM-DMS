import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { TextField, InputLabel, Select, MenuItem, Grid, Button } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
function SparesCreate({ data, setSparesUpdateOpen, fetchAllSparesData }) {
  const [sparesDetails, setSparesDetails] = useState(data || {});
  const [sparesCategoryList, setSparesCategoryList] = useState([]);

  useEffect(() => {
    fetchAllSparesCategoryListData();

    return () => {
      setSparesDetails({});
      setSparesCategoryList([]);
    };
  }, []);

  useEffect(() => {
    setSparesDetails(data);
  }, [data]);

  const fetchAllSparesCategoryListData = () => {
    fetch(process.env.REACT_APP_API_URL + '/spares/sparesCategory')
      .then(async (response) => {
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText || response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setSparesCategoryList(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  function isSparesComplete() {
    return (
      sparesDetails.category &&
      sparesDetails.partNumber &&
      sparesDetails.desc &&
      sparesDetails.purchaseRate &&
      sparesDetails.qty &&
      sparesDetails.sellRate &&
      sparesDetails.amount &&
      sparesDetails.minThresh
    );
  }

  const saveSparesInventory = async (payload) => {
    await fetch(process.env.REACT_APP_API_URL + '/spares', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(async (response) => {
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText || response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        fetchAllSparesData();
        setSparesUpdateOpen(false);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleCategoryChange = (event) => {
    const updatedData = { ...sparesDetails, category: event.target.value };
    setSparesDetails(updatedData);
  };
  const handlePartNumberChange = (event) => {
    const updatedData = { ...sparesDetails, partNumber: event.target.value };
    setSparesDetails(updatedData);
  };
  const handleDescChange = (event) => {
    const updatedData = { ...sparesDetails, desc: event.target.value };
    setSparesDetails(updatedData);
  };
  const handlePurchaseRateChange = (event) => {
    const updatedData = { ...sparesDetails, purchaseRate: event.target.value };
    setSparesDetails(updatedData);
  };
  const handleQtyChange = (event) => {
    const qty = event.target.value; // Keep as string to allow decimal input
    const amount = parseFloat(qty) * (parseFloat(sparesDetails.sellRate) || 0);
    const roundedAmount = parseFloat(amount.toFixed(2)); // rounding to 2 decimal places
    const updatedData = { ...sparesDetails, qty: qty, amount: isNaN(roundedAmount) ? '' : roundedAmount };
    setSparesDetails(updatedData);
  };
  const handleSellRateChange = (event) => {
    const sellRate = event.target.value; // Keep as string to allow decimal input
    const amount = (parseFloat(sellRate) || 0) * parseFloat(sparesDetails.qty || 0);
    const roundedAmount = parseFloat(amount.toFixed(2)); // rounding to 2 decimal places
    const updatedData = { ...sparesDetails, sellRate: sellRate, amount: isNaN(roundedAmount) ? '' : roundedAmount };
    setSparesDetails(updatedData);
  };

  // const handleAmountChange = (event) => {
  //   const updatedData = { ...sparesDetails, amount: event.target.value };
  //   setSparesDetails(updatedData);
  // };
  const handleMinThreshChange = (event) => {
    const updatedData = { ...sparesDetails, minThresh: event.target.value };
    setSparesDetails(updatedData);
  };
  const handleRackChange = (event) => {
    const updatedData = { ...sparesDetails, rack: event.target.value };
    setSparesDetails(updatedData);
  };
  const handleMisc1Change = (event) => {
    const updatedData = { ...sparesDetails, misc1: event.target.value };
    setSparesDetails(updatedData);
  };
  const handleMisc2Change = (event) => {
    const updatedData = { ...sparesDetails, misc2: event.target.value };
    setSparesDetails(updatedData);
  };
  const handleMisc3Change = (event) => {
    const updatedData = { ...sparesDetails, misc3: event.target.value };
    setSparesDetails(updatedData);
  };

  return (
    <div>
      <MainCard title="Enter Spares Details">
        <Grid container direction="row" spacing={gridSpacing}>
          <Grid item xs={3}>
            <InputLabel id="demo-select-small" required>
              Category Type
            </InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={sparesDetails.category || ''}
              label="Category Type"
              onChange={handleCategoryChange}
            >
              {sparesCategoryList.map((option) => (
                <MenuItem key={option.id} value={option.category}>
                  {option.category}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={3}>
            <br></br>
            <TextField
              label="PartNo./Type"
              required
              variant="outlined"
              value={sparesDetails.partNumber || ''}
              onChange={handlePartNumberChange}
            />
          </Grid>
          <Grid item xs={6}>
            <br></br>
            <TextField
              label="Spares Description"
              required
              variant="standard"
              fullWidth
              value={sparesDetails.desc || ''}
              onChange={handleDescChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField label="Quantity" required variant="outlined" value={sparesDetails.qty || ''} onChange={handleQtyChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Minimum Threshold"
              required
              variant="outlined"
              value={sparesDetails.minThresh || ''}
              onChange={handleMinThreshChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Purchase Rate"
              required
              variant="outlined"
              value={sparesDetails.purchaseRate || ''}
              onChange={handlePurchaseRateChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField label="Sell Rate" required variant="outlined" value={sparesDetails.sellRate || ''} onChange={handleSellRateChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Amount"
              variant="standard"
              value={sparesDetails.amount || ''}
              InputProps={{
                readOnly: true
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField label="Rack/Bin" variant="standard" fullWidth value={sparesDetails.rack || ''} onChange={handleRackChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField label="Misc 1" variant="standard" fullWidth value={sparesDetails.misc1 || ''} onChange={handleMisc1Change} />
          </Grid>
          <Grid item xs={4}>
            <TextField label="Misc 2" variant="standard" fullWidth value={sparesDetails.misc2 || ''} onChange={handleMisc2Change} />
          </Grid>
          <Grid item xs={4}>
            <TextField label="Misc 3" variant="standard" fullWidth value={sparesDetails.misc3 || ''} onChange={handleMisc3Change} />
          </Grid>
        </Grid>
      </MainCard>
      <br></br>
      <div className="content">
        {isSparesComplete() && (
          <Button variant="contained" color="error" onClick={() => saveSparesInventory(sparesDetails)}>
            Add/Update Spares
          </Button>
        )}
      </div>
    </div>
  );
}

SparesCreate.propTypes = {
  data: PropTypes.object,
  setSparesUpdateOpen: PropTypes.func,
  fetchAllSparesData: PropTypes.func
};
export default SparesCreate;
