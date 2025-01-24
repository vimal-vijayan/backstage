import React, { useState } from 'react';
import { Typography, Grid, makeStyles, Tabs, Tab } from '@material-ui/core';
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
  // Base styles for the header cards
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    '&:hover .icon': {
      transform: 'scale(1.1)',
    },
  },

  // Enhanced cloud-themed styles
  cloudIcon: {
    color: '#2196F3',
    transition: theme.transitions.create(['transform', 'background-color'], {
      duration: theme.transitions.duration.shorter,
    }),
    backgroundColor: '#E3F2FD',
    padding: theme.spacing(1),
    borderRadius: '50%',
    fontSize: '2.5rem',
  },

  // Enhanced security-themed styles
  securityIcon: {
    color: '#673AB7',
    transition: theme.transitions.create(['transform', 'background-color'], {
      duration: theme.transitions.duration.shorter,
    }),
    backgroundColor: '#EDE7F6',
    padding: theme.spacing(1),
    borderRadius: '50%',
    fontSize: '2.5rem',
  },

  // Custom tab styles that incorporate our color scheme
  tabs: {
    marginBottom: theme.spacing(2),
    '& .MuiTab-root': {
      minHeight: 64,
      padding: theme.spacing(2),
    },
  },

  // Styles for the cloud tab
  cloudTab: {
    '& .tabIcon': {
      color: '#2196F3',
      backgroundColor: '#E3F2FD',
      padding: theme.spacing(1),
      borderRadius: '50%',
      fontSize: '2.3rem',
      transition: theme.transitions.create(['transform', 'background-color'], {
        duration: theme.transitions.duration.shorter,
      }),
    },
    '&:hover .tabIcon': {
      transform: 'scale(1.1)',
      backgroundColor: '#BBDEFB',
    },
  },

  // Styles for the security tab
  securityTab: {
    '& .tabIcon': {
      color: '#673AB7',
      backgroundColor: '#EDE7F6',
      padding: theme.spacing(1),
      borderRadius: '50%',
      fontSize: '2.3rem',
      transition: theme.transitions.create(['transform', 'background-color'], {
        duration: theme.transitions.duration.shorter,
      }),
    },
    '&:hover .tabIcon': {
      transform: 'scale(1.1)',
      backgroundColor: '#D1C4E9',
    },
  },

  tabIcon: {
    marginRight: theme.spacing(1),
  },

  tabPanel: {
    padding: theme.spacing(3, 0),
  },
}));

interface TabPanelProps {
  children: React.ReactNode;
  value: number;
  index: number;
}

const TabPanel = ({ children, value, index }: TabPanelProps) => (
  <div 
    role="tabpanel" 
    hidden={value !== index}
    id={`team-services-tabpanel-${index}`}
    aria-labelledby={`team-services-tab-${index}`}
  >
    {value === index && children}
  </div>
);

export const ExampleComponent = () => {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
  };

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

        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          aria-label="team services tabs"
          className={classes.tabs}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab 
            icon={<Cloud className={`tabIcon ${classes.tabIcon}`} />}
            label="Cloud Services"
            className={classes.cloudTab}
            id="team-services-tab-0"
            aria-controls="team-services-tabpanel-0"
          />
          <Tab 
            icon={<Security className={`tabIcon ${classes.tabIcon}`} />}
            label="IAM Services"
            className={classes.securityTab}
            id="team-services-tab-1"
            aria-controls="team-services-tabpanel-1"
          />
        </Tabs>

        <TabPanel value={selectedTab} index={0}>
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
        </TabPanel>

        <TabPanel value={selectedTab} index={1}>
          <div className={classes.tabPanel}>
            <Grid container spacing={3} direction="column">
              <Grid item>
                <InfoCard
                  title={
                    <div className={classes.cardHeader}>
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
          </div>
        </TabPanel>
      </Content>
    </Page>
  );
};