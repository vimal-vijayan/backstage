import {
    createBaseThemeOptions,
    createUnifiedTheme,
    genPageTheme,
    palettes,
    shapes,
  } from '@backstage/theme';
  
  export const mochaMousseTheme = createUnifiedTheme({
    ...createBaseThemeOptions({
      palette: {
        // Start with a "dark" base to maintain contrast
        ...palettes.dark,
        primary: {
          main: '#9C6A40', // Warm mocha brown
        },
        secondary: {
          main: '#DABF9C', // Creamy tan accent
        },
        error: {
          main: '#BF4A40', // Burnt sienna for errors
        },
        warning: {
          main: '#F2C14E', // Buttery gold for warnings
        },
        info: {
          main: '#8C756A', // Subtle cocoa for info highlights
        },
        success: {
          main: '#78A574', // Earthy green for success
        },
        background: {
          default: '#1F1B18', // Deep espresso background
          paper: '#2A241F',   // Slightly lighter panel background
        },
        // Customize banner colors if desired
        banner: {
          info: '#8C756A', 
          error: '#BF4A40',
          text: '#FFFFFF',
          link: '#DABF9C',
        },
        errorBackground: '#3F2D2A',    // Darker brown-red
        warningBackground: '#4A3F29',  // Toasted brown
        infoBackground: '#302825',     // Subtle mocha
        navigation: {
          background: '#2A241F', // Sidebar background
          indicator: '#DABF9C',  // Tan indicator
          color: '#FFFFFF',      // White text in nav
          selectedColor: '#DABF9C',
          hoverBackground: '#3A322A',
          hoverColor: '#DABF9C',
        },
      },
      typography: {
        // Adjust font sizes and colors to ensure readability
        htmlFontSize: 16,
        fontFamily: 'Roboto, sans-serif',
  
        // Headings
        h1: {
          fontSize: 64,
          fontWeight: 600,
          marginBottom: 16,
          color: '#FFFFFF',
        },
        h2: {
          fontSize: 48,
          fontWeight: 600,
          marginBottom: 14,
          color: '#FFFFFF',
        },
        h3: {
          fontSize: 36,
          fontWeight: 600,
          marginBottom: 12,
          color: '#FFFFFF',
        },
        h4: {
          fontSize: 30,
          fontWeight: 600,
          marginBottom: 10,
          color: '#FFFFFF',
        },
        h5: {
          fontSize: 24,
          fontWeight: 600,
          marginBottom: 8,
          color: '#FFFFFF',
        },
        h6: {
          fontSize: 20,
          fontWeight: 600,
          marginBottom: 6,
          color: '#FFFFFF',
        },
  
        // Body text
        body1: {
          fontSize: 16,
          lineHeight: 1.5,
          color: '#E2DED9', // Light neutral text
        },
        body2: {
          fontSize: 14,
          lineHeight: 1.5,
          color: '#CFC7C0', // Slightly darker for secondary text
        },
      },
    }),
    defaultPageTheme: 'home',
    fontFamily: 'Roboto, sans-serif',
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
    // Customize the "waves" or "shapes" on each page type
    pageTheme: {
      home: genPageTheme({
        colors: ['#9C6A40', '#DABF9C'],
        shape: shapes.wave,
      }),
      documentation: genPageTheme({
        colors: ['#8C756A', '#9C6A40'],
        shape: shapes.wave2,
      }),
      tool: genPageTheme({
        colors: ['#DABF9C', '#8C756A'],
        shape: shapes.round,
      }),
      service: genPageTheme({
        colors: ['#9C6A40', '#8C756A'],
        shape: shapes.wave,
      }),
      website: genPageTheme({
        colors: ['#8C756A', '#DABF9C'],
        shape: shapes.wave,
      }),
      library: genPageTheme({
        colors: ['#9C6A40', '#DABF9C'],
        shape: shapes.wave,
      }),
      other: genPageTheme({
        colors: ['#8C756A', '#9C6A40'],
        shape: shapes.wave,
      }),
      app: genPageTheme({
        colors: ['#9C6A40', '#8C756A'],
        shape: shapes.wave,
      }),
      apis: genPageTheme({
        colors: ['#DABF9C', '#9C6A40'],
        shape: shapes.wave,
      }),
    },
  });