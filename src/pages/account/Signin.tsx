import React from 'react';
import Helmet from 'react-helmet';

import { LinkButton } from 'components/button';

import {
  FormControl,
  InputLabel,
  Input,
  FormControlLabel,
  Checkbox,
  Button,
  Paper,
  Typography
} from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing.unit * 8,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  header: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing.unit * 3
  },
  form: {
    padding: theme.spacing.unit * 3
  },
  formActions: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  button: {
    '&:not(:last-child)': {
      marginRight: theme.spacing.unit
    }
  }
}));

const Signin = () => {
  const classes = useStyles({});

  return (
    <>
      <Helmet
        title={'Signin - React with Typescript and Webpack'}
        meta={[
          {
            name: 'description',
            content: 'Signin - React with Typescript and Webpack'
          }
        ]}
      />
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5" className={classes.header}>
          Signin
        </Typography>
        <form method="POST" className={classes.form}>
          <FormControl required fullWidth margin="normal">
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input name="email" autoComplete="email" autoFocus />
          </FormControl>
          <FormControl required fullWidth margin="normal">
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              autoComplete="current-password"
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
          </FormControl>
          <div className={classes.formActions}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Signin
            </Button>
            <LinkButton
              variant="text"
              color="primary"
              to="/account/signup"
              className={classes.button}
            >
              Create one
            </LinkButton>
          </div>
        </form>
      </Paper>
    </>
  );
};

export default Signin;
