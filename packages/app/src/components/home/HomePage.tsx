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
// If you haven't set up search, remove this import and the <HomePageSearchBar /> below.

export const HomePage = () => {
  return (
    <Page themeId="home">
      {/* A simple Header; feel free to remove or replace */}
      <Header title="Welcome to Backstage" subtitle="Home" />

      <Content>
        {/* The Homepage plugin's layout container */}
        <HomepageCompositionRoot>
          {/* Example: Company logo at the top */}
          <HomePageCompanyLogo
            logo="My Company"
            // Provide a logoUrl if you have one. You could also leave it blank to show text only.
            // logoUrl="/path/to/my-company-logo.png"
          />

          {/* A search bar, if you've configured the Backstage search plugin */}
          <HomePageSearchBar />

          {/* A "Toolkit" area to showcase various quick links or calls to action */}
          <HomePageToolkit
            title="Quick Links"
            // Example items
            tools={[
              {
                url: 'https://backstage.io/docs',
                label: 'Backstage Docs',
                icon: <></>, // Insert a Material UI or custom icon if desired
              },
              {
                url: 'https://my-internal-wiki.company.com',
                label: 'Internal Wiki',
                icon: <></>,
              },
            ]}
          />

          {/* Starred entities for the signed-in user */}
          <ItemCardGrid>
            <HomePageStarredEntities />
          </ItemCardGrid>

          {/* Add more homepage sections here as needed */}
        </HomepageCompositionRoot>
      </Content>
    </Page>
  );
};