import React, { useState, useEffect } from 'react';

import { Table, TableBody, TableCell, TableHead, TableRow, Button, TextField, Grid, IconButton, Tooltip } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function LaborCategory() {
  const [laborCategory, setLaborCategory] = useState({});
  const [laborCategoryList, setLaborCategoryList] = useState([]);
  const [oldCategory, setOldCategory] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [showAlert, setShowAlert] = React.useState(false);
  const [alertMess, setAlertMess] = React.useState('');
  const [alertColor, setAlertColor] = React.useState('');

  useEffect(() => {
    fetchAllLaborCategoryListData();

    return () => {
      setLaborCategory({});
      setLaborCategoryList([]);
    };
  }, []);

  const fetchAllLaborCategoryListData = () => {
    fetch(process.env.REACT_APP_API_URL + '/labor/laborCategory')
      .then(async (response) => {
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText || response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setLaborCategoryList(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  function isLaborCategoryComplete() {
    return laborCategory.category;
  }

  const submitLaborCategory = () => {
    const laborCat = {
      category: laborCategory.category
    };
    saveLaborCategory(laborCat);
  };

  const saveLaborCategory = async (payload) => {
    await fetch(process.env.REACT_APP_API_URL + '/labor/saveLaborCategory', {
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
        setAlertMess('LaborCategory ' + data.category + ' created successfully');
        setAlertColor('success');
        setShowAlert(true);
        setLaborCategory({});
        fetchAllLaborCategoryListData();
        console.log(data);
      })
      .catch((err) => {
        setAlertMess(err.message);
        setAlertColor('info');
        setShowAlert(true);
      });
  };

  const handleCategoryChange = (event) => {
    const updatedData = { ...laborCategory, category: event.target.value };
    setLaborCategory(updatedData);
  };

  const handleRowDelete = async (rowIndex) => {
    await fetch(process.env.REACT_APP_API_URL + '/labor/laborCategory/' + rowIndex, {
      method: 'DELETE',
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
        setAlertMess('LaborCategory ' + data.category + ' deleted successfully');
        setAlertColor('success');
        setShowAlert(true);
        fetchAllLaborCategoryListData();
      })
      .catch((err) => {
        setAlertMess(err.message);
        setAlertColor('info');
        setShowAlert(true);
      });
  };

  const handleInputChange = (oldValue, newValue, index, column) => {
    const newRows = [...laborCategoryList];
    newRows[index][column] = newValue;
    setLaborCategoryList(newRows);
    setOldCategory(oldValue);
    setNewCategory(newValue);
  };

  const updateLaborCategory = () => {
    fetch(process.env.REACT_APP_API_URL + '/labor/laborCategory/' + oldCategory + '/' + newCategory, {
      method: 'PUT',
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
        setAlertMess('LaborCategory ' + data.category + ' updated successfully');
        setAlertColor('success');
        setShowAlert(true);
        setOldCategory('');
        setNewCategory('');
        fetchAllLaborCategoryListData();
      })
      .catch((err) => {
        setAlertMess(err.message);
        setAlertColor('info');
        setShowAlert(true);
        setOldCategory('');
        setNewCategory('');
      });
  };

  return (
    <div>
      <MainCard title="Labor Category Details">
        <Grid container direction="row" spacing={gridSpacing}>
          <Grid item xs={4}>
            <br></br>
            <TextField
              label="Enter Labor Category"
              required
              variant="outlined"
              value={laborCategory.category || ''}
              onChange={handleCategoryChange}
            />
          </Grid>
          <Grid item xs={12}>
            <br></br>
            <div className="content">
              {isLaborCategoryComplete() && (
                <Button variant="contained" color="error" onClick={() => submitLaborCategory()}>
                  Create Labor Category
                </Button>
              )}
            </div>
          </Grid>
          <Grid item xs={12}>
            {showAlert && (
              <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert variant="filled" severity={alertColor} onClose={() => setShowAlert(false)}>
                  {alertMess}
                </Alert>
              </Stack>
            )}
            <Grid item xs={12}>
              <div style={{ overflowX: 'auto' }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Labor Category</TableCell>
                      <TableCell>Labor Count</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {laborCategoryList.map((row, index) => (
                      <TableRow key={index}>
                        {/* <TableCell>{row?.category}</TableCell> */}
                        <TableCell>
                          <TextField
                            variant="outlined"
                            value={row?.category || ''}
                            onChange={(e) => handleInputChange(row.category, e.target.value, index, 'category')}
                          />
                        </TableCell>
                        <TableCell>{row?.laborCount}</TableCell>
                        <TableCell>
                          {/* <Button variant="contained" color="error" onClick={() => handleRowDelete(row.id)}>
                            Delete
                          </Button>
                          <Button variant="contained" color="error" onClick={() => updateLaborCategory()}>
                            Update
                          </Button> */}
                          <Tooltip arrow placement="right" title="Update">
                            <IconButton
                              onClick={() => {
                                updateLaborCategory();
                              }}
                            >
                              <Edit />
                            </IconButton>
                          </Tooltip>
                          <Tooltip arrow placement="right" title="Delete">
                            <IconButton
                              onClick={() => {
                                handleRowDelete(row.id);
                              }}
                            >
                              <Delete />
                            </IconButton>
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </MainCard>
    </div>
  );
}

export default LaborCategory;
