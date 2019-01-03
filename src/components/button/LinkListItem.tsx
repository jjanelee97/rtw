import React from 'react';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import { NavLink, NavLinkProps } from 'react-router-dom';

type Props = ListItemProps & NavLinkProps;

const LinkListItem = (props: Props) => {
  return <ListItem component={NavLink} {...props as any} />;
};

export default LinkListItem;
