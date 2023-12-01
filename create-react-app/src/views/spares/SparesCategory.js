import React, { useState, useEffect } from 'react';

import { Table, TableBody, TableCell, TableHead, TableRow, Button, TextField, Grid } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

function SparesCategory() {
  const [sparesCategory, setSparesCategory] = useState({});
  const [sparesCategoryList, setSparesCategoryList] = useState([]);

  useEffect(() => {
    fetchAllSparesCategoryListData();

    return () => {
      setSparesCategory({});
      setSparesCategoryList([]);
    };
  }, []);

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

  function isSparesCategoryComplete() {
    return sparesCategory.category;
  }

  const submitSparesCategory = () => {
    const sparesCat = {
      category: sparesCategory.category
    };
    saveSparesCategory(sparesCat);
  };

  const saveSparesCategory = async (payload) => {
    await fetch(process.env.REACT_APP_API_URL + '/spares/saveSparesCategory', {
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
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleCategoryChange = (event) => {
    const updatedData = { ...sparesCategory, category: event.target.value };
    setSparesCategory(updatedData);
  };

  return (
    <div>
      <MainCard title="Spares Category Details">
        <Grid container direction="row" spacing={gridSpacing}>
          <Grid item xs={4}>
            <br></br>
            <TextField
              label="Enter Spares Category"
              required
              variant="outlined"
              value={sparesCategory.category || ''}
              onChange={handleCategoryChange}
            />
          </Grid>
          <Grid item xs={12}>
            <br></br>
            <div className="content">
              {isSparesCategoryComplete() && (
                <Button variant="contained" color="error" onClick={() => submitSparesCategory()}>
                  Create Spares Category
                </Button>
              )}
            </div>
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={3}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Spares Category</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sparesCategoryList.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row?.category}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Grid>
          </Grid>
        </Grid>
      </MainCard>
    </div>
  );
}

export default SparesCategory;
