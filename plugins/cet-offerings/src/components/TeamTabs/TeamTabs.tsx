import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import {
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
  Link,
  Progress,
  ResponseErrorPanel,
} from '@backstage/core-components';
import { Cloud, Security, Email } from '@material-ui/icons';
import { TabPanel } from './TabPanel';
import { CloudTab } from './CloudTab';
import { IAMTab } from './IAMTab';
import { useStyles } from './styles';
import { SendGridTab } from './SendGridTab';
import { AzureDevopsTab } from './AzureDevopsTab';
import { fetchApiRef, configApiRef, useApi } from '@backstage/core-plugin-api';
import useAsync from 'react-use/lib/useAsync';
import devopsLogo from '../../assets/azure-devops-logo.svg';


export const TeamTabs = () => {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);
  const fetchApi = useApi(fetchApiRef);
  const config = useApi(configApiRef);
  const backendUrl = config.getString('backend.baseUrl');

  // Fetch the owner configuration
  const { value: ownerConfig, loading, error } = useAsync(async () => {
    const response = await fetchApi.fetch(`${backendUrl}/api/team-members/config`);
    if (!response.ok) {
      throw new Error('Failed to fetch team configuration');
    }
    return await response.json();
  }, []);

  if (loading) return <Progress />;
  if (error) return <ResponseErrorPanel error={error} />;

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
  };



  return (
    <Page themeId="tool">
      <Header title="CET Offerings" subtitle="Cloud Enablement Services">
        <HeaderLabel label="Owner" value={
          <Link
            to={`/catalog/default/group/${ownerConfig?.owner || 'default-owner'}`}
            style={{ color: '#ffffff' }}  // or just 'white'
          >
            {ownerConfig?.owner || "owner"}
          </Link>
        } />
        <HeaderLabel label="Lifecycle" value={ownerConfig?.lifecycle} />
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