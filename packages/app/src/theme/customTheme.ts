import {
  createBaseThemeOptions,
  createUnifiedTheme,
  genPageTheme,
  palettes,
  shapes,
} from '@backstage/theme';

export const myCustomTheme = createUnifiedTheme({
  ...createBaseThemeOptions({
    palette: {
      ...palettes.dark,
      primary: {
        main: '#1D9BF0',  // Bright Sky Blue
      },
      secondary: {
        main: '#A5F3FC',  // Light Cyan Blue
      },
      background: {
        default: '#181818',  // Deep Charcoal Gray
        paper: '#282828',  // Dark Gray
      },
      banner: {
        info: '#A5F3FC',  // Light Cyan Blue
        error: '#EE2A7B',  // Vivid Magenta Pink
        text: '#FFFFFF',  // Pure White
        link: '#1D9BF0',  // Bright Sky Blue
      },
      navigation: {
        background: '#252525',  // Dark Charcoal Gray
        indicator: '#00BFFF',  // Deep Sky Blue
        color: '#FFFFFF',  // Pure White
        selectedColor: '#00BFFF',  // Deep Sky Blue
        navItem: {
          hoverBackground: '#374A77',  // Bright Blue
        },
        submenu: {
          background: '#424242',  // Medium Dark Gray
          color: '#FFFFFF',  // Pure White
          navigation: {
            hoverBackground: '#607D8B',  // Muted Blue-Gray
            background: '#252525',  // Dark Charcoal Gray
            color: '#FFFFFF',  // Pure White
          },
        },
      },
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
      htmlFontSize: 16,

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
    
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
        },
        containedPrimary: {
          backgroundColor: '#1D9BF0',  // Bright Sky Blue
          '&:hover': {
            backgroundColor: '#106ba3',  // Darker Sky Blue
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h2: {
          textDecoration: 'underline',
        },
      },
    },

    BackstageHeader: {
      styleOverrides: {
        header: {
          margin: '16px',
          boxShadow: 'none',
          // Example custom background color:
          // backgroundColor: '#1D9BF0',  // Bright Sky Blue
        },
      },
    },
  },

  pageTheme: {
    home: genPageTheme({
      colors: ['#1D9BF0', '#A5F3FC'],  // Bright Sky Blue & Light Cyan Blue
      shape: shapes.wave,
    }),
    documentation: genPageTheme({
      colors: ['#A5F3FC', '#1D9BF0'],  // Light Cyan Blue & Bright Sky Blue
      shape: shapes.wave2,
    }),
    tool: genPageTheme({
      colors: ['#1D9BF0', '#A5F3FC'],  // Bright Sky Blue & Light Cyan Blue
      shape: shapes.round,
    }),
    service: genPageTheme({
      colors: ['#1D9BF0', '#A5F3FC'],  // Bright Sky Blue & Light Cyan Blue
      shape: shapes.wave,
    }),
  },
});