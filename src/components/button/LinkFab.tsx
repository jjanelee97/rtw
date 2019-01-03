import React from 'react';
import Fab, { FabProps } from '@material-ui/core/Fab';
import { NavLink, NavLinkProps } from 'react-router-dom';

type Props = FabProps & NavLinkProps;

const LinkFab = (props: Props) => {
  return <Fab component={NavLink} {...props as any} />;
};

export default LinkFab;
