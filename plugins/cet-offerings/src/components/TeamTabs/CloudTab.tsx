import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { InfoCard } from '@backstage/core-components';
import { Cloud } from '@material-ui/icons';
import { CloudTeamComponent } from '../TeamComponents';
import { useStyles } from './styles';
import { HomePageToolkit } from '@backstage/plugin-home';
import DescriptionIcon from '@material-ui/icons/Description';
import WikiIcon from '@material-ui/icons/MenuBook';
import CloudIcon from '@material-ui/icons/Cloud';

interface CloudTabProps {
  title?: string;
  description?: string;
}

export const CloudTab: React.FC<CloudTabProps> = ({
  title = 'Cloud Team Services',
  description = 'Our Cloud Team provides infrastructure setup, migration assistance, and DevOps automation services.',
}) => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={5}
      direction="column"
      role="region"
      aria-label="Cloud Services Section"
    >
      <Grid item>
        <InfoCard
          title={
            <div className={classes.cardHeader}>
              <Cloud className={`${classes.cloudIcon} icon`} aria-hidden="true" />
              <Typography variant="h6">{title}</Typography>
            </div>
          }
          aria-label={`${title} Information Card`}
        >
          <div>
            <Typography variant="body1">{description}</Typography>
            <div style={{ marginTop: '10px' }}>
              <HomePageToolkit
                title="Quick Links"
                tools={[
                  {
                    url: 'https://backstage.io/docs',
                    label: 'Sharepoint',
                    icon: <DescriptionIcon className={`${classes.quickLinkIcon} ${classes.docsIcon}`} />,
                  },
                  {
                    url: 'https://my-internal-wiki.company.com',
                    label: 'Wiki',
                    icon: <WikiIcon className={`${classes.quickLinkIcon} ${classes.wikiIcon}`} />,
                  },
                  {
                    url: 'https://cloud.company.com',
                    label: 'Cloud Board',
                    icon: <CloudIcon className={`${classes.quickLinkIcon} ${classes.cloudIcon} `}/>,
                  },
                ]}
              />
            </div>
          </div>
        </InfoCard>
      </Grid>

      <Grid item>
        <CloudTeamComponent />
      </Grid>
    </Grid>
  );
};

CloudTab.displayName = 'CloudTab';