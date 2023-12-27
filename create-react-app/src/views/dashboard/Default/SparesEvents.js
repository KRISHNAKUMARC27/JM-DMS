import React, { useState, useEffect } from 'react';

import { Table, TableBody, TableCell, TableHead, TableRow, Grid, IconButton, Tooltip } from '@mui/material';
import { Delete } from '@mui/icons-material';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function SparesEvents() {
  const [sparesEventsList, setSparesEventsList] = useState([]);

  const [showAlert, setShowAlert] = React.useState(false);
  const [alertMess, setAlertMess] = React.useState('');
  const [alertColor, setAlertColor] = React.useState('');

  useEffect(() => {
    fetchAllSparesEventsListData();

    return () => {
      setSparesEventsList([]);
    };
  }, []);

  const fetchAllSparesEventsListData = () => {
    fetch(process.env.REACT_APP_API_URL + '/stats/sparesEvents')
      .then(async (response) => {
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText || response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setSparesEventsList(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleRowDelete = async (id) => {
    await fetch(process.env.REACT_APP_API_URL + '/stats/sparesEvents/' + id, {
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
        setAlertMess('Spares Event deleted successfully');
        setAlertColor('success');
        setShowAlert(true);
        setSparesEventsList(data);
      })
      .catch((err) => {
        setAlertMess(err.message);
        setAlertColor('info');
        setShowAlert(true);
      });
  };

  return (
    <div>
      <MainCard title="Spares Category Details">
        <Grid container direction="row" spacing={gridSpacing}>
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
                      <TableCell>Spares Events</TableCell>
                      <TableCell>Event Time</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {sparesEventsList.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row?.notif}</TableCell>
                        <TableCell>{row?.time}</TableCell>
                        <TableCell>
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

export default SparesEvents;
