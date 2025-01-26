import {
  createBaseThemeOptions,
  createUnifiedTheme,
  genPageTheme,
  palettes,
  shapes,
} from '@backstage/theme';

export const greenTheme = createUnifiedTheme({
  ...createBaseThemeOptions({
    palette: {
      ...palettes.light,
      primary: {
        main: '#1B5E20',  // Forest Green (Primary)
      },
      secondary: {
        main: '#66BB6A',  // Light Green (Secondary)
      },
      error: {
        main: '#D32F2F',  // Firebrick Red (Error)
      },
      warning: {
        main: '#FBC02D',  // Amber Yellow (Warning)
      },
      info: {
        main: '#1976D2',  // Royal Blue (Info)
      },
      success: {
        main: '#388E3C',  // Dark Green (Success)
      },
      background: {
        default: '#E8F5E9',  // Pale Green (Default Background)
        paper: '#FFFFFF',    // Pure White (Paper Elements)
      },
      banner: {
        info: '#1B5E20',  // Forest Green (Info Banner)
        error: '#D32F2F',  // Firebrick Red (Error Banner)
        text: '#1B5E20',  // Forest Green (Text)
        link: '#66BB6A',  // Light Green (Links)
      },
      errorBackground: '#FFCDD2',  // Light Pink-Red (Error Background)
      warningBackground: '#FFF9C4',  // Pale Yellow (Warning Background)
      infoBackground: '#BBDEFB',  // Light Sky Blue (Info Background)
      navigation: {
        background: '#1B5E20',  // Forest Green (Sidebar Background)
        indicator: '#66BB6A',   // Light Green (Active Indicator)
        color: '#FFFFFF',       // Pure White (Navigation Text)
        selectedColor: '#66BB6A',  // Light Green (Selected Item)
        hoverBackground: '#388E3C', // Dark Green (Hover Background)
        hoverColor: '#FFFFFF',   // Pure White (Hover Text)
        submenu: {
          background: '#388E3C',  // Dark Green (Submenu Background)
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
        // color: '#1B5E20', // Forest Green
      },
      h2: {
        fontSize: 48,
        fontWeight: 600,
        marginBottom: 14,
        // color: '#1B5E20', // Forest Green
      },
      h3: {
        fontSize: 36,
        fontWeight: 600,
        marginBottom: 12,
        // color: '#1B5E20', // Forest Green
      },
      h4: {
        fontSize: 30,
        fontWeight: 600,
        marginBottom: 10,
        // color: '#1B5E20', // Forest Green
      },
      h5: {
        fontSize: 24,
        fontWeight: 600,
        marginBottom: 8,
        // color: '#1B5E20', // Forest Green
      },
      h6: {
        fontSize: 20,
        fontWeight: 600,
        marginBottom: 6,
        // color: '#1B5E20', // Forest Green
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
          borderBottom: `6px solid ${theme.palette.primary.main}`, // Forest Green
        }),
      },
    },
  },
  pageTheme: {
    home: genPageTheme({ colors: ['#1B5E20', '#66BB6A'], shape: shapes.wave }), // Forest Green & Light Green
    documentation: genPageTheme({
      colors: ['#1B5E20', '#66BB6A'], // Forest Green & Light Green
      shape: shapes.wave2,
    }),
    tool: genPageTheme({ colors: ['#66BB6A', '#1B5E20'], shape: shapes.round }), // Light Green & Forest Green
    service: genPageTheme({
      colors: ['#1B5E20', '#66BB6A'], // Forest Green & Light Green
      shape: shapes.wave,
    }),
    website: genPageTheme({
      colors: ['#66BB6A', '#1B5E20'], // Light Green & Forest Green
      shape: shapes.wave,
    }),
    library: genPageTheme({
      colors: ['#1B5E20', '#66BB6A'], // Forest Green & Light Green
      shape: shapes.wave,
    }),
    other: genPageTheme({ colors: ['#1B5E20', '#66BB6A'], shape: shapes.wave }), // Forest Green & Light Green
    app: genPageTheme({ colors: ['#1B5E20', '#66BB6A'], shape: shapes.wave }), // Forest Green & Light Green
    apis: genPageTheme({ colors: ['#1B5E20', '#66BB6A'], shape: shapes.wave }), // Forest Green & Light Green
  },
});