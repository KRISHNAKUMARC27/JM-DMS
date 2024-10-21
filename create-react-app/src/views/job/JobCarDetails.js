import PropTypes from 'prop-types';

// material-ui
import { Grid, TableRow, Table, TableBody, TableCell, TableHead, TextField, MenuItem, Select } from '@mui/material';
//import { TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

const JobCarDetails = ({ data, updateData }) => {
  const handleVehicleRegNoChange = (event) => {
    const updatedData = { ...data, vehicleRegNo: event.target.value.toUpperCase() };
    updateData(updatedData);
  };
  const handleVehicleNameChange = (event) => {
    const updatedData = { ...data, vehicleName: event.target.value };
    updateData(updatedData);
  };
  const handleVehicleModelChange = (event) => {
    const updatedData = { ...data, vehicleModel: event.target.value };
    updateData(updatedData);
  };
  const handleKMsChange = (event) => {
    const updatedData = { ...data, kiloMeters: event.target.value };
    updateData(updatedData);
  };
  const handleFuelPointsChange = (event) => {
    const updatedData = { ...data, fuelPoints: event.target.value };
    updateData(updatedData);
  };
  const handleTechnicianNameChange = (event) => {
    const updatedData = { ...data, technicianName: event.target.value };
    updateData(updatedData);
  };
  const handleDriverChange = (event) => {
    const updatedData = { ...data, driver: event.target.value };
    updateData(updatedData);
  };
  const handleVehicleOutDateChange = (event) => {
    const updatedData = { ...data, vehicleOutDate: event.target.value };
    updateData(updatedData);
  };

  const itemMap = {
    'COVER ': 'cover',
    'GLASS ': 'glass',
    'SPARE WHEEL': 'spareWheel',
    'DASHBOARD & TOOL': 'dashboardAndTools',
    'JACKEY HANDLES': 'jackeyHandles',
    'TOOL KITS': 'toolKits',
    'PEN DRIVE': 'penDrive',
    'WHEEL CAP': 'wheelCap',
    'A/C GRILLS': 'acGrills'
    // Add more mappings as needed
  };

  const handleItemChange = (jsonKey) => (event) => {
    const updatedData = { ...data, [jsonKey]: event.target.value };
    updateData(updatedData);
    //console.log(JSON.stringify(data));
  };

  // const handleItemCoverChange = (event) => {
  //   const updatedData = { ...data, cover: event.target.value };
  //   updateData(updatedData);
  // };
  // const handleItemGlassChange = (event) => {
  //   const updatedData = { ...data, glass: event.target.value };
  //   updateData(updatedData);
  // };

  return (
    <>
      <MainCard title="Job Card Vehicle Details">
        <Grid container direction="row" spacing={gridSpacing}>
          <Grid item xs={6}>
            <TextField
              label="Vehicle Reg. No."
              required
              variant="outlined"
              value={data.vehicleRegNo || ''}
              onChange={handleVehicleRegNoChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Vehicle Name" required variant="outlined" value={data.vehicleName || ''} onChange={handleVehicleNameChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Vehicle Model"
              required
              variant="outlined"
              value={data.vehicleModel || ''}
              onChange={handleVehicleModelChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Vehicle K.Ms" required variant="outlined" value={data.kiloMeters || ''} onChange={handleKMsChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Fuel Points" required variant="outlined" value={data.fuelPoints || ''} onChange={handleFuelPointsChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Technician Name" variant="outlined" value={data.technicianName || ''} onChange={handleTechnicianNameChange} />
          </Grid>
          <Grid item xs={12}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ITEMS</TableCell>
                  <TableCell>OK/NOT OK</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.entries(itemMap).map(([displayName, jsonKey]) => (
                  <TableRow key={displayName}>
                    <TableCell>{displayName}</TableCell>
                    <TableCell>
                      <Select value={data[jsonKey] || ''} onChange={handleItemChange(jsonKey)}>
                        <MenuItem value="OK">OK</MenuItem>
                        <MenuItem value="NOT OK">NOT OK</MenuItem>
                      </Select>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>
          <Grid item xs={6}>
            <TextField label="Driver Name" variant="outlined" value={data.driver || ''} onChange={handleDriverChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Vehicle Out Date"
              variant="outlined"
              value={data.vehicleOutDate || ''}
              onChange={handleVehicleOutDateChange}
            />
          </Grid>
        </Grid>
      </MainCard>
    </>
  );
};

JobCarDetails.propTypes = {
  data: PropTypes.object.isRequired,
  updateData: PropTypes.func.isRequired
};
export default JobCarDetails;
