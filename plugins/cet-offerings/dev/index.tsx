import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { cetOfferingsPlugin, CetOfferingsPage } from '../src/plugin';

createDevApp()
  .registerPlugin(cetOfferingsPlugin)
  .addPage({
    element: <CetOfferingsPage />,
    title: 'Root Page',
    path: '/cet-offerings',
  })
  .render();
