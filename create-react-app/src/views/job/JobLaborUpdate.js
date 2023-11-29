import PropTypes from 'prop-types';

// material-ui
import { Grid } from '@mui/material';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, TextField } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

const JobLaborUpdate = ({ data, updateData }) => {
  const handleInputChange = (index, column, value) => {
    const newRows = [...data];
    newRows[index][column] = value;
    updateData(newRows);
  };

  const addAdditionalRows = () => {
    const newRows = [...Array(1)].map(() => ({ category: '', sparesAndLabour: '', qty: '', rate: '', amount: '' }));
    updateData((prevRows) => [...prevRows, ...newRows]);
  };

  const handleRowDelete = (rowIndex) => {
    const newRows = [...data];
    newRows.splice(rowIndex, 1);
    if (newRows.length > 0) {
      updateData(newRows);
    } else {
      updateData([...Array(1)].map(() => ({ category: '', sparesAndLabour: '', qty: '', rate: '', amount: '' })));
    }
  };

  return (
    <>
      <MainCard title="Job Labor Information">
        <Grid container direction="row" spacing={gridSpacing}>
          <Grid item xs={12}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Labour</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Rate</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <TextField
                        fullWidth
                        value={row?.sparesAndLabour || ''}
                        onChange={(e) => handleInputChange(index, 'sparesAndLabour', e.target.value)}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        value={row?.qty || ''}
                        onChange={(e) => {
                          handleInputChange(index, 'qty', e.target.value);
                          handleInputChange(index, 'amount', e.target.value * row?.rate);
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        value={row?.rate || ''}
                        onChange={(e) => {
                          handleInputChange(index, 'rate', e.target.value);
                          handleInputChange(index, 'amount', e.target.value * row?.qty);
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        value={row?.amount || ''}
                        onChange={(e) => {
                          handleInputChange(index, 'amount', e.target.value);
                        }}
                      />
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

JobLaborUpdate.propTypes = {
  data: PropTypes.array.isRequired,
  updateData: PropTypes.func.isRequired
};
export default JobLaborUpdate;
