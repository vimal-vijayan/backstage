import React, { PropsWithChildren } from 'react';
import { makeStyles } from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import ExtensionIcon from '@material-ui/icons/Extension';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import CreateComponentIcon from '@material-ui/icons/AddCircleOutline';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import GroupIcon from '@material-ui/icons/People';
import CategoryIcon from '@material-ui/icons/Category';
import LayersIcon from '@material-ui/icons/Layers';

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
  useSidebarOpenState,
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
  const { isOpen } = useSidebarOpenState();

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
        {/* Logo */}
        <SidebarLogo />

        {/* Search */}
        <SidebarGroup label="Search" icon={<SearchIcon />} to="/search">
          <SidebarSearchModal />
        </SidebarGroup>

        <SidebarDivider />

        {/* Main Menu */}
        <SidebarGroup label="Menu" icon={<MenuIcon />}>
          {/* Simple items */}
          <SidebarItem icon={HomeIcon} to="/" text="Home" />
          <SidebarItem icon={CategoryIcon} to="catalog" text="Catalog" />
          <SidebarItem icon={ExtensionIcon} to="api-docs" text="APIs" />
          <SidebarItem icon={LibraryBooks} to="docs" text="Docs" />
          {/* Create... before Explore */}
          <SidebarItem icon={CreateComponentIcon} to="create" text="Create..." />
          <SidebarItem icon={LayersIcon} to="explore" text="Explore" />

          <SidebarDivider />

          {/* Example: My Groups (optional) */}
          <MyGroupsSidebarItem
            singularTitle="My Group"
            pluralTitle="My Groups"
            icon={GroupIcon}
          />

          <SidebarDivider />

          {/* A submenu item (example) */}
          <SidebarItem icon={CreateComponentIcon} text="More">
            <SidebarSubmenu title="More Options">
              <SidebarSubmenuItem
                title="Extra Create"
                to="create/extra"
                icon={CreateComponentIcon}
              />
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

          <SidebarDivider />

          {/* Scrollable placeholder */}
          <SidebarScrollWrapper />
        </SidebarGroup>

        <SidebarSpace />

        <SidebarDivider />

        {/* Settings */}
        <SidebarGroup
          label="Settings"
          icon={<UserSettingsSignInAvatar />}
          to="/settings"
        >
          <SidebarSettings />
        </SidebarGroup>
      </Sidebar>

      {/* Main content */}
      {children}
    </SidebarPage>
  );
};