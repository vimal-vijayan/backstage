// src/components/TeamTabs/TabPanel.tsx
import React from 'react';
import { TabPanelProps } from './types';

export const TabPanel = ({ children, value, index }: TabPanelProps) => (
  <div 
    role="tabpanel" 
    hidden={value !== index}
    id={`team-services-tabpanel-${index}`}
    aria-labelledby={`team-services-tab-${index}`}
  >
    {value === index && children}
  </div>
);