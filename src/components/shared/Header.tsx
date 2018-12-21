import React from 'react';

import LinkButton from 'components/button/LinkButton';

import { AppBar, Toolbar, Button, Grid, InputBase } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { SearchOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) => ({
  grow: {
    flexGrow: 1
  },
  container: {
    margin: '0 auto',
    display: 'flex'
  },
  homeButton: {
    marginRight: theme.spacing.unit / 2
  },
  loginButton: {
    marginLeft: theme.spacing.unit / 2
  },
  button: {
    marginLeft: theme.spacing.unit / 2,
    marginRight: theme.spacing.unit / 2
  },
  selected: {
    color: '#fff'
  },
  search: {
    display: 'flex',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center'
  },
  input: {
    flex: 1
  },
  searchIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2
  }
}));

const Links = [
  {
    link: '/about',
    title: 'About'
  },
  {
    link: '/contact',
    title: 'Contact'
  },
  {
    link: '/counter',
    title: 'Counter'
  }
];

const Header = () => {
  const classes = useStyles({});

  return (
    <AppBar position="fixed">
      <Toolbar disableGutters>
        <Grid container>
          <Grid item xs={12} sm={9} className={classes.container}>
            <LinkButton
              variant="outlined"
              className={classes.homeButton}
              to={'/'}
              exact={true}
              activeClassName={classes.selected}
            >
              RTW
            </LinkButton>
            <span className={classes.grow} />
            <div className={classes.search}>
              <span className={classes.searchIcon}>
                <SearchOutlined />
              </span>
              <InputBase placeholder="Search…" className={classes.input} />
            </div>
            {Links.map(item => (
              <LinkButton
                key={item.title}
                className={classes.button}
                to={item.link}
                activeClassName={classes.selected}
              >
                {item.title}
              </LinkButton>
            ))}
            <Button className={classes.loginButton}>Login</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
