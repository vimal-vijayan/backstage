import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const cetOfferingsPlugin = createPlugin({
  id: 'cet-offerings',
  routes: {
    root: rootRouteRef,
  },
});

export const CetOfferingsPage = cetOfferingsPlugin.provide(
  createRoutableExtension({
    name: 'CetOfferingsPage',
    component: () =>
      // import('./components/FrontendComponent').then(m => m.FrontendComponent),
      import('./components/TeamTabs').then(m => m.TeamTabs),
    mountPoint: rootRouteRef,
  }),
);
