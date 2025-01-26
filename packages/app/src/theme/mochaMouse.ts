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
          ...palettes.dark,
          primary: {
              main: '#9C6A40', // **Warm Mocha Brown (Primary)**
          },
          secondary: {
              main: '#DABF9C', // **Creamy Tan Accent (Secondary)**
          },
          error: {
              main: '#BF4A40', // **Burnt Sienna (Error)**
          },
          warning: {
              main: '#F2C14E', // **Buttery Gold (Warning)**
          },
          info: {
              main: '#8C756A', // **Subtle Cocoa (Info)**
          },
          success: {
              main: '#78A574', // **Earthy Green (Success)**
          },
          background: {
              default: '#1F1B18', // **Deep Espresso Background (Default)**
              paper: '#2A241F',   // **Slightly Lighter Panel Background (Paper)**
          },
          banner: {
              info: '#8C756A',  // **Subtle Cocoa (Info Banner)**
              error: '#BF4A40', // **Burnt Sienna (Error Banner)**
              text: '#FFFFFF',  // **Pure White (Banner Text)**
              link: '#DABF9C',  // **Creamy Tan (Banner Links)**
          },
          errorBackground: '#3F2D2A',    // **Dark Brown-Red (Error Background)**
          warningBackground: '#4A3F29',  // **Toasted Brown (Warning Background)**
          infoBackground: '#302825',     // **Subtle Mocha (Info Background)**
          navigation: {
              background: '#2A241F', // **Dark Cocoa Brown (Sidebar Background)**
              indicator: '#DABF9C',  // **Creamy Tan (Active Indicator)**
              color: '#FFFFFF',      // **Pure White (Navigation Text)**
              selectedColor: '#DABF9C', // **Creamy Tan (Selected Item)**
              hoverBackground: '#3A322A', // **Deep Brown (Hover Background)**
              hoverColor: '#DABF9C',  // **Creamy Tan (Hover Text)**
              submenu: {
                  background: '#3A322A', // **Deep Brown (Submenu Background)**
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
  fontFamily: 'Roboto, sans-serif',
  components: {
      BackstageHeader: {
          styleOverrides: {
              header: ({ theme }) => ({
                  width: 'auto',
                  margin: '5px',
                  boxShadow: 'none',
                  borderBottom: `6px solid ${theme.palette.primary.main}`, // **Mocha Brown (Primary)**
              }),
          },
      },
  },
  
  pageTheme: {
      home: genPageTheme({
          colors: ['#9C6A40', '#DABF9C'], // **Mocha Brown & Creamy Tan**
          shape: shapes.wave,
      }),
      documentation: genPageTheme({
          colors: ['#8C756A', '#9C6A40'], // **Cocoa & Mocha Brown**
          shape: shapes.wave2,
      }),
      tool: genPageTheme({
          colors: ['#DABF9C', '#8C756A'], // **Creamy Tan & Cocoa**
          shape: shapes.round,
      }),
      service: genPageTheme({
          colors: ['#9C6A40', '#8C756A'], // **Mocha Brown & Cocoa**
          shape: shapes.wave,
      }),
      website: genPageTheme({
          colors: ['#8C756A', '#DABF9C'], // **Cocoa & Creamy Tan**
          shape: shapes.wave,
      }),
      library: genPageTheme({
          colors: ['#9C6A40', '#DABF9C'], // **Mocha Brown & Creamy Tan**
          shape: shapes.wave,
      }),
      other: genPageTheme({
          colors: ['#8C756A', '#9C6A40'], // **Cocoa & Mocha Brown**
          shape: shapes.wave,
      }),
      app: genPageTheme({
          colors: ['#9C6A40', '#8C756A'], // **Mocha Brown & Cocoa**
          shape: shapes.wave,
      }),
      apis: genPageTheme({
          colors: ['#DABF9C', '#9C6A40'], // **Creamy Tan & Mocha Brown**
          shape: shapes.wave,
      }),
  },
});