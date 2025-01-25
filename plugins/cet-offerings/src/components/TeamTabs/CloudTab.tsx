import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { InfoCard } from '@backstage/core-components';
import { Cloud } from '@material-ui/icons';
import { CloudTeamComponent } from '../TeamComponents';
// Component with pagination
// import { CloudTeamComponent } from '../TeamComponents/TeamComponentsWithPagination';
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
                    url: 'https://sca.sharepoint.com/sites/GRP-IT-Infrastructure/SitePages/Requesting-Work-From-Infrastructure-Services.aspx',
                    label: 'Sharepoint',
                    icon: <DescriptionIcon className={`${classes.quickLinkIcon} ${classes.docsIcon}`} />,
                  },
                  {
                    url: 'https://dev.azure.com/essity-projects/Essity%20Infrastructure%20Services/_wiki/wikis/CET-Wiki/4462/Cloud-Team-Wiki',
                    label: 'Wiki',
                    icon: <WikiIcon className={`${classes.quickLinkIcon} ${classes.wikiIcon}`} />,
                  },
                  {
                    url: 'https://dev.azure.com/essity-projects/Essity%20Infrastructure%20Services/_boards/board/t/Cloud%20Enablement%20Team%20-%20Requestors/Stories',
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