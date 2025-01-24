// src/components/TeamTabs/IAMTab.tsx
import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { InfoCard } from '@backstage/core-components';
import { Security } from '@material-ui/icons';
import { IAMTeamComponent } from '../TeamComponents';
import { useStyles } from './styles';

// Define an interface for the component's props
interface IAMTabProps {
  // Adding title and description as props makes the component more reusable
  title?: string;
  description?: string;
  // You might want to add more props in the future, like:
  // onServiceClick?: (service: string) => void;
  // isLoading?: boolean;
}

export const IAMTab: React.FC<IAMTabProps> = ({
  // Provide default values for optional props
  title = 'IAM Team Services',
  description = 'Our IAM Team handles identity and access management, security compliance, and authentication services.',
}) => {
  const classes = useStyles();

  return (
    // Remove the tabPanel class as that's a concern of the parent TabPanel component
    <Grid 
      container 
      spacing={3} 
      direction="column"
      role="region"
      aria-label="IAM Team Services Section"
    >
      <Grid item>
        <InfoCard
          title={
            <div className={classes.cardHeader}>
              <Security 
                className={`${classes.securityIcon} icon`}
                // Adding aria-hidden since this is decorative
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
        <IAMTeamComponent />
      </Grid>
    </Grid>
  );
};

// Adding prop type validation for development
IAMTab.displayName = 'IAMTab';