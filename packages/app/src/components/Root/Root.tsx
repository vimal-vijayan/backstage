import React, { PropsWithChildren } from 'react';
import { makeStyles } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ExtensionIcon from '@material-ui/icons/Extension';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import CreateComponentIcon from '@material-ui/icons/AddCircleOutline';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import GroupIcon from '@material-ui/icons/People';

import {
  Sidebar,
  sidebarConfig,
  SidebarDivider,
  SidebarGroup,
  SidebarItem,
  SidebarPage,
  SidebarScrollWrapper,
  SidebarSpace,
  Link,
  SidebarSubmenu,
  SidebarSubmenuItem,
  useSidebarOpenState, // <-- Import this hook
} from '@backstage/core-components';

import {
  Settings as SidebarSettings,
  UserSettingsSignInAvatar,
} from '@backstage/plugin-user-settings';
import { SidebarSearchModal } from '@backstage/plugin-search';
import { MyGroupsSidebarItem } from '@backstage/plugin-org';

import { useApp } from '@backstage/core-plugin-api';

import LogoFull from './LogoFull';
import LogoIcon from './LogoIcon';

const useSidebarLogoStyles = makeStyles({
  root: {
    width: sidebarConfig.drawerWidthClosed,
    height: 3 * sidebarConfig.logoHeight,
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    marginBottom: -14,
  },
  link: {
    width: sidebarConfig.drawerWidthClosed,
    marginLeft: 24,
  },
});

const SidebarLogo = () => {
  const classes = useSidebarLogoStyles();
  const { isOpen } = useSidebarOpenState(); // <-- Use this to check open state

  return (
    <div className={classes.root}>
      <Link to="/" underline="none" className={classes.link} aria-label="Home">
        {isOpen ? <LogoFull /> : <LogoIcon />}
      </Link>
    </div>
  );
};

export const Root = ({ children }: PropsWithChildren<{}>) => {
  const app = useApp();

  return (
    <SidebarPage>
      <Sidebar>
        <SidebarLogo />
        <SidebarGroup label="Search" icon={<SearchIcon />} to="/search">
          <SidebarSearchModal />
        </SidebarGroup>
        <SidebarDivider />
        <SidebarGroup label="Menu" icon={<MenuIcon />}>
          {/* Updated Home Item with Catalog submenu */}
          <SidebarItem icon={HomeIcon} to="catalog" text="Home">
            <SidebarSubmenu title="Catalog">
              <SidebarSubmenuItem
                title="Domains"
                to="catalog?filters[kind]=domain"
                icon={app.getSystemIcon('kind:domain')}
              />
              <SidebarSubmenuItem
                title="Systems"
                to="catalog?filters[kind]=system"
                icon={app.getSystemIcon('kind:system')}
              />
              <SidebarSubmenuItem
                title="Components"
                to="catalog?filters[kind]=component"
                icon={app.getSystemIcon('kind:component')}
              />
              <SidebarSubmenuItem
                title="APIs"
                to="catalog?filters[kind]=api"
                icon={app.getSystemIcon('kind:api')}
              />
              <SidebarDivider />
              <SidebarSubmenuItem
                title="Resources"
                to="catalog?filters[kind]=resource"
                icon={app.getSystemIcon('kind:resource')}
              />
              <SidebarDivider />
              <SidebarSubmenuItem
                title="Groups"
                to="catalog?filters[kind]=group"
                icon={app.getSystemIcon('kind:group')}
              />
              <SidebarSubmenuItem
                title="Users"
                to="catalog?filters[kind]=user"
                icon={app.getSystemIcon('kind:user')}
              />
            </SidebarSubmenu>
          </SidebarItem>

          <MyGroupsSidebarItem
            singularTitle="My Group"
            pluralTitle="My Groups"
            icon={GroupIcon}
          />
          <SidebarItem icon={ExtensionIcon} to="api-docs" text="APIs" />
          <SidebarItem icon={LibraryBooks} to="docs" text="Docs" />
          <SidebarItem icon={CreateComponentIcon} to="create" text="Create..." />

          <SidebarDivider />
          <SidebarScrollWrapper>
            {/* Scrollable space for future nav items */}
          </SidebarScrollWrapper>
        </SidebarGroup>
        <SidebarSpace />
        <SidebarDivider />
        <SidebarGroup
          label="Settings"
          icon={<UserSettingsSignInAvatar />}
          to="/settings"
        >
          <SidebarSettings />
        </SidebarGroup>
      </Sidebar>
      {children}
    </SidebarPage>
  );
};