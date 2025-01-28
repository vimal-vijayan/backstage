import {
    createBaseThemeOptions,
    createUnifiedTheme,
    genPageTheme,
    palettes,
    shapes,
  } from '@backstage/theme';
  
  // Color Palette Definition
  const colors = {
    // Primary Colors
    mochaBrown: '#9C6A40',     // Primary main
    creamyTan: '#DABF9C',      // Secondary main
    
    // Status Colors
    burntSienna: '#BF4A40',    // Error main
    butteryGold: '#F2C14E',    // Warning main
    subtleCocoa: '#8C756A',    // Info main
    earthyGreen: '#78A574',    // Success main
    
    // Background Colors
    deepEspresso: '#1F1B18',   // Background default
    darkCocoa: '#2A241F',      // Paper/card background
    darkBrownRed: '#3F2D2A',   // Error background
    toastedBrown: '#4A3F29',   // Warning background
    subtleMocha: '#302825',    // Info background
    
    // Navigation Colors
    sidebarCocoa: '#2A241F',   // Navigation background
    deepBrown: '#3A322A',      // Navigation hover & submenu
    pureWhite: '#FFFFFF',      // Navigation text
    
    // Banner Colors
    bannerCocoa: '#8C756A',    // Banner info
    bannerSienna: '#BF4A40',   // Banner error
    bannerWhite: '#FFFFFF',    // Banner text
    bannerTan: '#DABF9C',      // Banner links
  };
  
  export const mochaMousseTheme = createUnifiedTheme({
    ...createBaseThemeOptions({
      palette: {
        ...palettes.dark,
        primary: {
          main: colors.mochaBrown,
        },
        secondary: {
          main: colors.creamyTan,
        },
        error: {
          main: colors.burntSienna,
        },
        warning: {
          main: colors.butteryGold,
        },
        info: {
          main: colors.subtleCocoa,
        },
        success: {
          main: colors.earthyGreen,
        },
        background: {
          default: colors.deepEspresso,
          paper: colors.darkCocoa,
        },
        banner: {
          info: colors.bannerCocoa,
          error: colors.bannerSienna,
          text: colors.bannerWhite,
          link: colors.bannerTan,
        },
        errorBackground: colors.darkBrownRed,
        warningBackground: colors.toastedBrown,
        infoBackground: colors.subtleMocha,
        navigation: {
          background: colors.sidebarCocoa,
          indicator: colors.creamyTan,
          color: colors.pureWhite,
          selectedColor: colors.creamyTan,
          hoverBackground: colors.deepBrown,
          hoverColor: colors.creamyTan,
          submenu: {
            background: colors.deepBrown,
          },
        },
      },
      typography: {
        htmlFontSize: 16,
        fontFamily: 'Roboto, sans-serif',
        h1: {
          fontSize: 64,
          fontWeight: 600,
          marginBottom: 16,
        },
        h2: {
          fontSize: 48,
          fontWeight: 600,
          marginBottom: 14,
        },
        h3: {
          fontSize: 36,
          fontWeight: 600,
          marginBottom: 12,
        },
        h4: {
          fontSize: 30,
          fontWeight: 600,
          marginBottom: 10,
        },
        h5: {
          fontSize: 24,
          fontWeight: 600,
          marginBottom: 8,
        },
        h6: {
          fontSize: 20,
          fontWeight: 600,
          marginBottom: 6,
        },
      },
    }),
    defaultPageTheme: 'home',
    fontFamily: 'Roboto',
    components: {
      BackstageHeader: {
        styleOverrides: {
          header: ({ theme }) => ({
            width: 'auto',
            margin: '5px',
            boxShadow: 'none',
            borderBottom: `6px solid ${theme.palette.primary.main}`,
          }),
        },
      },
    },
    pageTheme: {
      home: genPageTheme({
        colors: [colors.mochaBrown, colors.creamyTan],
        shape: shapes.wave,
      }),
      documentation: genPageTheme({
        colors: [colors.subtleCocoa, colors.mochaBrown],
        shape: shapes.wave2,
      }),
      tool: genPageTheme({
        colors: [colors.creamyTan, colors.subtleCocoa],
        shape: shapes.round,
      }),
      service: genPageTheme({
        colors: [colors.mochaBrown, colors.subtleCocoa],
        shape: shapes.wave,
      }),
      website: genPageTheme({
        colors: [colors.subtleCocoa, colors.creamyTan],
        shape: shapes.wave,
      }),
      library: genPageTheme({
        colors: [colors.mochaBrown, colors.creamyTan],
        shape: shapes.wave,
      }),
      other: genPageTheme({
        colors: [colors.subtleCocoa, colors.mochaBrown],
        shape: shapes.wave,
      }),
      app: genPageTheme({
        colors: [colors.mochaBrown, colors.subtleCocoa],
        shape: shapes.wave,
      }),
      apis: genPageTheme({
        colors: [colors.creamyTan, colors.mochaBrown],
        shape: shapes.wave,
      }),
    },
  });