import React from 'react';
import {
  Content,
  Header,
  Page,
} from '@backstage/core-components';
import {
  HomepageCompositionRoot,
  HomePageCompanyLogo,
  HomePageToolkit,
} from '@backstage/plugin-home';
import { HomePageSearchBar } from '@backstage/plugin-search';
import WikiIcon from '@material-ui/icons/MenuBook';
import DescriptionIcon from '@material-ui/icons/Description';
import { useStyles } from './styles';
// import backStageGradientIcon from './Icon_Gradient.svg'
import backStageBlackIcon from './Icon_Black.svg'

// Option 1: Import the logo (if using webpack module imports)
import logo from '../Root/logo/Essity.png';

export const HomePage = () => {

  const classes = useStyles();
  return (
    <Page themeId="home">
      <Header
        title="Welcome to Backstage"
      />
      <Content>
        <HomepageCompositionRoot>
          <HomePageCompanyLogo
            logo={<img src={logo} alt="Essity Logo" style={{ width: '150px' }} />}
          />
          <HomePageSearchBar />

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
                url: 'https://backstage.io/docs/overview/what-is-backstage',
                label: 'Learn Backstage',
                icon: <img src={backStageBlackIcon} alt='backstage logo' className={classes.backstageIcon} />,
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