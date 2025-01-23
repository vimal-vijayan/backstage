import React from 'react';
import {
  Content,
  Header,
  Page,
  ItemCardGrid,
} from '@backstage/core-components';
import {
  HomepageCompositionRoot,
  HomePageCompanyLogo,
  HomePageToolkit,
  HomePageStarredEntities,
} from '@backstage/plugin-home';
import { HomePageSearchBar } from '@backstage/plugin-search';

// Option 1: Import the logo (if using webpack module imports)
import logo from '../Root/logo/Essity.png';

export const HomePage = () => {
  return (
    <Page themeId="home">
      <Header 
      title="Welcome to Backstage" 
      />
      <Content>
      <HomepageCompositionRoot>
        {/* Option 1: Using imported logo */}
        <HomePageCompanyLogo
        logo={<img src={logo} alt="Essity Logo" style={{ width: '150px' }} />}
        />
        <HomePageSearchBar />
        
        <HomePageToolkit
        title="Quick Links"
        tools={[
          {
          url: 'https://backstage.io/docs',
          label: 'Backstage Docs',
          icon: <></>,
          },
          {
          url: 'https://my-internal-wiki.company.com',
          label: 'Internal Wiki',
          icon: <></>,
          },
        ]}
        />

        {/* <ItemCardGrid>
        <HomePageStarredEntities />
        </ItemCardGrid> */}
      </HomepageCompositionRoot>
      </Content>
    </Page>
  );
};