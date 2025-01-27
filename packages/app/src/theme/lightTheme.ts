import {
  createBaseThemeOptions,
  createUnifiedTheme,
  genPageTheme,
  palettes,
  shapes,
} from '@backstage/theme';

export const lightTheme = createUnifiedTheme({
  ...createBaseThemeOptions({
    palette: {
      ...palettes.light,
      primary: {
        main: '#08005a',  // Dark Navy Blue
      },
      secondary: {
        main: '#4D7CFE',  // Bright Royal Blue
      },
      error: {
        main: '#EF4444',  // Bright Red
      },
      warning: {
        main: '#F59E0B',  // Amber Orange
      },
      info: {
        main: '#1C4E80',  // Deep Blue
      },
      success: {
        main: '#10B981',  // Bright Green
      },
      background: {
        default: '#F3F4F6',  // Light Gray
        paper: '#FFFFFF',    // Pure White
      },
      banner: {
        info: '#00005A',     // Deep Blue
        error: '#EF4444',    // Bright Red
        text: '#0A369D',     // Dark Royal Blue
        link: '#4D7CFE',     // Bright Royal Blue
      },
      errorBackground: '#FFCDD2',    // Soft Red
      warningBackground: '#FFECB3',  // Light Amber
      infoBackground: '#BBDEFB',     // Pale Blue
      navigation: {
        background: '#00005A',       // Dark Navy Blue
        indicator: '#bb1a4a',        // Deep Burgundy Red
        color: '#FFFFFF',            // White
        selectedColor: '#E7527E',    // Soft Pink-Red
        navItem: {
          hoverBackground: '#374A77',  // Medium Blue
        },
        submenu: {
          background: '#374A77',      // Medium Blue
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
    home: genPageTheme({ colors: ['#0A369D', '#800020'], shape: shapes.wave }), // Dark Blue & Deep Red
    documentation: genPageTheme({
      colors: ['#00005A', '#A52A2A'], // Deep Blue & Deep Red
      shape: shapes.wave2,
    }),
    tool: genPageTheme({ colors: ['#4D7CFE', '#A52A2A'], shape: shapes.round }), // Bright Blue & Deep Red
    service: genPageTheme({
      colors: ['#00005A', '#0A369D'], // Deep Blue & Dark Blue
      shape: shapes.wave,
    }),
    website: genPageTheme({
      colors: ['#00005A', '#1C4E80'], // Bright Blue & Deep Blue
      shape: shapes.wave,
    }),
    library: genPageTheme({
      colors: ['#00005A', '#4D7CFE'], // Dark Blue & Bright Blue
      shape: shapes.wave,
    }),
    other: genPageTheme({ colors: ['#00005A', '#800020'], shape: shapes.wave }), // Deep Blue & Bright Blue
    app: genPageTheme({ colors: ['#00005A', '#800020'], shape: shapes.wave }), // Dark Blue & Bright Blue
    apis: genPageTheme({ colors: ['#00005A', '#800020'], shape: shapes.wave }), // Deep Blue & Deep Red
  },
});