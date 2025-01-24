// src/components/TeamTabs/CloudTab.tsx
import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { InfoCard } from '@backstage/core-components';
import { Cloud } from '@material-ui/icons';
import { CloudTeamComponent } from '../TeamComponents';
import { useStyles } from './styles';

export const CloudTab = () => {
  const classes = useStyles();

  return (
    <div className={classes.tabPanel}>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <InfoCard
            title={
              <div className={classes.cardHeader}>
                <Cloud className={`${classes.cloudIcon} icon`} />
                <Typography variant="h6">Cloud Team Services</Typography>
              </div>
            }
          >
            <Typography variant="body1">
              Our Cloud Team provides infrastructure setup, migration assistance, and DevOps automation services.
            </Typography>
          </InfoCard>
        </Grid>
        <Grid item>
          <CloudTeamComponent />
        </Grid>
      </Grid>
    </div>
  );
};