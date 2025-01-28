import {
  createBaseThemeOptions,
  createUnifiedTheme,
  genPageTheme,
  palettes,
  shapes,
} from '@backstage/theme';

// Color Palette Definition
const colors = {
  skyBlue: '#1D9BF0',      // Bright Sky Blue - Primary brand color
  lightCyan: '#A5F3FC',    // Light Cyan Blue - Secondary accent color
  charcoal: '#181818',     // Deep Charcoal Gray - Main background
  darkGray: '#282828',     // Dark Gray - Paper/card background
  darkerGray: '#252525',   // Darker Charcoal Gray - Navigation background
  mediumGray: '#424242',   // Medium Dark Gray - Submenu background
  blueGray: '#607D8B',     // Muted Blue-Gray - Hover state in submenu
  brightBlue: '#374A77',   // Bright Blue - Hover state in navigation
  deepSkyBlue: '#00BFFF',  // Deep Sky Blue - Navigation indicators
  magentaPink: '#EE2A7B',  // Vivid Magenta Pink - Error states
  pureWhite: '#FFFFFF',    // Pure White - Text and contrast
  darkerSkyBlue: '#106ba3' // Darker Sky Blue - Button hover state
};

export const darkIceTheme = createUnifiedTheme({
  ...createBaseThemeOptions({
    palette: {
      ...palettes.dark,
      primary: {
        main: colors.skyBlue,
      },
      secondary: {
        main: colors.lightCyan,
      },
      background: {
        default: colors.charcoal,
        paper: colors.darkGray,
      },
      banner: {
        info: colors.lightCyan,
        error: colors.magentaPink,
        text: colors.pureWhite,
        link: colors.skyBlue,
      },
      navigation: {
        background: colors.darkerGray,
        indicator: colors.deepSkyBlue,
        color: colors.pureWhite,
        selectedColor: colors.deepSkyBlue,
        navItem: {
          hoverBackground: colors.brightBlue,
        },
        submenu: {
          background: colors.mediumGray,
          color: colors.pureWhite,
          navigation: {
            hoverBackground: colors.blueGray,
            background: colors.darkerGray,
            color: colors.pureWhite,
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
          backgroundColor: colors.skyBlue,
          '&:hover': {
            backgroundColor: colors.darkerSkyBlue,
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
        },
      },
    },
  },

  pageTheme: {
    home: genPageTheme({
      colors: [colors.skyBlue, colors.lightCyan], // Primary + Secondary colors
      shape: shapes.wave,
    }),
    documentation: genPageTheme({
      colors: [colors.lightCyan, colors.skyBlue], // Secondary + Primary colors
      shape: shapes.wave2,
    }),
    tool: genPageTheme({
      colors: [colors.skyBlue, colors.lightCyan], // Primary + Secondary colors
      shape: shapes.round,
    }),
    service: genPageTheme({
      colors: [colors.skyBlue, colors.lightCyan], // Primary + Secondary colors
      shape: shapes.wave,
    }),
  },
});