import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { apiDocsPlugin, ApiExplorerPage } from '@backstage/plugin-api-docs';
import {
  CatalogEntityPage,
  CatalogIndexPage,
  catalogPlugin,
} from '@backstage/plugin-catalog';
import {
  CatalogImportPage,
  catalogImportPlugin,
} from '@backstage/plugin-catalog-import';
import { ScaffolderPage, scaffolderPlugin } from '@backstage/plugin-scaffolder';
import { orgPlugin } from '@backstage/plugin-org';
import { SearchPage } from '@backstage/plugin-search';
import {
  TechDocsIndexPage,
  techdocsPlugin,
  TechDocsReaderPage,
} from '@backstage/plugin-techdocs';
import { TechDocsAddons } from '@backstage/plugin-techdocs-react';
import { ReportIssue } from '@backstage/plugin-techdocs-module-addons-contrib';
import { UserSettingsPage } from '@backstage/plugin-user-settings';
import { apis } from './apis';
import { entityPage } from './components/catalog/EntityPage';
import { searchPage } from './components/search/SearchPage';
import { Root } from './components/Root';
import { providers } from './components/singin/identityProviders';

import {
  AlertDisplay,
  OAuthRequestDialog,
  SignInPage,
} from '@backstage/core-components';
import { createApp } from '@backstage/app-defaults';
import { AppRouter, FlatRoutes } from '@backstage/core-app-api';
import { CatalogGraphPage } from '@backstage/plugin-catalog-graph';
import { RequirePermission } from '@backstage/plugin-permission-react';
import { catalogEntityCreatePermission } from '@backstage/plugin-catalog-common/alpha';
import {darkTheme} from './theme/darkTheme';
import {greenTheme} from './theme/greenTheme';
import {lightTheme} from './theme/lightTheme';
import {mochaMousseTheme} from './theme/mochaMouse';
import {myCustomTheme} from './theme/customTheme';
import LightIcon from '@material-ui/icons/WbSunny';
import { UnifiedThemeProvider} from '@backstage/theme';
import { HomepageCompositionRoot } from '@backstage/plugin-home';
import { HomePage } from './components/home/HomePage';
import { NotificationsPage } from '@backstage/plugin-notifications';
import { CetOfferingsPage } from '@internal/backstage-plugin-cet-offerings';

const app = createApp({
  apis,
  bindRoutes({ bind }) {
    bind(catalogPlugin.externalRoutes, {
      createComponent: scaffolderPlugin.routes.root,
      viewTechDoc: techdocsPlugin.routes.docRoot,
      createFromTemplate: scaffolderPlugin.routes.selectedTemplate,
    });
    bind(apiDocsPlugin.externalRoutes, {
      registerApi: catalogImportPlugin.routes.importPage,
    });
    bind(scaffolderPlugin.externalRoutes, {
      registerComponent: catalogImportPlugin.routes.importPage,
      viewTechDoc: techdocsPlugin.routes.docRoot,
    });
    bind(orgPlugin.externalRoutes, {
      catalogIndex: catalogPlugin.routes.catalogIndex,
    });
  },
  components: {
    SignInPage: props => (
      <SignInPage
        {...props}
        auto
        providers={providers}
        align='center'
      />
    )
  },
  themes: [{
    id: 'light',
    title: 'Light',
    variant: 'light',
    icon: <LightIcon />,
    Provider: ({ children }) => (
      <UnifiedThemeProvider theme={lightTheme} children={children} />
    ),
  }, {
    id: 'dark',
    title: 'Dark',
    variant: 'dark',
    icon: <LightIcon />,
    Provider: ({ children }) => (
      <UnifiedThemeProvider theme={darkTheme} children={children} />
    ),
  }, {
    id: 'green',
    title: 'Eco',
    variant: 'light',
    icon: <LightIcon />,
    Provider: ({ children }) => (
      <UnifiedThemeProvider theme={greenTheme} children={children} />
    ),
  }, {
    id: 'mochaMousse',
    title: 'Mocha Mousse',
    variant: 'light',
    icon: <LightIcon />,
    Provider: ({ children }) => (
      <UnifiedThemeProvider theme={mochaMousseTheme} children={children} />
    ),
  },{
    id: 'custom',
    title: 'Custom',
    variant: 'light',
    icon: <LightIcon />,
    Provider: ({ children }) => (
      <UnifiedThemeProvider theme={myCustomTheme} children={children} />
    ),
  }],
});

const routes = (
  <FlatRoutes>
    {/* <Route path="/" element={<Navigate to="catalog" />} /> */}
    <Route path="/" element={<HomepageCompositionRoot />}>
      <HomePage />
    </Route>
    <Route path='/catalog' element={<CatalogIndexPage />} />
    <Route
      path="/catalog/:namespace/:kind/:name"
      element={<CatalogEntityPage />}
    >
      {entityPage}
    </Route>
    <Route path="/docs" element={<TechDocsIndexPage />} />
    <Route
      path="/docs/:namespace/:kind/:name/*"
      element={<TechDocsReaderPage />}
    >
      <TechDocsAddons>
        <ReportIssue />
      </TechDocsAddons>
    </Route>
    <Route path="/create" element={<ScaffolderPage
    groups={
      [{
      title: "Recommended",
      filter: entity =>
        entity?.metadata?.tags?.includes('recommended') ?? false
      },
      {
      title: "IAM",
      filter: entity =>
        entity?.metadata?.tags?.some(tag => ['iam', 'IAM', 'identity', 'Identity', 'entra'].includes(tag)) ?? false
      },
      {
      title: "Azure",
      filter: entity =>
        entity?.metadata?.tags?.some(tag => ['azure', 'azure-services', 'Azure', 'AZURE', 'aks', 'AKS', 'k8s'].includes(tag)) ?? false
      },
      {
      title: "Azure DevOps",
      filter: entity =>
        entity?.metadata?.tags?.some(tag => ['azure-devops', 'azuredevops'].includes(tag)) ?? false
      },
    ]
    } />} />
    <Route path="/api-docs" element={<ApiExplorerPage />} />
    <Route
      path="/catalog-import"
      element={
        <RequirePermission permission={catalogEntityCreatePermission}>
          <CatalogImportPage />
        </RequirePermission>
      }
    />
    <Route path="/search" element={<SearchPage />}>
      {searchPage}
    </Route>
    <Route path="/settings" element={<UserSettingsPage />} />
    <Route path="/catalog-graph" element={<CatalogGraphPage />} />
    <Route path="/notifications" element={<NotificationsPage />} />
    <Route path="/cet-offerings" element={<CetOfferingsPage />} />
  </FlatRoutes>
);

export default app.createRoot(
  <>
    <AlertDisplay />
    <OAuthRequestDialog />
    <AppRouter>
      <Root>{routes}</Root>
    </AppRouter>
  </>,
);
