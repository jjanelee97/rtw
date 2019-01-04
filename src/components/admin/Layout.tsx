import React, { Suspense } from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';

import Header from './Header';
import Sidebar from './Sidebar';
import Loading from 'components/shared/Loading';

import { Grid } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex'
  },
  container: {
    padding: theme.spacing.unit * 2
  },
  toolbar: theme.mixins.toolbar
}));

type Props = {
  route?: RouteConfig;
};

const Layout = (props: Props) => {
  const classes = useStyles({});

  return (
    <div className={classes.root}>
      <Header />
      <Sidebar />
      <Grid container>
        <Grid item xs={12} className={classes.container}>
          <div className={classes.toolbar} />
          <Suspense fallback={<Loading />}>
            {renderRoutes(props.route!.routes)}
          </Suspense>
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
