import React, { useState } from 'react';

import { useAppState } from 'utils/store';
import AppState from '../../store';
import { actionCreators } from 'store/Identity';

import { Fab, Avatar, Menu, MenuItem, Theme } from '@material-ui/core';
import { LinkButton, LinkMenuItem } from 'components/button';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles((theme: Theme) => ({
  loginButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.2)'
    }
  },
  avatar: {
    height: theme.spacing.unit * 4,
    width: theme.spacing.unit * 4,
    backgroundColor: theme.palette.primary.main
  }
}));

const LoginPartial = () => {
  const classes = useStyles({});
  const [state] = useAppState(
    (appState: AppState) => appState.identity,
    actionCreators
  );
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget as any);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (!state.isAuthenticated) {
    return <LinkButton to={'/account/signin'}>Signin</LinkButton>;
  } else {
    return (
      <div>
        <Fab
          aria-label="More"
          aria-owns={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          size="small"
          className={classes.loginButton}
          onClick={handleClick}
        >
          <Avatar className={classes.avatar}>S</Avatar>
        </Fab>
        <Menu
          id="account-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
          <LinkMenuItem to={'/account/signout'}>
            Signout {state.displayName}
          </LinkMenuItem>
        </Menu>
      </div>
    );
  }
};

export default LoginPartial;
