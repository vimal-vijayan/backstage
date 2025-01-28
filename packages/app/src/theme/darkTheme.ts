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
        main: '#3B82F6', // **Brighter Blue (Primary)**
      },
      secondary: {
        main: '#60A5FA', // **Light Blue (Secondary)**
      },
      error: {
        main: '#EF4444', // **Vibrant Red (Error)**
      },
      warning: {
        main: '#F59E0B', // **Bright Amber (Warning)**
      },
      info: {
        main: '#60A5FA', // **Light Blue (Info)**
      },
      success: {
        main: '#10B981', // **Bright Green (Success)**
      },
      background: {
        default: '#121212', // **Dark Background (Default)**
        paper: '#1E1E1E',   // **Darker Gray (Paper Elements)**
      },
      banner: {
        info: '#60A5FA',  // **Light Blue (Info Banner)**
        error: '#EF4444', // **Vibrant Red (Error Banner)**
        text: '#FFFFFF',  // **Pure White (Banner Text)**
        link: '#60A5FA',  // **Light Blue (Banner Links)**
      },
      errorBackground: '#442C2C',    // **Dark Red (Error Background)**
      warningBackground: '#4A3D29',  // **Dark Amber (Warning Background)**
      infoBackground: '#243447',     // **Dark Blue (Info Background)**
      navigation: {
        background: '#1E1E1E', // **Dark Gray (Sidebar Background)**
        indicator: '#60A5FA',  // **Light Blue (Active Indicator)**
        color: '#FFFFFF',      // **Pure White (Navigation Text)**
        selectedColor: '#60A5FA', // **Light Blue (Selected Item)**
        hoverBackground: '#2C2C2C', // **Darker Gray (Hover Background)**
        hoverColor: '#60A5FA',  // **Light Blue (Hover Text)**
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
        // color: '#FFFFFF', // **Pure White**
      },
      h2: {
        fontSize: 48,
        fontWeight: 600,
        marginBottom: 14,
        // color: '#FFFFFF', // **Pure White**
      },
      h3: {
        fontSize: 36,
        fontWeight: 600,
        marginBottom: 12,
        // color: '#FFFFFF', // **Pure White**
      },
      h4: {
        fontSize: 30,
        fontWeight: 600,
        marginBottom: 10,
        // color: '#FFFFFF', // **Pure White**
      },
      h5: {
        fontSize: 24,
        fontWeight: 600,
        marginBottom: 8,
        // color: '#FFFFFF', // **Pure White**
      },
      h6: {
        fontSize: 20,
        fontWeight: 600,
        marginBottom: 6,
        // color: '#FFFFFF', // **Pure White**
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
          height: 'auto',
          margin: '5px',
          boxShadow: 'none',
          borderBottom: `6px solid ${theme.palette.primary.main}`,
        }),
      },
    },
  },
  pageTheme: {
    home: genPageTheme({
      colors: ['#3B82F6', '#60A5FA'], // **Brighter Blue & Light Blue**
      shape: shapes.wave,
    }),
    documentation: genPageTheme({
      colors: ['#60A5FA', '#3B82F6'], // **Light Blue & Brighter Blue**
      shape: shapes.wave2,
    }),
    tool: genPageTheme({
      colors: ['#60A5FA', '#3B82F6'], // **Light Blue & Brighter Blue**
      shape: shapes.round,
    }),
    service: genPageTheme({
      colors: ['#60A5FA', '#3B82F6'], // **Light Blue & Brighter Blue**
      shape: shapes.wave,
    }),
    website: genPageTheme({
      colors: ['#60A5FA', '#3B82F6'], // **Light Blue & Brighter Blue**
      shape: shapes.wave,
    }),
    library: genPageTheme({
      colors: ['#3B82F6', '#60A5FA'], // **Brighter Blue & Light Blue**
      shape: shapes.wave,
    }),
    other: genPageTheme({
      colors: ['#60A5FA', '#3B82F6'], // **Light Blue & Brighter Blue**
      shape: shapes.wave,
    }),
    app: genPageTheme({
      colors: ['#3B82F6', '#60A5FA'], // **Brighter Blue & Light Blue**
      shape: shapes.wave,
    }),
    apis: genPageTheme({
      colors: ['#60A5FA', '#3B82F6'], // **Light Blue & Brighter Blue**
      shape: shapes.wave,
    }),
  },
});