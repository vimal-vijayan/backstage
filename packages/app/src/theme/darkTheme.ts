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
  brighterBlue: '#3B82F6',    // Primary main
  lightBlue: '#60A5FA',       // Secondary main

  // Status Colors
  vibrantRed: '#EF4444',      // Error main
  brightAmber: '#F59E0B',     // Warning main
  brightGreen: '#10B981',     // Success main

  // Background Colors
  darkBackground: '#121212',   // Background default
  darkerGray: '#1E1E1E',      // Paper/card background
  darkRed: '#442C2C',         // Error background
  darkAmber: '#4A3D29',       // Warning background
  darkBlue: '#243447',        // Info background
  
  // Navigation Colors
  sidebarDark: '#1E1E1E',     // Navigation background
  darkestGray: '#2C2C2C',     // Navigation hover
  pureWhite: '#FFFFFF',       // Navigation text
  
  // Banner Colors
  bannerBlue: '#60A5FA',      // Banner info & link
  bannerRed: '#EF4444',       // Banner error
  bannerWhite: '#FFFFFF',     // Banner text
};

export const darkTheme = createUnifiedTheme({
  ...createBaseThemeOptions({
    palette: {
      ...palettes.dark,
      primary: {
        main: colors.brighterBlue,
      },
      secondary: {
        main: colors.lightBlue,
      },
      error: {
        main: colors.vibrantRed,
      },
      warning: {
        main: colors.brightAmber,
      },
      info: {
        main: colors.lightBlue,
      },
      success: {
        main: colors.brightGreen,
      },
      background: {
        default: colors.darkBackground,
        paper: colors.darkerGray,
      },
      banner: {
        info: colors.bannerBlue,
        error: colors.bannerRed,
        text: colors.bannerWhite,
        link: colors.bannerBlue,
      },
      errorBackground: colors.darkRed,
      warningBackground: colors.darkAmber,
      infoBackground: colors.darkBlue,
      navigation: {
        background: colors.sidebarDark,
        indicator: colors.lightBlue,
        color: colors.pureWhite,
        selectedColor: colors.lightBlue,
        hoverBackground: colors.darkestGray,
        hoverColor: colors.lightBlue,
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
      colors: [colors.brighterBlue, colors.lightBlue],
      shape: shapes.wave,
    }),
    documentation: genPageTheme({
      colors: [colors.lightBlue, colors.brighterBlue],
      shape: shapes.wave2,
    }),
    tool: genPageTheme({
      colors: [colors.lightBlue, colors.brighterBlue],
      shape: shapes.round,
    }),
    service: genPageTheme({
      colors: [colors.lightBlue, colors.brighterBlue],
      shape: shapes.wave,
    }),
    website: genPageTheme({
      colors: [colors.lightBlue, colors.brighterBlue],
      shape: shapes.wave,
    }),
    library: genPageTheme({
      colors: [colors.brighterBlue, colors.lightBlue],
      shape: shapes.wave,
    }),
    other: genPageTheme({
      colors: [colors.lightBlue, colors.brighterBlue],
      shape: shapes.wave,
    }),
    app: genPageTheme({
      colors: [colors.brighterBlue, colors.lightBlue],
      shape: shapes.wave,
    }),
    apis: genPageTheme({
      colors: [colors.lightBlue, colors.brighterBlue],
      shape: shapes.wave,
    }),
  },
});