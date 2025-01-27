import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import {
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
} from '@backstage/core-components';
import { Cloud, Security, Email } from '@material-ui/icons';
import { TabPanel } from './TabPanel';
import { CloudTab } from './CloudTab';
import { IAMTab } from './IAMTab';
import { useStyles } from './styles';
import { SendGridTab } from './SendGridTab';
import { AzureDevopsTab } from './AzureDevopsTab';
import devopsLogo from '../../assets/azure-devops-logo.svg';


export const TeamTabs = () => {
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
          <Tab
            icon={<Email className={`tabIcon ${classes.tabIcon}`} />}
            label="SendGrid"
            className={classes.emailTab}
            id="team-services-tab-2"
            aria-controls="team-services-tabpanel-2"
          />
          <Tab
            icon={<img src={devopsLogo} alt='Azure DevOps Logo' className={classes.devopsLogo} />}
            label="Azure Devops"
            className={classes.devopsTab}
            id="team-services-tab-3"
            aria-controls="team-services-tabpanel-3"
          />
        </Tabs>

        <TabPanel value={selectedTab} index={0}>
          <CloudTab />
        </TabPanel>
        <TabPanel value={selectedTab} index={1}>
          <IAMTab />
        </TabPanel>
        <TabPanel value={selectedTab} index={2}>
          <SendGridTab />
        </TabPanel>
        <TabPanel value={selectedTab} index={3}>
          <AzureDevopsTab />
        </TabPanel>
      </Content>
    </Page>
  );
};