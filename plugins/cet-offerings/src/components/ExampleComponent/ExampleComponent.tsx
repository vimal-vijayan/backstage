import React from 'react';
import { Typography, Grid, makeStyles } from '@material-ui/core';
import {
  InfoCard,
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
} from '@backstage/core-components';
import { CloudTeamComponent, IAMTeamComponent } from '../TeamComponents';
import { Cloud, Security } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    '&:hover .icon': {
      transform: 'scale(1.1)',
    },
  },
  cloudIcon: {
    color: '#2196F3',
    transition: theme.transitions.create(['transform'], {
      duration: theme.transitions.duration.shorter,
    }),
    backgroundColor: '#E3F2FD',
    padding: theme.spacing(1),
    borderRadius: '50%',
    fontSize: '2.5rem', // Increased icon size
  },
  securityIcon: {
    color: '#673AB7',
    transition: theme.transitions.create(['transform'], {
      duration: theme.transitions.duration.shorter,
    }),
    backgroundColor: '#EDE7F6',
    padding: theme.spacing(1),
    borderRadius: '50%',
    fontSize: '2.5rem', // Increased icon size
  },
}));

export const ExampleComponent = () => {
  const classes = useStyles();

  return (
    <Page themeId="tool">
      <Header title="CET Offerings" subtitle="Cloud Enablement Services">
        <HeaderLabel label="Owner" value="CET" />
        <HeaderLabel label="Lifecycle" value="Alpha" />
      </Header>
      <Content>
        <ContentHeader title="Overview">
          <SupportButton>Cloud Enablement Team Offerings</SupportButton>
        </ContentHeader>
        <Grid container spacing={3} direction="column">
          <Grid item>
            <InfoCard
              title={
                <div className={classes.cardHeader}>
                  {/* We now use the cloudIcon class for the Cloud icon */}
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
          <Grid item>
            <InfoCard
              title={
                <div className={classes.cardHeader}>
                  {/* We now use the securityIcon class for the Security icon */}
                  <Security className={`${classes.securityIcon} icon`} />
                  <Typography variant="h6">IAM Team Services</Typography>
                </div>
              }
            >
              <Typography variant="body1">
                Our IAM Team handles identity and access management, security compliance, and authentication services.
              </Typography>
            </InfoCard>
          </Grid>
          <Grid item>
            <IAMTeamComponent />
          </Grid>
        </Grid>
      </Content>
    </Page>
  );
};