import PropTypes from 'prop-types';

// material-ui
import { Grid } from '@mui/material';
//import { TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { TextField } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

const JobCarDetails = ({ data, updateData }) => {
  const handleVehicleRegNoChange = (event) => {
    const updatedData = { ...data, vehicleRegNo: event.target.value };
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
    const updatedData = { ...data, kMs: event.target.value };
    updateData(updatedData);
  };
  const handleTechnicianNameChange = (event) => {
    const updatedData = { ...data, technicianName: event.target.value };
    updateData(updatedData);
  };
  const handleVehicleOutDateChange = (event) => {
    const updatedData = { ...data, vehicleOutDate: event.target.value };
    updateData(updatedData);
  };
  return (
    <>
      <MainCard title="Job Card Vehicle Details">
        <Grid container direction="row" spacing={gridSpacing}>
          <Grid item xs={4}>
            <TextField
              label="Vehicle Reg. No."
              required
              variant="outlined"
              value={data.vehicleRegNo || ''}
              onChange={handleVehicleRegNoChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField label="Vehicle Name" required variant="outlined" value={data.vehicleName || ''} onChange={handleVehicleNameChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Vehicle Model"
              required
              variant="outlined"
              value={data.vehicleModel || ''}
              onChange={handleVehicleModelChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField label="Vehicle K.Ms" required variant="outlined" value={data.kMs || ''} onChange={handleKMsChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Technician Name"
              required
              variant="outlined"
              value={data.technicianName || ''}
              onChange={handleTechnicianNameChange}
            />
          </Grid>
          <Grid item xs={4}>
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
