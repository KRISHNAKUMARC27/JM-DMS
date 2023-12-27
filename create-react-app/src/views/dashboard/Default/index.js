import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
//import EarningCard from './EarningCard';
//import PopularCard from './PopularCard';
import TotalRevenueLineChartCard from './TotalRevenueLineChartCard';
import TotalJobsLineChartCard from './TotalJobsLineChartCard';
import TotalIncomeDarkCard from './TotalIncomeDarkCard';
import TotalIncomeLightCard from './TotalIncomeLightCard';
//import TotalGrowthBarChart from './TotalGrowthBarChart';
import SparesEvents from './SparesEvents';
import { gridSpacing } from 'store/constant';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalJobCards, setTotalJobCards] = useState(0);

  const [displayFlag, setDisplayFlag] = useState(false);

  useEffect(() => {
    fetchTotalRevenueData();
    fetchTotalJobCardsData();
  }, []);

  const fetchTotalRevenueData = () => {
    fetch(process.env.REACT_APP_API_URL + '/stats/totalRevenue')
      .then(async (response) => {
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText || response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setTotalRevenue(data);
        setDisplayFlag(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const fetchTotalJobCardsData = () => {
    fetch(process.env.REACT_APP_API_URL + '/stats/totalJobCards')
      .then(async (response) => {
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText || response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setTotalJobCards(data);
        setDisplayFlag(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TotalJobsLineChartCard />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                {displayFlag && <TotalIncomeLightCard totalJobCards={totalJobCards.total} name={'Total JobCards'} />}
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                {displayFlag && <TotalIncomeLightCard totalJobCards={totalJobCards.open} name={'Total Open JobCards'} />}
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                {displayFlag && <TotalIncomeLightCard totalJobCards={totalJobCards.closed} name={'Total Closed JobCards'} />}
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                {displayFlag && <TotalIncomeLightCard totalJobCards={totalJobCards.cancelled} name={'Total Cancelled JobCards'} />}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TotalRevenueLineChartCard />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                {displayFlag && <TotalIncomeDarkCard totalRevenue={totalRevenue.total} name={'Total Income'} />}
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                {displayFlag && <TotalIncomeDarkCard totalRevenue={totalRevenue.totalSparesWorth} name={'Total Spares Worth'} />}
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                {displayFlag && <TotalIncomeDarkCard totalRevenue={totalRevenue.spares} name={'Total Income From Spares'} />}
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                {displayFlag && <TotalIncomeDarkCard totalRevenue={totalRevenue.labor} name={'Total Income From Labor'} />}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={12}>
            {/* <TotalGrowthBarChart isLoading={isLoading} /> */}
            <SparesEvents></SparesEvents>
          </Grid>
          {/* <Grid item xs={12} md={4}>
            <PopularCard isLoading={isLoading} />
          </Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
