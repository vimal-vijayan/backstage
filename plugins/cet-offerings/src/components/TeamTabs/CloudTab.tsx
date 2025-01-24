// src/components/TeamTabs/CloudTab.tsx
import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { InfoCard } from '@backstage/core-components';
import { Cloud } from '@material-ui/icons';
import { CloudTeamComponent } from '../TeamComponents';
import { useStyles } from './styles';

interface CloudTabProps {
  // Adding title and description as props makes the component more reusable
  title?: string;
  description?: string;
  // You might want to add more props in the future, like:
  // onServiceClick?: (service: string) => void;
  // isLoading?: boolean;
}

export const CloudTab: React.FC<CloudTabProps> = ({
  // Provide default values for optional props
  title = 'Cloud Team Services',
  description = 'Our Cloud Team provides infrastructure setup, migration assistance, and DevOps automation services.',
}) => {
  const classes = useStyles();

  return (
    // Remove the tabPanel class as that's a concern of the parent TabPanel component
    <Grid
      container
      spacing={3}
      direction="column"
      role="region"
      aria-label="Cloud Services Section"
    >
      <Grid item>
        <InfoCard
          title={
            <div className={classes.cardHeader}>
              <Cloud
                className={`${classes.cloudIcon} icon`}
                aria-hidden="true"
              />
              <Typography variant="h6">{title}</Typography>
            </div>
          }
          // Adding better accessibility
          aria-label={`${title} Information Card`}
        >
          <Typography variant="body1">
            {description}
          </Typography>
        </InfoCard>
      </Grid>
      <Grid item>
        <CloudTeamComponent />
      </Grid>
    </Grid>
  );
};

// Adding prop type validation for development
CloudTab.displayName = 'CloudTab';