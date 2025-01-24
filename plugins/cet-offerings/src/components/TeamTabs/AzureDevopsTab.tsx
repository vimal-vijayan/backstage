import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { InfoCard } from '@backstage/core-components';
import { Storage } from '@material-ui/icons'; // We'll use Storage icon as it's similar to Azure DevOps logo
import { useStyles } from './styles';

interface AzureDevopsTabProps {
  title?: string;
  description?: string;
}

export const AzureDevopsTab: React.FC<AzureDevopsTabProps> = ({
  title = 'Azure DevOps Services', // Updated to proper capitalization
  description = 'Our Azure DevOps team provides continuous integration, continuous deployment, and version control services.',
}) => {
  const classes = useStyles();

  return (
    <Grid 
      container 
      spacing={3} 
      direction="column"
      role="region"
      aria-label="Azure DevOps Services Section"
    >
      <Grid item>
        <InfoCard
          title={
            <div className={classes.cardHeader}>
              <Storage 
                // Changed from emailIcon to devopsIcon for proper styling
                className={`${classes.devopsIcon} icon`}
                aria-hidden="true"
              />
              <Typography variant="h6">{title}</Typography>
            </div>
          }
          aria-label={`${title} Information Card`}
        >
          <Typography variant="body1">
            {description}
          </Typography>
        </InfoCard>
      </Grid>
      {/* We'll keep this commented until the AzureDevopsComponent is ready
      <Grid item>
        <AzureDevopsComponent />
      </Grid> */}
    </Grid>
  );
};

AzureDevopsTab.displayName = 'AzureDevopsTab';