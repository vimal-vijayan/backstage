import {
    createBaseThemeOptions,
    createUnifiedTheme,
    genPageTheme,
    palettes,
    shapes,
  } from '@backstage/theme';
  
  export const myCustomTheme = createUnifiedTheme({
    // 1. Base theme options (colors, typography, spacing, etc.)
    ...createBaseThemeOptions({
      palette: {
        // For a dark base, spread in palettes.dark
        ...palettes.dark,
        primary: {
          main: '#1D9BF0', // Example bright blue
        },
        secondary: {
          main: '#A5F3FC', // Example aqua accent
        },
        background: {
          default: '#181818', // Dark background
          paper: '#282828',   // Slightly lighter panels
        },
        // You can add custom keys if needed, e.g.:
        banner: {
          info: '#A5F3FC',
          error: '#EE2A7B',
          text: '#FFFFFF',
          link: '#1D9BF0',
        },
        // etc.
      },
      typography: {
        // Global font settings
        fontFamily: 'Roboto, sans-serif',
        htmlFontSize: 16,
  
        // Headings
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
  
    // 2. Additional theme properties
    defaultPageTheme: 'home',
    fontFamily: 'Roboto',
  
    // 3. Global component overrides
    components: {
      // --- Material UI overrides ---
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            textTransform: 'none',
            fontWeight: 600,
          },
          containedPrimary: {
            backgroundColor: '#1D9BF0',
            '&:hover': {
              backgroundColor: '#106ba3',
            },
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          // Example: Underline all <Typography variant="h2">
          h2: {
            textDecoration: 'underline',
          },
        },
      },
  
      // --- Backstage-specific overrides ---
      BackstageHeader: {
        styleOverrides: {
          header: {
            margin: '16px',
            // Remove or adjust shadow
            boxShadow: 'none',
            // Example custom background color:
            // backgroundColor: '#1D9BF0',
          },
        },
      },
      // You can override other Backstage components similarly
      // e.g., BackstageSidebar, BackstageFooter, etc.
    },
  
    // 4. Page themes (shapes & background gradients)
    pageTheme: {
      home: genPageTheme({
        colors: ['#1D9BF0', '#A5F3FC'],
        shape: shapes.wave,
      }),
      documentation: genPageTheme({
        colors: ['#A5F3FC', '#1D9BF0'],
        shape: shapes.wave2,
      }),
      tool: genPageTheme({
        colors: ['#1D9BF0', '#A5F3FC'],
        shape: shapes.round,
      }),
      service: genPageTheme({
        colors: ['#1D9BF0', '#A5F3FC'],
        shape: shapes.wave,
      }),
      // ...you can define shapes/colors for website, library, app, other, apis, etc.
    },
  });