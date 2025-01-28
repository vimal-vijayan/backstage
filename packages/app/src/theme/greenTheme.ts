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
  forestGreen: '#1B5E20',    // Primary main
  lightGreen: '#66BB6A',     // Secondary main
  
  // Status Colors
  firebrickRed: '#D32F2F',   // Error main
  amberYellow: '#FBC02D',    // Warning main
  royalBlue: '#1976D2',      // Info main
  darkGreen: '#388E3C',      // Success main
  
  // Background Colors
  paleGreen: '#E8F5E9',      // Background default
  pureWhite: '#FFFFFF',      // Paper/card background
  lightPinkRed: '#FFCDD2',   // Error background
  paleYellow: '#FFF9C4',     // Warning background
  lightSkyBlue: '#BBDEFB',   // Info background
  
  // Navigation Colors
  sidebarGreen: '#1B5E20',   // Navigation background
  navGreen: '#388E3C',       // Navigation hover & submenu
  navIndicator: '#66BB6A',   // Navigation indicator & selected
  navText: '#FFFFFF',        // Navigation text
  
  // Banner Colors
  bannerGreen: '#1B5E20',    // Banner info & text
  bannerRed: '#D32F2F',      // Banner error
  bannerLink: '#66BB6A',     // Banner links
};

export const greenTheme = createUnifiedTheme({
  ...createBaseThemeOptions({
    palette: {
      ...palettes.light,
      primary: {
        main: colors.forestGreen,
      },
      secondary: {
        main: colors.lightGreen,
      },
      error: {
        main: colors.firebrickRed,
      },
      warning: {
        main: colors.amberYellow,
      },
      info: {
        main: colors.royalBlue,
      },
      success: {
        main: colors.darkGreen,
      },
      background: {
        default: colors.paleGreen,
        paper: colors.pureWhite,
      },
      banner: {
        info: colors.bannerGreen,
        error: colors.bannerRed,
        text: colors.bannerGreen,
        link: colors.bannerLink,
      },
      errorBackground: colors.lightPinkRed,
      warningBackground: colors.paleYellow,
      infoBackground: colors.lightSkyBlue,
      navigation: {
        background: colors.sidebarGreen,
        indicator: colors.navIndicator,
        color: colors.navText,
        selectedColor: colors.navIndicator,
        hoverBackground: colors.navGreen,
        hoverColor: colors.navText,
        submenu: {
          background: colors.navGreen,
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
      colors: [colors.forestGreen, colors.lightGreen],
      shape: shapes.wave,
    }),
    documentation: genPageTheme({
      colors: [colors.forestGreen, colors.lightGreen],
      shape: shapes.wave2,
    }),
    tool: genPageTheme({
      colors: [colors.lightGreen, colors.forestGreen],
      shape: shapes.round,
    }),
    service: genPageTheme({
      colors: [colors.forestGreen, colors.lightGreen],
      shape: shapes.wave,
    }),
    website: genPageTheme({
      colors: [colors.lightGreen, colors.forestGreen],
      shape: shapes.wave,
    }),
    library: genPageTheme({
      colors: [colors.forestGreen, colors.lightGreen],
      shape: shapes.wave,
    }),
    other: genPageTheme({
      colors: [colors.forestGreen, colors.lightGreen],
      shape: shapes.wave,
    }),
    app: genPageTheme({
      colors: [colors.forestGreen, colors.lightGreen],
      shape: shapes.wave,
    }),
    apis: genPageTheme({
      colors: [colors.forestGreen, colors.lightGreen],
      shape: shapes.wave,
    }),
  },
});