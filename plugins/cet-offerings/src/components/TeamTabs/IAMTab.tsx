import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { InfoCard } from '@backstage/core-components';
import { Security } from '@material-ui/icons';
import { IAMTeamComponent } from '../TeamComponents';
import { useStyles } from './styles';
import { HomePageToolkit } from '@backstage/plugin-home';
import DescriptionIcon from '@material-ui/icons/Description';
import WikiIcon from '@material-ui/icons/MenuBook';

interface IAMTabProps {
  title?: string;
  description?: string;
  // isLoading?: boolean;
}

export const IAMTab: React.FC<IAMTabProps> = ({
  // Provide default values for optional props
  title = 'IAM Team Services',
  description = 'Our IAM Team handles identity and access management, security compliance, and authentication services.',
}) => {
  const classes = useStyles();

  return (
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
              <Security className={`${classes.securityIcon} icon`} aria-hidden="true" />
              <Typography variant="h6">{title}</Typography>
            </div>
          }
          aria-label={`${title} Information Card`}
        >
          <div>
            <Typography variant="body1"> {description}</Typography>
            <div style={{ marginTop: '10px' }}>
              <HomePageToolkit
                title="Quick Links"
                tools={[
                  {
                    url: 'https://sca.sharepoint.com/sites/GRP-IT-Infrastructure/SitePages/Identity-Management.aspx',
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
                    label: 'IAM Board',
                    icon: <Security className={`${classes.quickLinkIcon} ${classes.securityIcon} `}/>,
                  },
                ]}
              />
            </div>
          </div>
        </InfoCard>
      </Grid>
      <Grid item>
        <IAMTeamComponent />
      </Grid>
    </Grid>
  );
};

IAMTab.displayName = 'IAMTab';