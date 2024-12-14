import React, { useState, useEffect } from 'react';

import { Table, TableBody, TableCell, TableHead, TableRow, Button, TextField, Grid, IconButton, Tooltip } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function ExternalWorkCategory() {
  const [externalworkCategory, setExternalWorkCategory] = useState({});
  const [externalworkCategoryList, setExternalWorkCategoryList] = useState([]);
  const [oldCategory, setOldCategory] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [showAlert, setShowAlert] = React.useState(false);
  const [alertMess, setAlertMess] = React.useState('');
  const [alertColor, setAlertColor] = React.useState('');

  useEffect(() => {
    fetchAllExternalWorkCategoryListData();

    return () => {
      setExternalWorkCategory({});
      setExternalWorkCategoryList([]);
    };
  }, []);

  const fetchAllExternalWorkCategoryListData = () => {
    fetch(process.env.REACT_APP_API_URL + '/externalWork/externalWorkCategory')
      .then(async (response) => {
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText || response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setExternalWorkCategoryList(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  function isExternalWorkCategoryComplete() {
    return externalworkCategory.category;
  }

  const submitExternalWorkCategory = () => {
    const externalworkCat = {
      category: externalworkCategory.category
    };
    saveExternalWorkCategory(externalworkCat);
  };

  const saveExternalWorkCategory = async (payload) => {
    await fetch(process.env.REACT_APP_API_URL + '/externalWork/saveExternalWorkCategory', {
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
        setAlertMess('ExternalWorkCategory ' + data.category + ' created successfully');
        setAlertColor('success');
        setShowAlert(true);
        setExternalWorkCategory({});
        fetchAllExternalWorkCategoryListData();
        console.log(data);
      })
      .catch((err) => {
        setAlertMess(err.message);
        setAlertColor('info');
        setShowAlert(true);
      });
  };

  const handleCategoryChange = (event) => {
    const updatedData = { ...externalworkCategory, category: event.target.value };
    setExternalWorkCategory(updatedData);
  };

  const handleRowDelete = async (rowIndex) => {
    await fetch(process.env.REACT_APP_API_URL + '/externalWork/externalWorkCategory/' + rowIndex, {
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
        setAlertMess('ExternalWorkCategory ' + data.category + ' deleted successfully');
        setAlertColor('success');
        setShowAlert(true);
        fetchAllExternalWorkCategoryListData();
      })
      .catch((err) => {
        setAlertMess(err.message);
        setAlertColor('info');
        setShowAlert(true);
      });
  };

  const handleInputChange = (oldValue, newValue, index, column) => {
    const newRows = [...externalworkCategoryList];
    newRows[index][column] = newValue;
    setExternalWorkCategoryList(newRows);
    setOldCategory(oldValue);
    setNewCategory(newValue);
  };

  const updateExternalWorkCategory = () => {
    fetch(process.env.REACT_APP_API_URL + '/externalWork/externalWorkCategory/' + oldCategory + '/' + newCategory, {
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
        setAlertMess('ExternalWorkCategory ' + data.category + ' updated successfully');
        setAlertColor('success');
        setShowAlert(true);
        setOldCategory('');
        setNewCategory('');
        fetchAllExternalWorkCategoryListData();
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
      <MainCard title="ExternalWork Category Details">
        <Grid container direction="row" spacing={gridSpacing}>
          <Grid item xs={4}>
            <br></br>
            <TextField
              label="Enter ExternalWork Category"
              required
              variant="outlined"
              value={externalworkCategory.category || ''}
              onChange={handleCategoryChange}
            />
          </Grid>
          <Grid item xs={12}>
            <br></br>
            <div className="content">
              {isExternalWorkCategoryComplete() && (
                <Button variant="contained" color="error" onClick={() => submitExternalWorkCategory()}>
                  Create ExternalWork Category
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
                      <TableCell>ExternalWork Category</TableCell>
                      <TableCell>ExternalWork Count</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {externalworkCategoryList.map((row, index) => (
                      <TableRow key={index}>
                        {/* <TableCell>{row?.category}</TableCell> */}
                        <TableCell>
                          <TextField
                            variant="outlined"
                            value={row?.category || ''}
                            onChange={(e) => handleInputChange(row.category, e.target.value, index, 'category')}
                          />
                        </TableCell>
                        <TableCell>{row?.externalworkCount}</TableCell>
                        <TableCell>
                          {/* <Button variant="contained" color="error" onClick={() => handleRowDelete(row.id)}>
                            Delete
                          </Button>
                          <Button variant="contained" color="error" onClick={() => updateExternalWorkCategory()}>
                            Update
                          </Button> */}
                          <Tooltip arrow placement="right" title="Update">
                            <IconButton
                              onClick={() => {
                                updateExternalWorkCategory();
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

export default ExternalWorkCategory;
