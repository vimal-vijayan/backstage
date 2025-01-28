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
  darkNavyBlue: '#20196A',    // Primary main
  brightRoyalBlue: '#4D7CFE',  // Secondary main

  // Status Colors
  brightRed: '#EF4444',        // Error main
  amberOrange: '#F59E0B',      // Warning main
  deepBlue: '#1C4E80',         // Info main
  brightGreen: '#10B981',      // Success main

  // Background Colors
  lightGray: '#F3F4F6',        // Background default
  pureWhite: '#FFFFFF',        // Paper/card background
  softRed: '#FFCDD2',          // Error background
  lightAmber: '#FFECB3',       // Warning background
  paleBlue: '#BBDEFB',         // Info background

  // Navigation Colors
  darkerNavyBlue: '#1c165f',   // Navigation background
  deepBurgundy: '#bb1a4a',     // Navigation indicator
  softPinkRed: '#E7527E',      // Navigation selected color
  mediumBlue: '#374A77',       // Navigation hover & submenu

  // Banner Colors
  deepestBlue: '#00005A',      // Banner info
  darkRoyalBlue: '#0A369D',    // Banner text

  // Page Theme Colors
  deepRed: '#800020',          // Used in page themes
  burgundyRed: '#A52A2A',       // Used in page themes

  // Navigation
  navStartColor: '#1c165f',    // Dark Navy Blue - Start of gradient
  navEndColor: '#800020',      // Deep Red - End of gradient
  navTextColor: '#FFFFFF',     // Pure White
  navSelectedColor: '#E7527E', // Soft Pink-Red
  navHoverColor: '#374A77',    // Medium Blue
};



export const lightTheme = createUnifiedTheme({
  ...createBaseThemeOptions({
    palette: {
      ...palettes.light,
      primary: {
        main: colors.darkNavyBlue,
      },
      secondary: {
        main: colors.brightRoyalBlue,
      },
      error: {
        main: colors.brightRed,
      },
      warning: {
        main: colors.amberOrange,
      },
      info: {
        main: colors.deepBlue,
      },
      success: {
        main: colors.brightGreen,
      },
      background: {
        default: colors.lightGray,
        paper: colors.pureWhite,
      },
      banner: {
        info: colors.deepestBlue,
        error: colors.brightRed,
        text: colors.darkRoyalBlue,
        link: colors.brightRoyalBlue,
      },
      errorBackground: colors.softRed,
      warningBackground: colors.lightAmber,
      infoBackground: colors.paleBlue,
      navigation: {
        background: colors.darkerNavyBlue,
        indicator: colors.deepBurgundy,
        color: colors.pureWhite,
        selectedColor: colors.softPinkRed,
        navItem: {
          hoverBackground: colors.mediumBlue,
        },
        submenu: {
          background: colors.mediumBlue,
        }
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
      colors: [colors.darkRoyalBlue, colors.deepRed],
      shape: shapes.wave
    }),
    documentation: genPageTheme({
      colors: [colors.deepestBlue, colors.burgundyRed],
      shape: shapes.wave2,
    }),
    tool: genPageTheme({
      colors: [colors.brightRoyalBlue, colors.burgundyRed],
      shape: shapes.round
    }),
    service: genPageTheme({
      colors: [colors.deepestBlue, colors.darkRoyalBlue],
      shape: shapes.wave,
    }),
    website: genPageTheme({
      colors: [colors.deepestBlue, colors.deepBlue],
      shape: shapes.wave,
    }),
    library: genPageTheme({
      colors: [colors.deepestBlue, colors.brightRoyalBlue],
      shape: shapes.wave,
    }),
    other: genPageTheme({
      colors: [colors.deepestBlue, colors.deepRed],
      shape: shapes.wave
    }),
    app: genPageTheme({
      colors: [colors.deepestBlue, colors.deepRed],
      shape: shapes.wave
    }),
    apis: genPageTheme({
      colors: [colors.deepestBlue, colors.deepRed],
      shape: shapes.wave
    }),
  },
});