import React from 'react';
import PropTypes from 'prop-types';

// material-ui
import { Grid } from '@mui/material';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  TextField,
  Autocomplete,
  InputLabel,
  Select,
  MenuItem,
  FormControl
  // OutlinedInput
} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
//import { debounce } from 'lodash';

import { gridSpacing } from 'store/constant';

const JobSparesUpdate = ({ data, updateData }) => {
  const [sparesCategoryList, setSparesCategoryList] = React.useState([]);
  const [options, setOptions] = React.useState([]);
  const [allSpares, setAllSpares] = React.useState([]);
  //  const [categoryFilter, setCategoryFilter] = React.useState('');

  React.useEffect(() => {
    fetchAllSparesCategoryListData();
    fetchAllSparesData();

    //console.log('data is ' + JSON.stringify(data));
    return () => {
      setSparesCategoryList([]);
      setOptions([]);
      setAllSpares([]);
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

  const fetchAllSparesData = () => {
    fetch(process.env.REACT_APP_API_URL + '/spares')
      .then(async (response) => {
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText || response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        //setOptions(data);
        setAllSpares(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const fetchOptions = async (value) => {
    await fetch(process.env.REACT_APP_API_URL + '/spares/findSparesInventoryWithFilter', {
      method: 'POST',
      body: JSON.stringify(value),
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
        setOptions(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // const handleInputChangeFilter = (event, newInputValue) => {
  //   //setInputValue(newInputValue);
  //   const sparesFilter = {
  //     //categoryList: [categoryFilter],
  //     desc: newInputValue
  //   };
  //   fetchOptions(sparesFilter);
  // };

  const handleInputChange = (index, column, value) => {
    const newRows = [...data];
    newRows[index][column] = value;
    updateData(newRows);
  };

  const addAdditionalRows = () => {
    const newRows = [...Array(1)].map(() => ({ sparesId: '', category: '', sparesAndLabour: '', qty: '', rate: '', amount: '' }));
    updateData((prevRows) => [...prevRows, ...newRows]);
  };

  const handleRowDelete = (rowIndex) => {
    const newRows = [...data];
    newRows.splice(rowIndex, 1);
    if (newRows.length > 0) {
      updateData(newRows);
    } else {
      updateData([...Array(1)].map(() => ({ sparesId: '', category: '', sparesAndLabour: '', qty: '', rate: '', amount: '' })));
    }
  };

  const handleCategoryTypeChange = (value) => {
    console.log('Value is ' + value);
    //const newValue = value;
    let myArray = [value];
    //setCategoryFilter(newValue);
    const sparesFilter = {
      categoryList: myArray
    };
    fetchOptions(sparesFilter);
  };

  // const SelectField = ({ id, label, value, handleChange, options }) => (
  //   <FormControl variant="outlined" fullWidth>
  //     <InputLabel id={`${id}-label`}>{label}</InputLabel>
  //     <Select
  //       labelId={`${id}-label`}
  //       id={id}
  //       multiple
  //       value={value}
  //       onChange={handleChange}
  //       input={<OutlinedInput label={label} />}
  //       renderValue={(selected) => (selected.length === 0 ? '' : selected.length === 1 ? selected[0] : `${selected[0]},...`)}
  //       MenuProps={{
  //         PaperProps: {
  //           style: {
  //             maxHeight: 224 // You can adjust this value
  //           }
  //         }
  //       }}
  //     >
  //       {options.map((option) => (
  //         <MenuItem
  //           key={option.id || option}
  //           value={option.category || option}
  //           style={value.includes(option.category || option) ? { backgroundColor: '#2D6DF6' } : {}}
  //         >
  //           {option.category || option}
  //         </MenuItem>
  //       ))}
  //     </Select>
  //   </FormControl>
  // );

  return (
    <>
      <MainCard title="Job Spares Information">
        <Grid container direction="row" spacing={gridSpacing}>
          <Grid item xs={12}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Spares Category</TableCell>
                  <TableCell>Spares</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Rate</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <TableRow key={index}>
                    {/* <SelectField
                        id="categoryType"
                        label="Category Type"
                        value={categoryFilter || ''}
                        handleChange={handleCategoryTypeChange}
                        options={sparesCategoryList}
                      /> */}
                    {/* <FormControl variant="outlined" fullWidth>
                        <InputLabel id={`categoryType-label`}>Category Type</InputLabel>
                        <Select
                          labelId={`categoryType-label`}
                          id={'categoryType'}
                          multiple
                          value={categoryFilter || ''}
                          onChange={(e) => handleCategoryTypeChange(e.target.value)}
                          input={<OutlinedInput label={'Category Type'} />}
                          renderValue={(selected) =>
                            selected.length === 0 ? '' : selected.length === 1 ? selected[0] : `${selected[0]},...`
                          }
                          MenuProps={{
                            PaperProps: {
                              style: {
                                maxHeight: 224 // You can adjust this value
                              }
                            }
                          }}
                        >
                          {sparesCategoryList.map((option) => (
                            <MenuItem
                              key={option.id || ''}
                              value={option.category || ''}
                              style={value.includes(option.category || option) ? { backgroundColor: '#2D6DF6' } : {}}
                            >
                              {option.category || ''}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl> */}
                    <TableCell>
                      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label"></InputLabel>
                        <Select
                          fullWidth
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard-label"
                          value={row?.category || ''}
                          label="Category Type"
                          sx={{
                            '& .MuiSelect-select': {
                              color: 'black' // Change to your desired color
                            }
                          }}
                          onChange={(e) => {
                            handleCategoryTypeChange(e.target.value);
                            handleInputChange(index, 'category', e.target.value);
                          }}
                        >
                          {sparesCategoryList.map((option) => (
                            <MenuItem key={option.id} value={option.category}>
                              {option.category}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell>
                      <Autocomplete
                        options={options}
                        getOptionLabel={(option) => option.desc}
                        style={{ width: 300 }}
                        //inputValue={row?.sparesAndLabour || ''}
                        //onInputChange={handleInputChangeFilter}
                        value={allSpares.find((option) => option.desc === row.sparesAndLabour) || null}
                        isOptionEqualToValue={(option, value) => option.id === value.id}
                        onChange={(event, newValue) => {
                          console.log('new value is ' + JSON.stringify(newValue));
                          //setChoosenSpares(newValue);
                          handleInputChange(index, 'sparesAndLabour', newValue.desc);
                          handleInputChange(index, 'rate', newValue.sellRate);
                          handleInputChange(index, 'sparesId', newValue.id);
                        }}
                        renderInput={(params) => <TextField {...params} label="Search Spares" />}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        value={row?.qty || ''}
                        onChange={(e) => {
                          const val = e.target.value;
                          // if (val > choosenSpares.qty) {
                          //   setAlertMess(
                          //     'Quantity of selected spares in Inventory ' + choosenSpares.qty + ' is less than selected quantity ' + val
                          //   );
                          //   setShowAlert(true);
                          // } else {
                          //   handleInputChange(index, 'qty', val);
                          //   handleInputChange(index, 'amount', val * row?.rate || 0);
                          // }
                          handleInputChange(index, 'qty', val);
                          handleInputChange(index, 'amount', val * row?.rate || 0);
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField fullWidth value={row?.rate || ''} onChange={(e) => handleInputChange(index, 'rate', e.target.value)} />
                    </TableCell>
                    <TableCell>
                      <TextField fullWidth value={row?.amount || ''} onChange={(e) => handleInputChange(index, 'amount', e.target.value)} />
                    </TableCell>
                    <TableCell>
                      <Button variant="contained" color="error" onClick={() => handleRowDelete(index)}>
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Grid item xs={12}>
              <br></br>
              <Button variant="contained" color="error" onClick={addAdditionalRows}>
                Add Row
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </MainCard>
    </>
  );
};

JobSparesUpdate.propTypes = {
  data: PropTypes.array.isRequired,
  updateData: PropTypes.func.isRequired
};
export default JobSparesUpdate;
