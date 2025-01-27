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
import { useTheme } from '@material-ui/core';
import backStageBlackIcon from './Icon_Black.svg';
import logo from '../Root/logo/essity_logo.svg';
import whiteLogo from '../Root/logo/essity_logo_white.svg';

export const HomePage = () => {
  const theme = useTheme();
  const classes = useStyles();

  const getAppropriateLogoForTheme = () => {
    // Get the current theme type and background color
    const currentTheme = theme.palette.type;
    const backgroundColor = theme.palette.background.default;
    
    // This function converts hex colors to RGB for brightness calculation
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    };

    // Calculate perceived brightness using the standard formula
    const calculateBrightness = (color: string) => {
      const rgb = hexToRgb(color);
      if (!rgb) return 255; // Fallback to light theme if color parsing fails
      // This formula accounts for human perception of different colors
      return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    };

    const brightness = calculateBrightness(backgroundColor);
    
    // Determine which logo to use based on multiple criteria
    const shouldUseWhiteLogo = 
      currentTheme === 'dark' || 
      brightness < 128;

    // Return the appropriate logo based on the theme
    return shouldUseWhiteLogo ? whiteLogo : logo;  // Changed standardLogo to logo
  };

  return (
    <Page themeId="home">
      <Header title="Launchpad" />
      <Content>
        <HomepageCompositionRoot>
          <HomePageCompanyLogo
            logo={
              <img 
                src={getAppropriateLogoForTheme()} 
                alt="Essity Logo" 
                className={classes.logo}  // Using classes instead of inline styles
              />
            }
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
        </HomepageCompositionRoot>
      </Content>
    </Page>
  );
};