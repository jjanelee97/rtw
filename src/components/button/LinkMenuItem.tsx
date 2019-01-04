import React from 'react';
import MenuItem, { MenuItemProps } from '@material-ui/core/MenuItem';
import { NavLink, NavLinkProps } from 'react-router-dom';

type Props = MenuItemProps & NavLinkProps;

const LinkMenuItem = (props: Props) => {
  return <MenuItem component={NavLink} {...props as any} />;
};

export default LinkMenuItem;
