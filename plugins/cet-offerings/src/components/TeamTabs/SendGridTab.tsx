// src/components/TeamTabs/SendGridTab.tsx
import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { InfoCard } from '@backstage/core-components';
import { Email } from '@material-ui/icons';
import { useStyles } from './styles';


interface SendGridTabProps {
  title?: string;
  description?: string;
}

export const SendGridTab: React.FC<SendGridTabProps> = ({
  title = 'SendGrid Email Services',
  description = 'Our SendGrid Team provides email infrastructure, delivery optimization, and transactional email services.',
}) => {
  const classes = useStyles();

  return (
    <Grid 
      container 
      spacing={3} 
      direction="column"
      role="region"
      aria-label="SendGrid Email Services Section"
    >
      <Grid item>
        <InfoCard
          title={
            <div className={classes.cardHeader}>
              <Email 
                className={`${classes.emailIcon} icon`}
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
      {/* <Grid item>
        <SendGridComponent />
      </Grid> */}
    </Grid>
  );
};

SendGridTab.displayName = 'SendGridTab';