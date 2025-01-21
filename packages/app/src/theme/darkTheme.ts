// darkTheme.ts

import {
  createBaseThemeOptions,
  createUnifiedTheme,
  genPageTheme,
  palettes,
  shapes,
} from '@backstage/theme';

export const darkTheme = createUnifiedTheme({
  ...createBaseThemeOptions({
    palette: {
      ...palettes.dark,
      primary: {
        main: '#3B82F6', // Brighter blue for better contrast
      },
      secondary: {
        main: '#60A5FA', // Light blue for contrast
      },
      error: {
        main: '#EF4444', // Vibrant red
      },
      warning: {
        main: '#F59E0B', // Bright amber
      },
      info: {
        main: '#60A5FA', // Light blue for informational messages
      },
      success: {
        main: '#10B981', // Bright green
      },
      background: {
        default: '#121212', // Dark background
        paper: '#1E1E1E',   // Darker shade for paper
      },
      banner: {
        info: '#60A5FA',
        error: '#EF4444',
        text: '#FFFFFF', // White text for banners
        link: '#60A5FA',
      },
      errorBackground: '#442C2C',    // Dark red
      warningBackground: '#4A3D29',  // Dark amber
      infoBackground: '#243447',     // Dark blue
      navigation: {
        background: '#1E1E1E', // Dark sidebar
        indicator: '#60A5FA',  // Brighter blue indicator
        color: '#FFFFFF',      // White text
        selectedColor: '#60A5FA',
        hoverBackground: '#2C2C2C',
        hoverColor: '#60A5FA',
      },
    },
    typography: {
      htmlFontSize: 16,
      fontFamily: 'Roboto, sans-serif',

      // Headings
      h1: {
        fontSize: 64,
        fontWeight: 600,
        marginBottom: 16,
        // color: '#FFFFFF',
      },
      h2: {
        fontSize: 48,
        fontWeight: 600,
        marginBottom: 14,
        // color: '#FFFFFF',
      },
      h3: {
        fontSize: 36,
        fontWeight: 600,
        marginBottom: 12,
        // color: '#FFFFFF',
      },
      h4: {
        fontSize: 30,
        fontWeight: 600,
        marginBottom: 10,
        // color: '#FFFFFF',
      },
      h5: {
        fontSize: 24,
        fontWeight: 600,
        marginBottom: 8,
        // color: '#FFFFFF',
      },
      h6: {
        fontSize: 20,
        fontWeight: 600,
        marginBottom: 6,
        // color: '#FFFFFF',
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
      colors: ['#3B82F6', '#60A5FA'],
      shape: shapes.wave,
    }),
    documentation: genPageTheme({
      colors: ['#60A5FA', '#3B82F6'],
      shape: shapes.wave2,
    }),
    tool: genPageTheme({
      colors: ['#60A5FA', '#3B82F6'],
      shape: shapes.round,
    }),
    service: genPageTheme({
      colors: ['#60A5FA', '#3B82F6'],
      shape: shapes.wave,
    }),
    website: genPageTheme({
      colors: ['#60A5FA', '#3B82F6'],
      shape: shapes.wave,
    }),
    library: genPageTheme({
      colors: ['#3B82F6', '#60A5FA'],
      shape: shapes.wave,
    }),
    other: genPageTheme({
      colors: ['#60A5FA', '#3B82F6'],
      shape: shapes.wave,
    }),
    app: genPageTheme({
      colors: ['#3B82F6', '#60A5FA'],
      shape: shapes.wave,
    }),
    apis: genPageTheme({
      colors: ['#60A5FA', '#3B82F6'],
      shape: shapes.wave,
    }),
  },
});