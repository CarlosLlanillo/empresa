import React from 'react';
import { AppBar } from '@snc/app-bar';
import { useEmiConfig } from '@snc/emi-config';
import { NavLink, useLocation } from 'react-router-dom';
import { routes } from 'components/Router/routes';

const MENU_ITEMS = [
  {
    title: 'Reset',
    to: '/',
  },
  {
    title: 'Google Api',
    to: routes.googleApi,
  },
  {
    title: 'Community Api',
    to: routes.communityApi,
  },
];

export const Header = (props) => {
  const config = useEmiConfig();
  const location = useLocation();

  const loginUrl = config.LOGIN_URL;
  const userApiUrl = `${config.AUTH.BASE}/users/search-one`;
  const { APP_LOGO, LAUNCHER_URL } = config;
  const logoSrc = APP_LOGO || `${process.env.PUBLIC_URL}/assets/logo-emi.svg`;

  return (
    <AppBar
      menus={MENU_ITEMS.map((item) => ({ ...item, tag: <NavLink to={item.to}>{item.title}</NavLink>, value: item.to }))}
      logo={{ src: logoSrc, srcLink: LAUNCHER_URL }}
      selected={location.pathname}
      loginUrl={loginUrl}
      userApiUrl={userApiUrl}
      collapse="xs"
    />
  );
};
